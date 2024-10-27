const consultationTemplate = (lawyerName, clientName, dateTime, meetLink) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background-color: #003366;
                color: white;
                padding: 20px;
                text-align: center;
            }
            .content {
                padding: 20px;
                background-color: #f9f9f9;
            }
            .button {
                display: inline-block;
                padding: 12px 24px;
                background-color: #4CAF50;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                margin: 20px 0;
            }
            .details {
                background-color: #fff;
                padding: 15px;
                border-radius: 4px;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                padding: 20px;
                font-size: 12px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Legal Consultation Confirmation</h2>
            </div>
            <div class="content">
                <p>Dear ${clientName},</p>
                
                <p>Your consultation with ${lawyerName} has been successfully scheduled.</p>
                
                <div class="details">
                    <h3>Consultation Details:</h3>
                    <p><strong>Date & Time:</strong> ${dateTime}</p>
                    <p><strong>Lawyer:</strong> ${lawyerName}</p>
                    <p><strong>Meeting Type:</strong> Video Conference (Google Meet)</p>
                </div>

                <p>Please join the video consultation using the link below at the scheduled time:</p>
                
                <center>
                    <a href="${meetLink}" class="button" target="_blank">Join Meeting</a>
                </center>

                <p><strong>Important Notes:</strong></p>
                <ul>
                    <li>Please ensure you have a stable internet connection</li>
                    <li>Join the meeting 5 minutes before the scheduled time</li>
                    <li>Keep any relevant documents ready for discussion</li>
                    <li>Ensure your microphone and camera are working properly</li>
                </ul>

                <p>If you need to reschedule or cancel your consultation, please do so at least 24 hours in advance.</p>
            </div>
            <div class="footer">
                <p>This is an automated message. Please do not reply to this email.</p>
                <p>© 2024 Legal Consultation Services. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};