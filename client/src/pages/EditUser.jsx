import { Form, redirect, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const Action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/users/${params.id}`, data);
    toast.success('Update user successful');
    return redirect('/users');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const Loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/users/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/users');
  }
};

const EditUser = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className="container">
      <h1>Edit User</h1>
      <Form method="post">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            defaultValue={user.name}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            defaultValue={user.email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            defaultValue={user.age}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default EditUser;
