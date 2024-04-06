import { Router } from 'express';
import {
  createUser,
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userController.js';
const router = Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
export default router;
