import mongoose, { mongo } from 'mongoose';

const questionSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Litigant',
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['open', 'closed'], 
        default: 'open' 
    }
}, { timestamps: true ,
    toJSON: { virtuals: true },
toObject: { virtuals: true }});
questionSchema.virtual('answers', {
    ref: 'Answer',
    localField: '_id',
    foreignField: 'question'
});


export const Question = mongoose.model("Question",questionSchema)