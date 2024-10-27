import express from 'express';
import { createQuestion, getQuestions ,getAllQuestionsWithAnswers,getQuestionWithAnswers, getQuestionsById, getQuestionsByAuthorId} from '../controllers/question.controller.js';
import { verifyJWT } from '../middlewares/auth.middlerware.js';

const router = express.Router();

router.post('/', verifyJWT, createQuestion);
router.get('/', getQuestions);

router.get('/all', verifyJWT, getAllQuestionsWithAnswers);
router.get('/:questionId/details', verifyJWT, getQuestionWithAnswers);
router.get('/:questionId', getQuestionsById);
router.get('/author/:questionAuthorId',getQuestionsByAuthorId);




 export default router;
