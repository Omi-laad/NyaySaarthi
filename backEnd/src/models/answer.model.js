import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Lawyer',
        required: true 
    },
    question: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Question',
        required: true 
    },
    isAccepted: { 
        type: Boolean, 
        default: false 
    }
}, { timestamps: true });

export default mongoose.model('Answer', answerSchema);