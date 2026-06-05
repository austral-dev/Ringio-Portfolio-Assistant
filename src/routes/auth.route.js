import {Router} from 'express';
import {register} from '../controllers/auth.controller.js'
import {login} from '../controllers/auth.controller.js'


export const authRouter = Router();

authRouter.post("/auth/register", register);
authRouter.post("/auth/login", login);