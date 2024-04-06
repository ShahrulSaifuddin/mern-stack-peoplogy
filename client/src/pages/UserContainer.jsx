import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';
import Users from './Users';

export const Loader = async () => {
  try {
    const { data } = await customFetch.get(`/users`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/users');
  }
};

function UserContainer() {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Users</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {users.map((user) => (
          <Users key={user._id} {...user} />
        ))}
      </div>
    </div>
  );
}

export default UserContainer;
