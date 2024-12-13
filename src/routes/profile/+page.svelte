<script lang="ts">
    import type { PageData } from './$types';


    let { data }: { data: PageData } = $props();

    console.debug('Data: ', data);

	let user = {
		username: 'johndoe',
		email: 'johndoe@example.com',
		fullName: 'John Doe',
		avatar: 'https://via.placeholder.com/150',
		company: '',
	};

	let isEditing = false;

	const toggleEdit = () => {
		isEditing = !isEditing;
	};

	const saveProfile = () => {
		// Save the profile (e.g., to a backend API)
		console.log('Profile saved:', user);
		toggleEdit();
	};

	const handleAvatarChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		if (target?.files?.[0]) {
			user.avatar = URL.createObjectURL(target.files[0]);
		}
	};

</script>

<div class="">
	<div class="max-w-3xl mx-auto bg-white p-10 rounded-xl h-auto w-screen profile">
		<div class="flex justify-between items-center mb-8">
			<h1>Welcome, {data.firstName}!</h1>
			<button
				class="bg-blue-500 text-white px-6 py-3 rounded-xl w-36 text-lg hover:bg-blue-600 transition-all"
				on:click={toggleEdit}
			>
				{isEditing ? 'Cancel' : 'Edit'}
			</button>
		</div>

		<div class="flex justify-center items-center flex-col space-y-6">
			<div class="relative">
				<img
					src={user.avatar}
					alt="Avatar"
					class="w-40 h-40 rounded-full object-cover border-4 border-gray-300 shadow-lg"
				/>
				{#if isEditing}
					<label for="avatarUpload" class="absolute bottom-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12l-4 4m0 0l-4-4m4 4V7" />
						</svg>
					</label>
					<input
						id="avatarUpload"
						type="file"
						class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
						accept="image/*"
						on:change={handleAvatarChange}
					/>
				{/if}
			</div>

			<div class="w-full space-y-6">
				<div class="flex justify-between items-center">
					<label for="fullName" class="text-xl font-semibold text-gray-700">Full Name</label>
					{#if isEditing}
						<input
							type="text"
							id="fullName"
							bind:value={user.fullName}
							class="w-2/3 px-5 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
						/>
					{:else}
						<p class="text-xl text-gray-800">{user.fullName}</p>
					{/if}
				</div>

				<div class="flex justify-between items-center">
					<label for="email" class="text-xl font-semibold text-gray-700">Email</label>
					{#if isEditing}
						<input
							type="email"
							id="email"
							bind:value={user.email}
							class="w-2/3 px-5 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
						/>
					{:else}
						<p class="text-xl text-gray-800">{user.email}</p>
					{/if}
				</div>

				<div class="flex justify-between items-center">
					<label for="username" class="text-xl font-semibold text-gray-700">Username</label>
					{#if isEditing}
            <input
							id="username"
							bind:value={user.username}
							class="w-2/3 px-5 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
						/>
					{:else}
						<p class="text-xl text-gray-800">{user.username}</p>
					{/if}
				</div>

				<div class="flex justify-between items-center">
					<label for="email" class="text-xl font-semibold text-gray-700">Company Name</label>
					{#if isEditing}
						<input
							type="companyName"
							id="companyName"
							bind:value={user.company}
							class="w-2/3 px-5 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
						/>
					{:else}
						<p class="text-xl text-gray-800">{user.company}</p>
					{/if}
				</div>

			</div>

			{#if isEditing}
				<div class="mt-6 flex justify-end space-x-6">
					<button
						on:click={saveProfile}
						class="bg-blue-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-blue-700 transition-all"
					>
						Save Changes
					</button>
					<button
						on:click={toggleEdit}
						class="bg-gray-400 text-white px-8 py-3 rounded-lg text-xl hover:bg-gray-500 transition-all"
					>
						Cancel
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.profile {
      border: 2px solid #16BDCA;
	}
</style>

