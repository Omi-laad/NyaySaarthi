import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lawyer',
        required: [true, 'Lawyer ID is required']
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Litigant',
        required: [true, 'Client ID is required']
    },
    dateTime: {
        type: Date,
        required: [true, 'Consultation date and time is required'],
        validate: {
            validator: function(value) {
                return value > new Date();
            },
            message: 'Consultation date must be in the future'
        }
    },
    meetLink: {
        type: String,
        required: [true, 'Meeting link is required'],
        validate: {
            validator: function(value) {
                return value.startsWith('https://meet.google.com/');
            },
            message: 'Invalid Google Meet link format'
        }
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'cancelled', 'rescheduled'],
        default: 'scheduled'
    },
    duration: {
        type: Number,
        default: 60, // Duration in minutes
        min: [15, 'Consultation duration must be at least 15 minutes'],
        max: [180, 'Consultation duration cannot exceed 3 hours']
    },
    notes: {
        type: String,
        maxlength: [1000, 'Notes cannot exceed 1000 characters']
    },
    cancellationReason: {
        type: String,
        maxlength: [500, 'Cancellation reason cannot exceed 500 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;