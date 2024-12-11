<script lang="ts">
	import { goto } from '$app/navigation';
	let username = '';
	let password = '';
	let firstName = '';
	let lastName = '';
	let email = '';
	let error = '';

	async function handleRegister() {
		const response = await fetch('/api/auth/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password, firstName, lastName, email })
		});

		if (response.ok) {
			const data = await response.json();
			localStorage.setItem('token', data.token);
			await goto('/protected');
		} else {
			error = 'Registration failed';
		}
	}
</script>

<form on:submit|preventDefault={handleRegister}>
	<input type="text" bind:value={username} placeholder="Username" required />
	<input type="password" bind:value={password} placeholder="Password" required />
	<input type="text" bind:value={firstName} placeholder="First Name" required />
	<input type="text" bind:value={lastName} placeholder="Last Name" required />
	<input type="email" bind:value={email} placeholder="Email" required />
	<button type="submit">Register</button>
	{#if error}
		<p>{error}</p>
	{/if}
</form>
