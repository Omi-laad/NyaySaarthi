import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Subsection schema to define subsections under a section
// const SubSectionSchema = new Schema({
//     subSectionNumber: { type: String, required: true },
//     description: { type: String, required: true },
// });

// Section schema to define sections under a law
const SectionSchema = new Schema({
    sectionNumber: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    // subSections: [SubSectionSchema], // Array of subsections
});

// Main law schema for Indian government laws
const LawDetailSchema = new Schema({
    lawName: { type: String, required: true }, // Name of the law
    lawCode: { type: String, required: true }, // Unique law code (for Indian legal reference)
    description: { type: String, required: true }, // Brief description of the law
    sections: [SectionSchema], // Array of sections
    enactedYear: { type: Number, required: true }, // Year of enactment
    ministry: { type: String, required: true }, // Governing Ministry or Department (e.g., Ministry of Law and Justice)
    jurisdiction: {
        type: String,
        enum: ['Central', 'State', 'Concurrent'], // Central, State, or Concurrent law
        required: true
    },
    amendments: {
        type: [String], // List of amendment references, if any
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive', 'Repealed'], // Status of the law
        default: 'Active'
    },
}, {
    timestamps: true,
});

const LawDetail = model('LawDetail', LawDetailSchema);

export default LawDetail;
