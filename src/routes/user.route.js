import { Router } from 'express';
import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

export const userRouter = Router();

userRouter.get('/users', authMiddleware, getAllUsers);
userRouter.get('/users/:id', authMiddleware, getUserById);
userRouter.put('/users/:id', authMiddleware, updateUser);
userRouter.delete('/users/:id', authMiddleware, deleteUser);
