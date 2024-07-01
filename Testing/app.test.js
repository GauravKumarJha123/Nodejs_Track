const request = require('supertest');
const app = require('./app');

describe('GET /user', () => {
  it('responds with json', async () => {
    const response = await request(app).get('/user');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
  });
});