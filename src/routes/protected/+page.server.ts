import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const load = async ({cookies}) => {
	const token = cookies.get('token');
	const username = cookies.get('username');
	if (!token) {
		throw redirect(302, '/login')
	}

	const apiUrl = env.VITE_API_URL;
	// try	{
	// 	const response = await fetch(`${apiUrl}/auth`, {
	// 		method: 'GET',
	// 		headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
	// 	});
	// 	return response.json();
	// } catch (error) {
	// 	throw redirect(302, '/login');
	// }

	return {username: username, token: token, apiUrl: apiUrl};
}