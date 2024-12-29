<script lang="ts">

let showDialog = false;
	
const logout = () => {   
	localStorage.removeItem('authToken');  
	window.location.href = '/login';
 };

const openDialog = () => {
    showDialog = true;
};


const closeDialog = () => {
    showDialog = false;
};

</script>
<header>
	<nav class=" mx-4">
		<ul class="flex items-center rounded-lg justify-between">
			<div class="flex items-center">
				<button  class="absolute left-4" aria-label="Menu">
					<i class="fa-solid fa-bars fa-lg"></i>
				</button>
			</div>


			<!-- Avatar aligned to the end -->
			<div class="ml-auto mr-3">
				<button on:click={openDialog} class="bg-red-500 text-white py-1 px-2 rounded-3xl">
					<i class="fa-solid fa-power-off"></i>
				</button>
			</div>
		</ul>
	</nav>
	{#if showDialog}
		<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div class="bg-white rounded-lg p-6 w-1/3">
			<h3 class="text-lg font-semibold mb-4">Are you sure you want to logout?</h3>
			<div class="flex justify-end gap-4">
				<button on:click={closeDialog} class="py-1 px-3 bg-gray-500 text-white rounded-lg">
				Cancel
				</button>
				<button on:click={logout} class="py-1 px-3 bg-red-500 text-white rounded-lg">
				Logout
				</button>
			</div>
			</div>
		</div>
    {/if}
	<!-- <SideBar bind:isOpens={showSidebar} /> -->
</header>
<style>
    header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		padding-top: 10px;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
        width: 1484px;

	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
        border: 1px solid gray;
	}
</style>