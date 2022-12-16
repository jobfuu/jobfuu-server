'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Error Handlers Tests', () => {
  test('Handles Bad Routes', async () => {
      const response = await request.get('/badROute');

      expect(response.statusCode).toEqual(404);
      expect(response.clientError).toBeTruthy();
      expect(response.req.method).toBe('GET');
  });

  test('Handles bad methods', async () => {
    const response = await request.delete('/user');
    expect(response.req.method).toBe('DELETE');
    expect(response.req.path).toBe('/user');
    expect(response.text).toEqual('{"error":404,"route":"/user","message":"Not Found"}');
  });
})