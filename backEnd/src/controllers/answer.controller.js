import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import Answer from '../models/answer.model.js';
import {Question} from '../models/question.model.js';

const createAnswer = asyncHandler(async (req, res) => {
    try {
        const question = await Question.findById(req.params.questionId);
        if (!question) {
            return res.status(404).json(new ApiError(404,"Questions not found"));
        }

        const answer = new Answer({
            content: req.body.content,
            author: req.lawyer._id,
            question: question._id
        });

        const savedanswer = await answer.save();
        if(!savedanswer)
        throw new ApiError(500,"Internal server error")

        res.status(201).json(new ApiResponse(201,answer,"answer registered successfully!"));
    } catch (error) {
        res.status(400).json(new ApiError(400,error,"Something went wrong"));
        
    }
});

export {createAnswer}