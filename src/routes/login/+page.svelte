<script lang='ts'>
	import { onMount } from 'svelte';
	import type { PageData, ActionData } from './$types';

	let { form }: { data: PageData, form: ActionData } = $props();
	import { goto } from '$app/navigation';

	let incorrect = false;
	let message = '';
	let showPassword = false;
	let rememberMe = false;
	let isLoading = false;


	function openDialog(event: Event) {
		event.preventDefault();
		// Add your dialog opening logic here
	}

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
			await goto("/protected");
		
		} else {
			console.debug('Please log in.');
		}
	});
</script>
	<div
	class="flex min-h-screen items-center justify-center"
>
	<div
		class="w-full max-w-md transform rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:scale-[1.01]"
	>
		<div class="mb-8 text-center">
			<div class="flex justify-center">
				<img class="h-40" src="src/lib/images/ProtasklyLoginIcon.svg" alt="Logo" />
			</div>
			<p class="mt-2 text-gray-600">Please sign in to continue</p>
		</div>

		<form method="POST" class="space-y-6">
			{#if incorrect}
				<div
					class="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
					role="alert"
				>
					<span class="block sm:inline">{message}</span>
				</div>
			{/if}

			<div class="space-y-2">
				<input
					type="text"
					id="username"
					name="username"
					class="w-full rounded-md border border-gray-300 px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Username / Email"
				/>
			</div>

			<div class="space-y-2">
				<div class="relative">
					{#if showPassword}
						<input
							type="text"
							id="password"
							name="password"			
							class="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Password"
						/>
					{:else}
						<input
							type="password"
							id="password"
							name="password"		
							class="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Password"
						/>
					{/if}
					<button
						type="button"
						on:click={() => showPassword = !showPassword}
						aria-label="Toggle password visibility"
						class="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
					>
						<i class={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
					</button>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<label class="flex items-center">
					<input
						type="checkbox" bind:checked={rememberMe}
					on:click={openDialog}
					/>
					<span class="ml-2 text-sm text-gray-600">Remember me</span>
				</label>
				<button
					on:click={(event) => { event.preventDefault(); openDialog(event); }}
					class="text-sm text-blue-600 hover:text-blue-800">Forgot password?</button
				>
			</div>

			<button
				type="submit"
				class="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
				disabled={isLoading}
			>
				{#if isLoading}
					<span class="flex items-center justify-center">
						<svg
							class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Logging in...
					</span>
				{:else}
					Login
				{/if}
			</button>
			<a href="/register">
				<button
					class="mt-3 w-full rounded-md border border-blue-600 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
				>
					Sign Up
				</button>
			</a>
		</form>
	</div>
</div>
	<!-- <input name='username' placeholder='Username' required type='text' />
	<input name='password' placeholder='Password' required type='password' />
	<input type='hidden' name='token' />
	<button type='submit'>Log in</button>
	{#if error}
		<p style='color: red;'>{error}</p>
	{/if} -->
