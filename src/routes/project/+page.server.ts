import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

export const actions = {
    default: async ({request, fetch }) => {
        const apiUrl = env.VITE_API_URL || "http://api.protaskly.com:8080";
        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const frontend = formData.get('frontend');

        if (!name || !description || !frontend) {
            return fail(400, { error: 'Missing required fields' });
        }

        const projectDto = {
            name: name,
            description: description,
            frontend: frontend,
            createdAt: new Date().toISOString()
        };

        const cookieHeader = request.headers.get('cookie');
        const token = cookieHeader?.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

        if (!token) {
            return fail(401, { error: 'Unauthorized' });
        }   

        try {
            const response = await fetch(`${apiUrl}/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(projectDto)
            });

            console.log("Response:", response);

            if (!response.ok) {
                return fail(response.status, { error: 'Failed to create project' });
            }

            const project = await response.json();
            return { success: true, project };
        } catch (error) {
            return fail(500, { error: 'Server error' });
        }
        
    }
} satisfies Actions;