import { Router } from 'express'
import { getMessages, postMessage } from '../controllers/chatController.js'
import { authenticateToken } from '../middlewares/authMiddleware.js'

export const router = Router();

router.get('/', authenticateToken, getMessages);
router.post('/', authenticateToken, postMessage);
