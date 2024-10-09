// import Question from '../models/question.model.js';
// import asyncHandler from '../utils/asyncHandler.js';
// import ApiError from '../utils/ApiError.js';
// import { ApiResponse } from '../utils/ApiResponse.js';
// import jwt from "jsonwebtoken"





// const createQuestion = asyncHandler(async (req, res) => {
//     // Get the token from the headers
//     const token = req.headers.authorization.split(" ")[1]; // "Bearer <token>"

//     // Verify the token and extract the litigant ID
//     let litigantId;
//     if (token) {
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         // Use the same secret key
//         litigantId = decoded.litigantId; // Extract the litigant ID from the token
//     } else {
//         return res.status(401).json({ message: 'No token provided, authorization denied' });
//     }

//     const { title, description } = req.body;

//     // Create a new question using the litigantId
//     const question = await Question.create({
//         title,
//         description,
//         litigantId, // Associate the question with the litigant
//     });

//     res.status(201).json({
//         success: true,
//         data: question,
//     });
// });


// // Fetch all questions with their answers
// const getQuestionsWithAnswers = asyncHandler(async (req, res, next) => {
//     const questions = await Question.find({})
//         .populate('createdBy', 'name') // Fetch the litigant who asked the question
//         .populate({
//             path: 'answers',
//             populate: { path: 'answeredBy', select: 'name' }, // Fetch lawyers who answered
//         });

//     if (!questions) {
//         return next(new ApiError(404, 'No questions found'))
//     }

//     res.status(200).json(new ApiResponse(true, 'Questions fetched successfully', { questions }));
// });


// export { getQuestionsWithAnswers, createQuestion }