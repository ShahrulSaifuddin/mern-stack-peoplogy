import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout, UserContainer, EditUser } from './pages';
import CreateUserPage from './pages/CreateUserPage'; // Import CreateUserPage

import { Action as createUserAction } from './pages/CreateUserPage';
import { Loader as userContainerLoader } from './pages/UserContainer';
import { Loader as editUserLoader } from './pages/EditUser';
import { Action as updateUserAction } from './pages/EditUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <CreateUserPage />,
        action: createUserAction,
      },
      {
        path: 'users',
        element: <UserContainer />,
        loader: userContainerLoader,
      },
      {
        path: 'users/edit-user/:id',
        element: <EditUser />,
        action: updateUserAction,
        loader: editUserLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
