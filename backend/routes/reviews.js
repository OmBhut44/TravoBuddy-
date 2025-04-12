import expres from 'express';
import { createReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = expres.Router();
router.post('/:tourId', verifyUser, createReview)

export default router;