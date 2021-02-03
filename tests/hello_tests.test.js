const { expect } = require('chai');
const hasTests = true;

const request = require('supertest');
const createApp = require('../server/app');

// Check out the following
// https://medium.com/ssense-tech/a-battle-tested-strategy-for-automated-api-testing-f3278bd2df0a
describe('My Application', () => {
    it('should always have tests in it', () => {
        expect(hasTests).to.equal(true)
    });

    it('Should return success 200 on the home route', async() => {
        const server = await createApp();
        const response = await request(server).get('/api');

        expect(response.statusCode).to.equal(200);
    });
})