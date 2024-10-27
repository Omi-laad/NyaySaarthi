// import dotenv from 'dotenv';
// import express from "express";
// import nodemailer from 'nodemailer';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // Load environment variables from .env file
// dotenv.config();

// const router = express.Router();

// // Get the __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Create the transporter using Gmail service
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.AUTH_EMAIL, // Your email address
//         pass: process.env.AUTH_PASS   // Use an App Password for Gmail
//     }
// });

// // Define the route for sending consultation emails
// router.post('/send-consultation-email', (req, res) => {
//     const {
//         lawyerEmail,
//         lawyerName,
//         clientEmail,
//         clientName,
//         consultationDateTime,
//         // meetLink
//     } = req.body;

//     // Validate request body
//     if (!lawyerEmail || !lawyerName || !clientEmail || !clientName || !consultationDateTime || !meetLink) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Email options for the lawyer
//     const lawyerMailOptions = {
//         from: process.env.AUTH_EMAIL,
//         to: lawyerEmail,
//         subject: `New Consultation Booking: ${clientName}`,
//         html: `<h1>Dear ${lawyerName},</h1>
//                <p>You have a new consultation booking.</p>
//                <p><strong>Client:</strong> ${clientName}</p>
//                <p><strong>Date and Time:</strong> ${consultationDateTime}</p>
//                <p><strong>Meeting Link:</strong> <a href="${meetLink}">${meetLink}</a></p>`
//     };

//     // Email options for the client
//     const clientMailOptions = {
//         from: process.env.AUTH_EMAIL,
//         to: clientEmail,
//         subject: `Your Consultation with ${lawyerName}`,
//         html: `<h1>Dear ${clientName},</h1>
//                <p>Your consultation with ${lawyerName} has been successfully booked.</p>
//                <p><strong>Date and Time:</strong> ${consultationDateTime}</p>
//                <p><strong>Meeting Link:</strong> <a href="${meetLink}">${meetLink}</a></p>`
//     };

//     // Send email to lawyer
//     transporter.sendMail(lawyerMailOptions, (error, info) => {
//         if (error) {    
//             console.error('Error sending email to lawyer:', error); // Log the error for debugging
//             return res.status(500).json({ error: 'Failed to send email to lawyer' });
//         }

//         // Send email to client after lawyer email is sent successfully
//         transporter.sendMail(clientMailOptions, (error, info) => {
//             if (error) {
//                 console.error('Error sending email to client:', error); // Log the error for debugging
//                 return res.status(500).json({ error: 'Failed to send email to client' });
//             }
//             res.status(200).json({ message: 'Consultation emails sent successfully', info: info.response });
//         });
//     });
// });

// export default router;


import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto'; // For random link generation

// Load environment variables from .env file
dotenv.config();

const router = express.Router();

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the transporter using Gmail service
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL, // Your email address
        pass: process.env.AUTH_PASS   // Use an App Password for Gmail
    }
});

// Helper function to generate a dummy meeting link
const generateMeetLink = () => {
    const randomString = crypto.randomBytes(6).toString('hex'); // Generate random string
    return `https://meet.google.com/${randomString}`;
};

// Define the route for sending consultation emails
router.post('/send-consultation-email', (req, res) => {
    const {
        lawyerEmail,
        lawyerName,
        clientEmail,
        clientName,
        consultationDateTime,
        meetLink // Optional, might be undefined
    } = req.body;

    // Validate request body
    if (!lawyerEmail || !lawyerName || !clientEmail || !clientName || !consultationDateTime) {
        return res.status(400).json({ error: 'All required fields must be provided' });
    }

    // Use the provided meeting link or generate a random one
    const meetingLink = meetLink || generateMeetLink();

    // Email options for the lawyer
    const lawyerMailOptions = {
        from: process.env.AUTH_EMAIL,
        to: lawyerEmail,
        subject: `New Consultation Booking: ${clientName}`,
        html: `
            <h1>Dear ${lawyerName},</h1>
            <p>You have a new consultation booking.</p>
            <p><strong>Client:</strong> ${clientName}</p>
            <p><strong>Date and Time:</strong> ${consultationDateTime}</p>
            <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>`
    };

    // Email options for the client
    const clientMailOptions = {
        from: process.env.AUTH_EMAIL,
        to: clientEmail,
        subject: `Your Consultation with ${lawyerName}`,
        html: `
            <h1>Dear ${clientName},</h1>
            <p>Your consultation with ${lawyerName} has been successfully booked.</p>
            <p><strong>Date and Time:</strong> ${consultationDateTime}</p>
            <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>`
    };

    // Send email to lawyer
    transporter.sendMail(lawyerMailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email to lawyer:', error);
            return res.status(500).json({ error: 'Failed to send email to lawyer' });
        }

        // Send email to client after lawyer email is sent successfully
        transporter.sendMail(clientMailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email to client:', error);
                return res.status(500).json({ error: 'Failed to send email to client' });
            }
            res.status(200).json({
                message: 'Consultation emails sent successfully',
                info: info.response
            });
        });
    });
});

export default router;
