// import mongoose from "mongoose";
// const { Schema, model } = mongoose;



// const answerSchema = new mongoose.Schema({
//     question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true }, // Reference to the question being answered
//     content: { type: String, required: true },
//     answeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Lawyer', required: true }, // Refers to lawyers
//     createdAt: { type: Date, default: Date.now },
//     upvotes: { type: Number, default: 0 },
//     isBestAnswer: { type: Boolean, default: false } // Litigant can mark this as the best answer
// });



// const Answer = model('Answer', answerSchema)
// export default Answer