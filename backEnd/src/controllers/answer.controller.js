// import Answer from '../models/answer.model.js';
// import Question from '../models/question.model.js';
// import asyncHandler from '../utils/asyncHandler.js';
// import ApiError from '../utils/ApiError.js';
// import { ApiResponse } from '../utils/ApiResponse.js';

// // Answer a question (Lawyer)
// const answerQuestion = asyncHandler(async (req, res, next) => {
//     const questionId = req.params.id;
//     const { content } = req.body;

//     const question = await Question.findById(questionId);
//     if (!question) {
//         return next(new ApiError('Question not found', 404));
//     }

//     const newAnswer = new Answer({
//         question: question._id,
//         content,
//         answeredBy: req.user._id, // The logged-in lawyer
//     });

//     await newAnswer.save();

//     // Add answer to the question
//     question.answers.push(newAnswer._id);
//     await question.save();

//     res.status(201).json(new ApiResponse(true, 'Answer posted successfully', { answer: newAnswer }));
// });


// export { answerQuestion }