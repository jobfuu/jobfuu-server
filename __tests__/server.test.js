'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('REST API Tests', () => {
  test('Response with a / route', async () => {
    const response = await request.get('/');

    expect(response.statusCode).toEqual(200);
    expect(response.badRequest).toBeFalsy();
    expect(response.req.path).toBe('/');
    expect(response.text).toEqual('Hello JobFuu Server');
  })
})