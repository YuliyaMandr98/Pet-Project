import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
    test('GET /posts returns 200 and array of posts', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts');
        expect(response.ok()).toBeTruthy();
        const posts = await response.json();
        expect(Array.isArray(posts)).toBe(true);
        expect(posts.length).toBe(100);
        expect(posts[0]).toHaveProperty('id');
        expect(posts[0]).toHaveProperty('title');
    });

    test('POST /posts creates a new post', async ({ request }) => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', { data: newPost });
        expect(response.status()).toBe(201);
        const post = await response.json();
        expect(post).toMatchObject(newPost);
        expect(post).toHaveProperty('id');
    });

    test('GET /posts/:id returns a specific post', async ({ request }) => {
        const postId = 1;
        const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        expect(response.ok()).toBeTruthy();
        const post = await response.json();
        expect(post).toHaveProperty('id', postId);
        expect(post).toHaveProperty('title');
    });

    test('PUT /posts/:id updates a post', async ({ request }) => {
        const postId = 10;
        const updatedPost = {
            id: postId,
            title: 'updated title',
            body: 'updated body',
            userId: 1,
        };
        const response = await request.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, { data: updatedPost });
        expect(response.status()).toBe(200);
        const post = await response.json();
        expect(post).toMatchObject(updatedPost);
    });

    test('DELETE /posts/:id deletes a post', async ({ request }) => {
        const postId = 1;
        const response = await request.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        // expect(response.status()).toBe(200);
        expect(await response.json()).toEqual({});
    });
});

