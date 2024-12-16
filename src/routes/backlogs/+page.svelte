<script lang="ts">
	import { tasks } from '../../stores/tasks';
	import PageHeader from '../PageHeader.svelte';
	import PageSideBar from '../PageSideBar.svelte';

	let cardList: any[] = [];
	tasks.subscribe((value) => {
		cardList = value;
	});

	let searchTerm = '';
	let currentPage = 1;
	const itemsPerPage = 8;

	$: filteredTickets = cardList.filter((ticket) =>
		ticket.name && searchTerm ? ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
	);

	$: paginatedTickets = cardList.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);
	$: totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

	function nextPage() {
		if (currentPage < totalPages) currentPage += 1;
	}

	function prevPage() {
		if (currentPage > 1) currentPage -= 1;
	}
</script>

<PageHeader />
<div class="absolute left-20 mt-4 overflow-hidden rounded-xl border">
	<div class="bg-gray-100 p-4">
		<input
			type="text"
			placeholder="Search by Ticket Name"
			bind:value={searchTerm}
			class="w-96 rounded-2xl border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
		/>
	</div>
	<table class="table w-full text-left text-sm text-gray-500">
		<thead class="bg-gray-100 uppercase text-gray-700">
			<tr>
				<th scope="col" class="px-6 py-3">Task ID</th>
				<th scope="col" class="px-6 py-3">Task Name</th>
				<th scope="col" class="px-6 py-3">Assigned</th>
				<th scope="col" class="px-6 py-3">Status</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each cardList as ticket}
				<tr class="hover:bg-gray-50">
					<td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900">{ticket.id}</td>
					<td class="px-6 py-4">{ticket.title}</td>
					<td class="px-6 py-4">{ticket.assignee}</td>
					<td class="px-6 py-4 font-medium">
						<span
							class="rounded-full px-3 py-1 font-semibold text-white
            {ticket.column === 1
								? 'bg-red-500'
								: ticket.column === 2
									? 'bg-yellow-500'
									: ticket.column === 3
										? 'bg-blue-500'
										: ticket.column === 4
											? 'bg-pink-500'
											: 'bg-green-400'}"
						>
							{ticket.column === 1
								? 'Backlog'
								: ticket.column === 2
									? 'Todo'
									: ticket.column === 3
										? 'Review'
										: ticket.column === 4
											? 'Testing'
											: 'Done'}
						</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="flex items-center justify-between border-t bg-gray-50 px-6 py-4">
		<button
			class="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
			on:click={prevPage}
			disabled={currentPage === 1}
		>
			Previous
		</button>
		<span class="text-sm">Page {currentPage} of {totalPages}</span>
		<button
			class="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
			on:click={nextPage}
			disabled={currentPage === totalPages}
		>
			Next
		</button>
	</div>
</div>
<PageSideBar />

<style>
	.table {
		width: 1420px;
	}

	.border {
		border: 1px solid gray;
	}
</style>
