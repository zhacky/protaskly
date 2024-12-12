<script lang='ts'>
	import { onMount } from 'svelte';
	import type { PageData, ActionData } from './$types';

	let { form }: { data: PageData, form: ActionData } = $props();
	import { goto } from '$app/navigation';


	let error: string | null = form?.error || null;

	onMount(async() => {
		const f = form;
		if (f?.success) {
			console.debug(f);
			const token = f.token;
			const username = f.username;
			const firstName = f.firstName;
			const lastName = f.lastName;
			const email = f.email;
			console.debug("Token: ", token);
			console.debug("username: ", username);
			console.debug('firstName: ', firstName);
			console.debug('lastName: ', lastName);
			console.debug('email: ', email);
			if (token){
				await goto("/protected");
			}
		} else {
			console.debug('Please log in.');
		}
	});
</script>
<form method='POST'>
	<input name='username' placeholder='Username' required type='text' />
	<input name='password' placeholder='Password' required type='password' />
	<input type='hidden' name='token' />
	<button type='submit'>Log in</button>
	{#if error}
		<p style='color: red;'>{error}</p>
	{/if}
</form>
