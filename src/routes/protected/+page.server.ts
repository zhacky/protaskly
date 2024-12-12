import { fail, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const load = async ({cookies}) => {
	const token = cookies.get('token');
	const username = cookies.get('username');
	if (!token) {
		throw redirect(302, '/login')
	}

	let apiUrl = env.VITE_API_URL;
	if (apiUrl === undefined) {
		apiUrl = "http://api.protaskly.com:8080";
	}
	try	{
		const response = await fetch(`${apiUrl}/auth/${username}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
		});
		if (!response.ok) {
			return fail(response.status, { error: 'Authentication failed' });
		}
		if (response.ok) {
			return await response.json();
		}
	} catch (error) {
		throw redirect(302, '/login');
	}
}