<script>
	// import HeaderLogo from '$lib/images/HeaderLogo.svg'


	let showMenu = false;


</script>

<div class="flex justify-center pt-3 pb-36">
<header
	class="p-2 rounded-3xl z-50 fixed bg-white"
>
	<nav class="flex justify-center space-x-24 items-center">
		<div>
			<a href="/">
				<img class="w-36" src="/HeaderLogo.svg" alt="Black Logo">
			</a>
		</div>
		<div class="hidden md:flex pt-1 space-x-4">
			<a href="/pricing" class="hover:no-underline">
				<p class="font font-bold text-gray-500 pt-2 px-4 py-2 rounded-lg hover:bg-gray-200">Pricing</p>
			</a>
			<a href="/login" class="hover:no-underline">
				<p class="font font-bold text-gray-500 pt-2 px-4 py-2 rounded-lg hover:bg-gray-200">Login</p>
			</a>
			<a href="/register" class="hover:no-underline">
					<button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
			</a>
		</div>
		<div class="md:hidden p-3">
			<button
				class="flex items-center text-gray-800 focus:outline-none"
				aria-expanded="{showMenu}"
				aria-controls="mobile-menu"
				aria-label="Toggle menu"
				on:click={() => (showMenu = !showMenu)}
			>
				<i class="fa-solid fa-bars text-xl"></i>
			</button>
		</div>
	</nav>

	{#if showMenu}
		<div
			id="mobile-menu"
			class="md:hidden bg-white mt-2 shadow-lg rounded-lg space-y-2 p-4 transition transform origin-top text-center"
		>
			<a href="/login" class="hover:no-underline">
				<p class="font font-bold text-gray-500 pt-2 px-4 py-2 rounded-lg hover:bg-gray-200">Login</p>
			</a>
			<a href="/register" class="hover:no-underline">
				<button type="button" class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
			</a>
		</div>
	{/if}
</header>
</div>
<style>
    header {
				border: 1px solid #6C2BD9;
    }

		.font {
				font-family: "Calibri Light";
		}

</style>
