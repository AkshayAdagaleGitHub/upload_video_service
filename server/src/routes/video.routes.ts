import * as express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
// import { uploadVideo } from '../controllers/video.controllers';

const router = express.Router();

// router.post('/upload', authMiddleware, uploadVideo); // Protect the /upload route

export default router;