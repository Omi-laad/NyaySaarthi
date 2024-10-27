import { sendConsultationEmail } from '../services/consultationMailer.js';
import { Lawyer } from '../models/lawyer.model.js';
import { Litigant } from '../models/litigant.model.js';
import Consultation from '../models/consultation.model.js';
import { sendConsultationEmail } from '../services/consultationMailer.js';
import asyncHandler from '../utils/asyncHandler.js';



export const bookConsultation = asyncHandler(async (req, res) => {
    try {
        const {
            lawyerId,
            clientId,
            consultationDateTime
        } = req.body;

        // Fetch lawyer and client details from the database
        const lawyer = await Lawyer.findById(lawyerId);
        const client = await Litigant.findById(clientId);

        if (!lawyer) {
            return res.status(404).json({
                success: false,
                message: 'Lawyer not found'
            });
        }

        if (!client) {
            return res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }

        // Check for overlapping consultations
        const existingConsultation = await Consultation.findOne({
            lawyer: lawyerId,
            dateTime: consultationDateTime
        });

        if (existingConsultation) {
            return res.status(409).json({
                success: false,
                message: 'Consultation already booked for this time'
            });
        }

        // Send consultation emails with meet link
        const { meetLink } = await sendConsultationEmail({
            lawyerEmail: lawyer.email,
            lawyerName: lawyer.name,
            clientEmail: client.email,
            clientName: client.name,
            consultationDateTime
        });

        // Save consultation details to the database
        const consultation = await Consultation.create({
            lawyer: lawyerId,
            client: clientId,
            dateTime: consultationDateTime,
            meetLink
        });

        res.status(201).json({
            success: true,
            message: 'Consultation booked successfully',
            data: consultation
        });

    } catch (error) {
        console.error('Booking consultation failed:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to book consultation due to an internal error',
            error: error.message // Add error message for more context
        });
    }
}
);