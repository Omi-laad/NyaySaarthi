import express from 'express';
import { createAnswer } from '../controllers/answer.controller.js';
import { verifyJWT } from '../middlewares/lawyerAuth.middlerware.js';

const router = express.Router();

router.post('/:questionId/answers',verifyJWT, createAnswer);

export default router;
