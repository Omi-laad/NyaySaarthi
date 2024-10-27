import request from 'supertest';
import app from '../app'; // Assuming your Express app is exported from here
import mongoose from 'mongoose';

describe('POST /api/consultations/book', () => {
    beforeAll(async () => {
        // Connect to MongoDB before tests
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        // Close the connection after tests
        await mongoose.connection.close();
    });

    it('should book a consultation successfully', async () => {
        const response = await request(app)
            .post('/api/consultations/book')
            .send({
                lawyerId: 'someValidLawyerId',
                clientId: 'someValidClientId',
                consultationDateTime: new Date(Date.now() + 3600000) // 1 hour from now
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Consultation booked successfully');
    });

    it('should return 404 if lawyer not found', async () => {
        const response = await request(app)
            .post('/api/consultations/book')
            .send({
                lawyerId: 'invalidLawyerId',
                clientId: 'someValidClientId',
                consultationDateTime: new Date(Date.now() + 3600000)
            });

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe('Lawyer not found');
    });

    // Additional tests for other scenarios
});
