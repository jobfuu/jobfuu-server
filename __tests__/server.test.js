'use strict';

const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const { app } = require('../src/server');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API Tests', () => {
  test('Response with a / route', async () => {
    const response = await request.get('/');

    expect(response.statusCode).toEqual(200);
    expect(response.badRequest).toBeFalsy();
    expect(response.req.path).toBe('/');
    expect(response.text).toEqual('Hello JobFuu Server');
  });

  test('create a user', async () => {
    let response = await request.post('/user').send({
      name: 'test',
      email: 'test@mail.com',
      password: 'pass',
      role: 'user',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.email).toEqual('test');
    expect(response.body.password).toBeTruthy();
    expect(response.body.role).toEqual('user');
  });

  test('should read from users table', async () => {

  });

  test('should update users table', async () => {

  });

  test('should delete user from table', async () => {

  });
})