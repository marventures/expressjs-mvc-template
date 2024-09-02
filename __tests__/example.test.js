import request from 'supertest';
import express from 'express';
import { test } from '../controllers/testController.js';

const app = express();

app.get('/api/test', test);

describe('GET /api/test', () => {
  it('should return a message "Hello, I am Test"', async () => {
    const response = await request(app).get('/api/test');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, I am Test' });
  });
});
