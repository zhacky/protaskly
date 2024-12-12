<script lang="ts">
    import { goto } from '$app/navigation';
    import ProtasklyCreateIcon from '$lib/images/ProtasklyLoginIcon.svg';

    let username = '';
    let password = '';
    let firstName = '';
    let lastName = '';
    let email = '';
    let error = '';

    let errorMessage = '';
	let birthdayDay = '';
	let birthdayMonth = '';
	let birthdayYear = '';
	let newPassword = '';
	let confirmPassword = '';
	let gender = '';
	let passwordStrength = '';
	let passwordColor = '';
	let isLoading = false;
	let showStrength = false;


	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const months = [
		{ value: '01', label: 'January' },
		{ value: '02', label: 'February' },
		{ value: '03', label: 'March' },
		{ value: '04', label: 'April' },
		{ value: '05', label: 'May' },
		{ value: '06', label: 'June' },
		{ value: '07', label: 'July' },
		{ value: '08', label: 'August' },
		{ value: '09', label: 'September' },
		{ value: '10', label: 'October' },
		{ value: '11', label: 'November' },
		{ value: '12', label: 'December' }
	];
	const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
	const genders = ['Male', 'Female'];

	function evaluatePasswordStrength(newPassword: string): void {
		if (newPassword.length < 6) {
			passwordStrength = 'Weak';
			passwordColor = 'text-red-500';
		} else if (newPassword.length < 10) {
			passwordStrength = 'Moderate';
			passwordColor = 'text-yellow-500';
		} else if (/[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword) && /[^A-Za-z0-9]/.test(newPassword)) {
			passwordStrength = 'Strong';
			passwordColor = 'text-green-500';
		} else {
			passwordStrength = 'Moderate';
			passwordColor = 'text-yellow-500';
		}
	}

	$: if (newPassword) {
		evaluatePasswordStrength(newPassword);
		showStrength = true;
	} else {
		showStrength = false;
	}

    async function handleRegister() {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);

        const response = await fetch('/register', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            console.log('Registration successful');
            const data = await response.json();
            localStorage.setItem('token', data.token);
            await goto('/protected');
        } else {
            error = 'Registration failed';
        }
    }
</script>

<div class="min-h-screen flex items-center justify-center">
	<div
		class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
		<div class="text-center mb-8">
			<div class="flex justify-center">
				<img class="h-40" src={ProtasklyCreateIcon} alt="Logo">
			</div>

			<p class="text-gray-600 mt-2">Create your account</p>
		</div>

		<form on:submit={handleRegister} class="space-y-6">
			{#if errorMessage}
				<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
					<span class="block sm:inline">{errorMessage}</span>
				</div>
			{/if}

			<div class="space-y-2">
				<label for="firstName"></label>
				<input
					type="text"
					id="firstName"
					bind:value={firstName}
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
					placeholder="First name"
				/>
			</div>

			<div class="space-y-2">
				<label for="lastName"></label>
				<input
					type="text"
					id="lastName"
					bind:value={lastName}
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
					placeholder="Last name"
				/>
			</div>

			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-700" for="birthdate">Birthday</label>
				<div class="flex space-x-2">
					<select bind:value={birthdayDay}
									class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="" disabled selected>Day</option>
						{#each days as day}
							<option value={day}>{day}</option>
						{/each}
					</select>
					<select bind:value={birthdayMonth}
									class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="" disabled selected>Month</option>
						{#each months as month}
							<option value={month.value}>{month.label}</option>
						{/each}
					</select>
					<select bind:value={birthdayYear}
									class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="" disabled selected>Year</option>
						{#each years as year}
							<option value={year}>{year}</option>
						{/each}
					</select>
				</div>
			</div>

			<div class="space-y-2">
				<label for="gender"></label>
				<select bind:value={gender} id="gender"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
					<option value="" disabled selected>Select your gender</option>
					{#each genders as genderOption}
						<option value={genderOption}>{genderOption}</option>
					{/each}
				</select>
			</div>

			<div class="space-y-2">
				<label for="email"></label>
				<input
					type="email"
					id="email"
					bind:value={email}
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
					placeholder="Email"
				/>
			</div>

			<div class="space-y-2">
				<label for="newPassword"></label>
				<input
					type="password"
					id="newPassword"
					bind:value={newPassword}
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
					placeholder="New password"
				/>
				{#if showStrength}
					<p class={`text-sm ${passwordColor}`}>{passwordStrength} password</p>
				{/if}
			</div>

			<div class="space-y-2">
				<label for="confirmPassword"></label>
				<input
					type="password"
					id="confirmPassword"
					bind:value={confirmPassword}
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
					placeholder="Confirm password"
				/>
				{#if showStrength}
					<p class={`text-sm ${passwordColor}`}>{passwordStrength} password</p>
				{/if}
			</div>

			<button
				type="submit"
				class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
				disabled={isLoading}
			>
				{#if isLoading}
                    <span class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
														 fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
																		stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor"
																	d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                    </span>
				{:else}
					Submit
				{/if}
			</button>
		</form>
	</div>
</div>

<!-- <form on:submit|preventDefault={handleRegister}>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <input type="text" bind:value={firstName} placeholder="First Name" required />
    <input type="text" bind:value={lastName} placeholder="Last Name" required />
    <input type="email" bind:value={email} placeholder="Email" required />
    <button type="submit">Register</button>
    {#if error}
        <p class="error">{error}</p>
    {/if}
</form> -->

<style>
    .error {
        color: red;
    }
</style>