import expres from 'express';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getBooking } from '../controllers/bookingController.js';

const router = expres.Router();
router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getBooking)

export default router;