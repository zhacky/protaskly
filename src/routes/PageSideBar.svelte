<script lang="ts">

	export let isOpens: boolean = false;

	// Function to handle clicks outside the sidebar (unchanged)
	function handleClickOutside(event: MouseEvent) {
		if (isOpens && event.target instanceof Element && !event.target.closest('nav')) {
			isOpens = false;
		}
	}

	// Event listeners (unchanged)
	$: if (isOpens) {
		window.addEventListener('click', handleClickOutside);
	} else {
		window.removeEventListener('click', handleClickOutside);
	}

	// Constant width for the icons area.
	const ICON_WIDTH = '50px'; // Adjust as needed
	const FULL_ITEM_WIDTH = "140px"
	const TRANSITION_DURATION = 300;
</script>
<nav class="absolute rounded-lg left-4 top bg-white transition-all duration-140 ease-in-out z-10 sidebar"
		 style:width={isOpens ? FULL_ITEM_WIDTH: ICON_WIDTH} style:opacity={isOpens ? 1 : 1}>
	<div class="mt-3 space-y-4">
		<a href="/profile" class="text-gray-600 hover:no-underline">
			<div class="flex items-center pl-3.5 pr-2 transition-all duration-{TRANSITION_DURATION} hover:bg-blue-100 ease-in-out rounded-lg" style:width={isOpens ? FULL_ITEM_WIDTH : ICON_WIDTH} style:height="40px">
				<i class="fa-solid fa-address-card"></i>
				<span class="ml-3 text-sm font-bold opacity-0 transition-opacity duration-{TRANSITION_DURATION} ease-in-out" class:opacity-100={isOpens}>Profile</span>
			</div>
		</a>
		<a href="/backlogs" class="text-gray-600 hover:no-underline">
			<div class="flex items-center pl-5 pr-2 transition-all duration-{TRANSITION_DURATION} hover:bg-blue-100 ease-in-out rounded-lg" style:width={isOpens ? FULL_ITEM_WIDTH : ICON_WIDTH} style:height="40px">
				<i class="fa-solid fa-person fa-lg"></i>
				<span class="ml-4 text-sm font-bold opacity-0 transition-opacity duration-{TRANSITION_DURATION} ease-in-out" class:opacity-100={isOpens}>Backlogs</span>
			</div>
		</a>
		<a href="/project" class="text-gray-600 hover:no-underline">
			<div class="flex items-center pl-3.5 pr-2 transition-all duration-{TRANSITION_DURATION} hover:bg-blue-100 ease-in-out rounded-lg" style:width={isOpens ? FULL_ITEM_WIDTH : ICON_WIDTH} style:height="40px">
				<i class="fa-solid fa-gauge fa-lg"></i>
				<span class="ml-2.5 text-sm font-bold opacity-0 transition-opacity duration-{TRANSITION_DURATION} ease-in-out" class:opacity-100={isOpens}>Dashboard</span>
			</div>
		</a>
		<a href="/project" class="text-gray-600 hover:no-underline">
			<div class="flex items-center pl-3.5 pr-2 transition-all duration-{TRANSITION_DURATION} hover:bg-blue-100 ease-in-out rounded-lg" style:width={isOpens ? FULL_ITEM_WIDTH : ICON_WIDTH} style:height="40px">
				<i class="fa-solid fa-table-columns fa-lg"></i>
				<span class="ml-3 text-sm font-bold opacity-0 transition-opacity duration-{TRANSITION_DURATION} ease-in-out" class:opacity-100={isOpens}>Kanban</span>
			</div>
		</a>
	</div>
</nav>
<style>
	.top {
			top: 72px;
	}

	.sidebar {
        border: 1px solid gray;
	}

    nav {
        height: 616px;
    }
</style>