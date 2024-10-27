import {Question} from '../models/question.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import Answer from '../models/answer.model.js'

const createQuestion = asyncHandler(async (req, res) => {
    try {
        const question = new Question({
            ...req.body,
            author: req.litigant._id
        });
        const savedquestion = await question.save();

       if(!savedquestion)
        throw new ApiError(500,"Internal server error")

return res.status(201).json(
      new ApiResponse(201,question, 'Question created successfully')
    
)
        // res.status(201).json(question);
    } catch (error) {
        throw new ApiError(400, error.message);
    }
});

 const getQuestions = asyncHandler(async (req, res) => {
    try {
        const questions = await Question.find({})
            .populate('author', 'name')
            .sort({ createdAt: -1 });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


const getQuestionsById = asyncHandler(async (req, res, next) => {
    try {

        const question = await Question.findById(req.params.questionId);

        if (!question) {
            return next(new ApiError(404, 'Question not found'));
        }

        res.status(200).json(new ApiResponse(200, question, "Retrieved question successfully"));
    } catch (error) {
        next(new ApiError(500, error.message || 'Internal Server Error'));
    }
});

const getQuestionsByAuthorId = asyncHandler(async (req, res, next) => {
    try {
        const questions = await Question.find({ authorId: req.params.authorId }); // Use find for multiple questions

        if (!questions || questions.length === 0) {
            return next(new ApiError(404, 'No questions found for this author'));
        }

        res.status(200).json(new ApiResponse(200, questions, "Retrieved questions successfully"));
    } catch (error) {
        next(new ApiError(500, error.message || 'Internal Server Error'));
    }
});



const getQuestionWithAnswers = asyncHandler(async (req, res) => {
    try {
        const question = await Question.findById(req.params.questionId)
            .populate('author', 'fullName email')
            .populate({
                path: 'answers',
                populate: {
                    path: 'author',
                }
            });

        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        const answers = await Answer.find({ question: question._id })
            .populate('author', 'fullName email ')
            .sort({ createdAt: -1 });

        res.json({
            question,
            answers
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




const getAllQuestionsWithAnswers = asyncHandler(async (req, res) => {
    try {
        const questions = await Question.find()
            .populate('author', 'name email')
            .populate({
                path: 'answers',
                populate: {
                    path: 'author',
                    select: 'name email barNumber role'
                }
            })
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            data: questions
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Failed to fetch questions",
            error: error.message 
        });
    }
});

export {createQuestion,getQuestions, getQuestionWithAnswers, getAllQuestionsWithAnswers,getQuestionsById,getQuestionsByAuthorId}