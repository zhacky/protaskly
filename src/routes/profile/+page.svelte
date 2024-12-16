<script lang="ts">
	import type { PageData } from './$types';
	import PageHeader from '../PageHeader.svelte';
	import PageSideBar from '../PageSideBar.svelte';


	export let data: PageData;
	let isOpens = false;


</script>

<div class="bg-gray-100 flex flex-col items-center justify-center">
	<div class="pb-10"><PageHeader/></div>
	
	<div class="border max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">	
	  <div class="flex flex-col items-center">
		<div class="w-24 h-24 rounded-full overflow-hidden">
			<img src="https://via.placeholder.com/150" alt="User Avatar" class="w-full h-full object-cover">
		</div>
		<h1 class="mt-4 text-2xl font-bold text-gray-800">Welcome, {data.firstName}!</h1>
		<p class="text-sm text-gray-500">{data.email}</p>
	  </div>
  

	  <div class="mt-6">
		<div class="border-t border-gray-200 py-4">
		  <p class="text-sm text-gray-500">Username</p>
		  <h3 class="text-lg font-semibold text-gray-800">{data.username}</h3>
		</div>
		<div class="border-t border-gray-200 py-4">
		  <p class="text-sm text-gray-500">Full Name</p>
		  <h3 class="text-lg font-semibold text-gray-800">{data.firstName} {data.lastName}</h3>
		</div>
		<div class="border-t border-gray-200 py-4">
		  <p class="text-sm text-gray-500">Company Name</p>
		  <h3 class="text-lg font-semibold text-gray-800">Antajia Software Development Services.</h3>
		</div>
	  </div>
  

	  <div class="mt-6 flex justify-center gap-4">
		<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Edit Profile</button>
		<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Message</button>
	  </div>
	</div>

	<PageSideBar bind:isOpens={isOpens}/>
</div>

<style>
	.border {
		border: 1px solid gray;
	}
</style>