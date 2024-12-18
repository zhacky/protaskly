<script lang="ts">
	import { projects } from '../../stores/projects';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { tasks } from '../../stores/tasks';
	import { dropzone, draggable } from '../../lib/dnd';
	import AddTaskDialog from '../AddTaskDialog.svelte';
	import { format } from 'date-fns';
    import PageHeader from '../PageHeader.svelte';
    import PageSideBar from '../PageSideBar.svelte';

	let isOpen = false;
	let projectId: number;
	let project: { title: string; description: string; frontend: string } | undefined;

	// Define your Kanban columns here
	const columns = [
		{ id: 1, label: '⌚️ Todo' },
		{ id: 2, label: '📫 In Progress' },
		{ id: 3, label: '🔎 Review' },
		{ id: 4, label: '💻 Testing' },
		{ id: 5, label: '✅ Done' }
	];

	$: projectId = parseInt($page.params.projectId);

	onMount(() => {
		project = $projects.find(p => p.id === projectId);

		if (!project) {
			console.error(`Project with ID ${projectId} not found.`);
		}
	});

	function openDialog() {
		isOpen = true;
	}

	function handleClose() {
		isOpen = false;
	}

	function handleDropzone(card_id: string, column_id: number) {
		const cardIdNum = parseInt(card_id);
		tasks.update(currentTasks => {
			const task = currentTasks.find(t => t.id === cardIdNum);
			if (task) task.column = column_id;
			return currentTasks;
		});
	}

	function handleTaskCreated(event: CustomEvent) {
		const { uniqueID, newTaskTitle, newTaskAssignee, newTaskDueDate, newTaskStoryPoints } = event.detail;

		tasks.update(currentTasks => [
			...currentTasks,
			{
				id: uniqueID,
				title: newTaskTitle,
				column: 1,
				assignee: newTaskAssignee,
				dueDate: newTaskDueDate,
				storyPoints: newTaskStoryPoints,
				projectId: projectId
			}
		]);
		isOpen = false;
	}

	function formatTrelloDate(dueDate: Date | string | undefined) {
		const date = dueDate instanceof Date ? dueDate : new Date(dueDate as string);
		const today = new Date();

		if (date < today) {
			return { text: format(date, 'MM/dd/yyyy'), bgColor: 'red', textColor: 'white' };
		} else {
			const diff = date.getTime() - today.getTime();
			const daysLeft = Math.ceil(diff / (1000 * 3600 * 24));
			if (daysLeft <= 7) {
				return { text: format(date, 'MM/dd/yyyy'), bgColor: 'orange', textColor: 'white' };
			} else {
				return { text: format(date, 'MM/dd/yyyy'), bgColor: 'green', textColor: 'white'};
			}
		}
	}
</script>

{#if project}
	<div>
        <PageHeader/>
		<h1>{project.title}</h1>
		<div class="p-4 absolute left-20">
			<button
				class="mb-4 px-4 py-2 border border-blue-500 rounded-3xl bg-blue-500 hover:bg-blue-600 text-white"
				on:click={openDialog}
			>
				<i class="fa-solid fa-plus fa-lg"></i>
			</button>
			<ul class="flex space-x-4">
				{#each columns as column}
					{@const cards = $tasks.filter((c) => c.column === column.id && c.projectId === projectId)}
					<li
						class="column bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0"
						  use:dropzone={{
							on_dropzone: (card_id) => handleDropzone(card_id, column.id)
						}}
					>
						<h2 class="text-lg font-semibold text-gray-700 mb-2">{column.label}</h2>
						{#if cards.length > 0}
							<ul class="cards space-y-2">
								{#each cards as card}
									<li class="cards-color" use:draggable={String(card.id)}>
										<div class="card-content">
										 <div class="flex justify-between items-center">
											 <div>
											  	<h3 class="font-bold">{card.title}</h3>
												  <p class="assignee">{card.assignee}</p>
											</div>
											<div>
												<span class="story-points"> {card.storyPoints} </span>
											</div>
										</div>
										<p>
											<span class="due-date" style:background-color={formatTrelloDate(card.dueDate).bgColor} style:color={formatTrelloDate(card.dueDate).textColor}>
												{formatTrelloDate(card.dueDate)?.text || 'No due date'}
											</span>
										</p>
										</div>
									</li>
								{/each}
							</ul>
						{:else}
							<p class="text-gray-500 italic">No Tasks...</p>
						{/if}
					</li>
				{/each}
			</ul>
			<AddTaskDialog {isOpen} on:taskCreated={handleTaskCreated} on:close={handleClose} />
            
		</div>
        <PageSideBar/>
		<style>
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 1rem;
        }

        li {
            padding: 1rem;
            background-color: var(--sk-back-1);
            border: 1px solid black;
            border-radius: 0.5rem;
            border-color: var(--sk-back-5);
        }

        .assignee {
            font-size: 0.85rem;
            color: #595959;
        }

        .column {
            min-width: 25ch;
            background: #dbeafe;
        }

        h2 {
            margin-block-start: 0;
            margin-block-end: 0.5rem;
        }

        .cards {
            flex-direction: column;
        }

        .cards-color {
            background: aqua;
            transition: background-color 0.3s;
            position: relative; /* Needed for absolute positioning of child elements */
            padding: 1rem; /* Consistent padding */
        }

        .cards-color:hover {
            background: lightblue;
        }

        .column:global(.droppable) {
            outline: 0.1rem solid var(--sk-theme-1);
            outline-offset: 0.25rem;
        }

        .column:global(.droppable) * {
            pointer-events: none;
        }

        .due-date {
						font-size: 12px;
            font-weight: 500;
            padding: 2px 4px;
            border-radius: 3px;
        }


        .story-points {
            background-color: #f0f0f0;
            padding: 2px 7px;
            border-radius: 50%;
            border: 2px solid #333333;
            font-size: 0.8rem;
            margin-left: 0.2rem;
            position: absolute;
        }
		</style>

	</div>
{:else}
	<p>Loading project...</p>
{/if}

