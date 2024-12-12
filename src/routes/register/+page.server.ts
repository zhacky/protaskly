import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { VITE_API_URL } from '$env/static/private';

export const actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');

        if (!username || !password || !firstName || !lastName || !email) {
            return fail(400, { error: 'All fields are required' });
        }

        try {
            const response = await fetch(`${VITE_API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, firstName, lastName, email })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Registration failed:', errorText);
                return fail(response.status, { error: 'Registration failed' });
            }

            const result = await response.json();
            const { token } = result;

            return {
                success: true,
                token: token,
                message: 'Registered successfully'
            };
        } catch (error) {
            console.error('Internal server error:', error);
            return fail(500, { error: 'Internal server error' });
        }
    }
} satisfies Actions;