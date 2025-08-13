import test, { expect } from "@playwright/test";

test.describe('API Tests', () => {
    test('GET request', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/custom-endpoints', {
            headers: {
                'x-api-key': 'reqres-free-v1',
            }
        });
        expect(response.status()).toBe(200);
    });

    test('POST request', async ({ request }) => {
        const response = await request.post('https://reqres.in/api/custom-endpoints', {
            data: {
                name: 'John Doe',
                job: 'Software Engineer'
            },
            headers: {
                'x-api-key': 'reqres-free-v1',
            }
        });
        const data = await response.json();
        expect.soft(response.status()).toBe(201);
        expect.soft(data).toHaveProperty('id');
        expect.soft(data.name).toBe('John Doe');
        expect.soft(data.job).toBe('Software Engineer');
    });

    test('DELETE request', async ({ request }) => {
        const id = 1;
        const response = await request.delete(`https://reqres.in/api/custom-endpoints/${id}`, {
            headers: {
                'x-api-key': 'reqres-free-v1',
            }
        });
        expect.soft(response.status()).toBe(204);
        expect.soft(await response.text()).toBe('');
    });

    test('PATCH request', async ({ request }) => {
        const id = 1;
        const response = await request.patch(`https://reqres.in/api/users/${id}`, {
            data: {
                name: 'John Doe',
                job: 'Software Engineer'
            },
            headers: {
                'x-api-key': 'reqres-free-v1',
            }
        });
        const data = await response.json();
        expect.soft(response.status()).toBe(200);
        expect.soft(data.name).toBe('John Doe');
        expect.soft(data.job).toBe('Software Engineer');
    });
});
