<script lang="ts">
    import { projects } from '../../stores/projects';
    import { goto } from '$app/navigation';
    import PageHeader from '../PageHeader.svelte';
    import PageSideBar from '../PageSideBar.svelte';

    let isDialogOpen = false;
    let name = '';
    let description = '';
    let isOpen = false;
    let frontend = '';

    function toggleDropdown () {
        isOpen = !isOpen;
    }

    function generateTitle() {
        console.log('This will generate title')
    }

    function generateDescription () {
        console.log('This will generate description')
    }

    function handleOptionClick (option: string){
        frontend = option;
        isOpen = false;
    }

    async function createProject() {
        if (name && description && frontend) {
            const projectData = {
            name,
            description,
            frontend,
            createdAt: new Date().toISOString()
        };

            const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

            const response = await fetch('/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(projectData)
            });

            console.log('Response', response);
            console.log('Token:', token);

            if (response.ok) {
                const result = await response.json();
                projects.update(currentProjects => [
                    ...currentProjects,
                    result.project
                ]);
                isDialogOpen = false;
                name = '';
                description = '';
                frontend = '';
                console.log('Project created successfully');
            } else {
                console.error('Failed to create project');
            }
        }
    }

    function navigateToKanban(projectId: number) {
        if (projectId !== undefined) {
            console.log(`Navigating to project with ID: ${projectId}`);
            goto(`/${projectId}`);
        } else {
            console.error("Project ID is undefined");
        }
    }
</script>

<div class="">
    <PageHeader/>
    <div class="flex flex-col justify-between items-center mb-6 space-y-6 pt-9">
        <h1 class="text-2xl font-bold">Antajia Task Tracker</h1>
        <button
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            on:click={() => isDialogOpen = true}
        >
            Create Project
        </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-40">
        {#each $projects as project}
            <button
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 border"
              on:click={() => navigateToKanban(project.id)}
            >
                <div class="flex flex-col h-full">
                    <!-- Project Title -->
                    <h2 class="text-xl font-semibold text-blue-950 mb-2 truncate">{project.title}</h2>

                    <!-- Project Description -->
                    <p class="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>

                    <!-- Created Date -->
                    <p class="text-sm text-gray-400 mt-auto">
                        Created: {new Date(project.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </button>
        {/each}
    </div>

    {#if isDialogOpen}
        <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded-lg shadow-xl w-96">
                <h2 class="text-xl font-semibold mb-4">Create New Project</h2>
                <form on:submit|preventDefault={createProject}>
                    <div class="flex flex-row">
                        <input
                          type="text"
                          bind:value={name}
                          placeholder="Project Title"
                          class="w-full p-2 border rounded mb-4"
                        />
                        <button class="flex items-center justify-center" on:click={generateTitle}>
                            <i class="fa-solid fa-g fa-xl pb-3 pl-2"></i>
                        </button>

                    </div>
                    <div>
                        <div class="flex flex-row">
                            <textarea
                              bind:value={description}
                              placeholder="Project Description"
                              class="w-full p-2 border rounded mb-4"
                              rows="3"
                            ></textarea>
                            <button class="flex items-center justify-center" on:click={generateDescription}>
                                <i class="fa-solid fa-g fa-xl pb-3 pl-2"></i>
                            </button>
                        </div>
                    </div>

                    <div class="w-auto">
                        <button class="dropdown-wrapper" on:click={toggleDropdown}>
                            <span>{frontend || 'Frontend'}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon ml-auto" viewBox="0 0 16 16">
                                <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>


                        <!-- Dropdown menu, shown only if isOpen is true -->
                        <div class="dropdown-content  {isOpen ? 'show' : ''}">
                            <a href="#option1" on:click={() => handleOptionClick('Svelte')}>Svelte</a>
                            <a href="#option2" on:click={() => handleOptionClick('React')}>React</a>
                            <a href="#option3" on:click={() => handleOptionClick('Angular')}>Angular</a>
                            <a href="#option4" on:click={() => handleOptionClick('Bootstrap')}>Bootstrap</a>
                            <a href="#option5" on:click={() => handleOptionClick('Vue')}>Vue</a>
                            <a href="#option6" on:click={() => handleOptionClick('Figma')}>Figma</a>
                            <a href="#option7" on:click={() => handleOptionClick('Other')}>Other</a>
                        </div>
                    </div>
                    <div class="flex justify-end gap-2 pt-5">
                        <button
                            type="button"
                            on:click={() => isDialogOpen = false}
                            class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    {/if}
    <PageSideBar/>
</div>
<style>
    .dropdown-wrapper {
        display: inline-flex;
        width: 91%;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        position: relative;
        justify-content: flex-start;
    }

    .icon {
        margin-left: auto; /* Pushes the icon to the right */
    }

    .dropdown-content {
        display: none;
        position: absolute;
        border: 1px solid #ccc;
        background-color: white;
        width: 20%;
        z-index: 1;
    }

    .dropdown-content.show {
        display: block;
    }


    .dropdown-content a {
        display: block;
        padding: 8px;
        text-decoration: none;
        color: #333;
    }

    .dropdown-content a:hover {
        background-color: #f0f0f0;
    }

    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .border {
        border: 2px solid #16BDCA;
    }
</style>
