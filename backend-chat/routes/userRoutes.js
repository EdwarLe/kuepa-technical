import { Router } from 'express'
import { registerUser, loginUser } from '../controllers/userController.js'

export const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

