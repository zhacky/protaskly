<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let isOpen = true;
    let newTaskTitle = '';
    let newTaskAssignee = '';
    let newTaskDueDate: Date = new Date();
    let newTaskStoryPoints:number = 0
    let errorMessage = '';
    let dueDateString = "";

    $: {
        if (dueDateString) {
            try {
                newTaskDueDate = new Date(dueDateString);
            } catch (error) {
                // Handle invalid date string input (optional)
                newTaskDueDate = new Date(); // Reset or other handling
                console.error("Invalid date string:", dueDateString, error);
            }

        }
    }
    const dispatch = createEventDispatcher();



    function handleSubmit() {
        const storyPoints = Number(newTaskStoryPoints);

        if (newTaskTitle && newTaskAssignee && newTaskDueDate instanceof Date && !isNaN(storyPoints)) {
            const uniqueID = Math.floor(Math.random() * 1000);
            const formattedDueDate = newTaskDueDate.toISOString().slice(0, 10);


            dispatch('taskCreated', {  // Dispatch the event *before* resetting the form
                uniqueID,
                newTaskTitle,
                newTaskAssignee,
                newTaskDueDate: formattedDueDate,  // Use the formatted string
                newTaskStoryPoints: storyPoints,
            });

            // Now you can reset the form fields *after* dispatching the event
            newTaskTitle = '';
            newTaskAssignee = '';
            newTaskDueDate = new Date();
            newTaskStoryPoints = 0;
            errorMessage = '';


        } else { // Error Handling
            if (!newTaskTitle) {
                errorMessage = "Task Title is required";
            } else if (!newTaskAssignee) {
                errorMessage = "Assignee is required";
            } else if (!(newTaskDueDate instanceof Date)) {
                errorMessage = "Due Date is required and must be a valid date";
            } else if (isNaN(storyPoints)) {
                errorMessage = "Story Points must be a number";
            } else {
                errorMessage = "All fields are required and Due Date must be a valid date";
            }

        }
    }


    function handleClose() {
        dispatch('close');
        newTaskTitle = ''
        newTaskAssignee = '';
        newTaskDueDate = new Date();
        newTaskStoryPoints = 0
        errorMessage = '';

    }
</script>

{#if isOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 class="text-xl font-semibold mb-4">Add New Tasks</h2>
            <form on:submit|preventDefault={handleSubmit}>
                {#if errorMessage}
                    <span class="text-red-600 block mb-2">{errorMessage}</span>
                {/if}
                <input
                  type="text"
                  bind:value={newTaskTitle}
                  placeholder="Enter task name"
                  class="w-full p-2 border rounded mb-4"
                  required
                />
                <input
                  type="text"
                  bind:value={newTaskAssignee}
                  placeholder="Assignee Name"
                  class="w-full p-2 border rounded mb-4"
                  required
                />
                <input
                  type="date"
                  bind:value={dueDateString}
                  class="w-full p-2 border rounded mb-4"
                  required
                />
                <input
                  type="number"
                  bind:value={newTaskStoryPoints}
                  placeholder="Story Points"
                  class="w-full p-2 border rounded mb-4"
                  min="0"
                required
                />
                <div class="flex justify-end gap-2">
                    <button
                      type="button"
                      on:click={handleClose}
                      class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                    >
                        Cancel
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}