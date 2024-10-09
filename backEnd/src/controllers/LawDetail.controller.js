import asyncHandler from "../utils/asyncHandler.js";
import LawDetail from '../models/LawsDetail.model.js';
import ApiError from '../utils/ApiError.js';
import { ApiResponse } from "../utils/ApiResponse.js";


// Get all laws
const getAllLaws = asyncHandler(async (req, res) => {
    try {
        const laws = await LawDetail.find();

        if (!laws || laws.length === 0) {
            throw new ApiError(404, "No Indian laws found");
        }

        return res.status(200).json(new ApiResponse(200, laws, "Laws retrieved successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// Get law by ID
const getLawById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const law = await LawDetail.findById(id);

        if (!law) {
            throw new ApiError(404, `Law with ID: ${id} not found`);
        }

        return res.status(200).json(new ApiResponse(200, law, "Law retrieved successfully"));
    } catch (error) {
        if (error.kind === 'ObjectId') {
            throw new ApiError(400, `Invalid Law ID: ${id}`);
        }
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// Add new law
const createLaw = asyncHandler(async (req, res) => {
    const { lawName, lawCode, description, enactedYear, ministry, jurisdiction, sections, amendments, status } = req.body;

    if (!lawName || !lawCode || !description || !enactedYear || !ministry || !jurisdiction) {
        throw new ApiError(400, "All required fields must be provided");
    }

    try {
        const newLaw = new LawDetail({
            lawName,
            lawCode,
            description,
            enactedYear,
            ministry,
            jurisdiction,
            sections,
            amendments,
            status
        });

        const createdLaw = await newLaw.save();

        return res.status(201).json(new ApiResponse(201, createdLaw, "Law created successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// Update law by ID
const updateLawById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const updatedLaw = await LawDetail.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedLaw) {
            throw new ApiError(404, `Law with ID: ${id} not found`);
        }

        return res.status(200).json(new ApiResponse(200, updatedLaw, "Law updated successfully"));
    } catch (error) {
        if (error.kind === 'ObjectId') {
            throw new ApiError(400, `Invalid Law ID: ${id}`);
        }
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// Delete law by ID
const deleteLawById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedLaw = await LawDetail.findByIdAndDelete(id);

        if (!deletedLaw) {
            throw new ApiError(404, `Law with ID: ${id} not found`);
        }

        return res.status(200).json(new ApiResponse(200, deletedLaw, "Law deleted successfully"));
    } catch (error) {
        if (error.kind === 'ObjectId') {
            throw new ApiError(400, `Invalid Law ID: ${id}`);
        }
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

export { getAllLaws, getLawById, createLaw, updateLawById, deleteLawById }
