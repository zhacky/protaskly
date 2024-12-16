<header>
	<nav class=" mx-4">
		<ul class="flex items-center rounded-lg justify-between">
			<div class="flex items-center">
				<button  class="absolute left-4" aria-label="Menu">
					<i class="fa-solid fa-bars fa-lg"></i>
				</button>
			</div>


			<!-- Avatar aligned to the end -->
			<!-- <div class="ml-auto mr-3">
				{#if $userStore && $userStore.user}
					<button on:click={Dialog}> <Avatar src={ProfileSample} size="sm"/></button>
					{#if isOpens}
					<span class="absolute bg-white p-4 rounded shadow-md mt-2">
						<p>Welcome, {$userStore.user.firstName}</p>
					</span>
					{/if}
				{/if}
			</div> -->
		</ul>
	</nav>
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