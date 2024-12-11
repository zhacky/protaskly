import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

export const actions = {
	default: async ({ cookies, request }) => {
		const apiUrl = env.VITE_API_URL;
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Username and password are required' });
		}

		try {
			const response = await fetch(`${apiUrl}/authenticate`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password })
			});

			if (!response.ok) {
				return fail(response.status, { error: 'Authentication failed' });
			}

			const result = await response.json();
			const { token, user } = result;

            data.set('token', token);

			//Store the token in a cookie
			cookies.set('token', token, {
				httpOnly: false,
				path: '/',
				secure: false
			});

			//Store the username in a cookie
			cookies.set('username', user.username, {
				httpOnly: false,
				path: '/',
				secure: false
			});
			data.set("token", token)
			return {success: true,
				token: token,
				username: user.username,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				message: 'Authenticated successfully'};
		} catch (error) {
			console.error(error);
			return fail(500, { error: 'Internal server error' });
		}
	}
} satisfies Actions;
