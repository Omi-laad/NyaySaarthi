// services/consultationMailer.js
import { transporter } from '../config/emailConfig.js';
import { generateMeetLink } from '../utils/generateMeetLink.js';
import { consultationTemplate } from '../utils/emailTemplates.js';

export const sendConsultationEmail = async ({
    lawyerEmail,
    lawyerName,
    clientEmail,
    clientName,
    consultationDateTime
}) => {
    try {
        const meetLink = generateMeetLink();
        
        // Format date time
        const formattedDateTime = new Date(consultationDateTime).toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'short'
        });

        // Send email to client
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: clientEmail,
            subject: 'Legal Consultation Confirmation',
            html: consultationTemplate(lawyerName, clientName, formattedDateTime, meetLink)
        });

        // Send email to lawyer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: lawyerEmail,
            subject: 'New Consultation Scheduled',
            html: consultationTemplate(lawyerName, clientName, formattedDateTime, meetLink)
        });

        return { success: true, meetLink };
    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error('Failed to send consultation emails');
    }
};
