import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { Link, useNavigate } from 'react-router-dom';

function Users({ _id, name, email, age }) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await customFetch.delete(`/users/${_id}`);
      toast.success('User deleted successfully');
      return navigate('.');
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <strong>Email:</strong> {email}
                <br />
                <strong>Age:</strong> {age}
              </p>
              <div className="d-flex justify-content-between">
                <Link className="btn btn-primary me-2" to={`edit-user/${_id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete()}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
