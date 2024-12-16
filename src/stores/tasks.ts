import { writable } from 'svelte/store';

interface Task {
	id: number;
	title: string;
	column: number;
	assignee: string;
	dueDate: Date;
	storyPoints: number;
	projectId?: number;
}

export const tasks = writable<Task[]>([
	{ id: 1, assignee: 'User A', title: 'Title 1', column: 1, dueDate: new Date(), storyPoints: 5, projectId: 1 },
	{ id: 2, assignee: 'User B', title: 'Title 2', column: 2, dueDate: new Date(), storyPoints: 5, projectId: 1 },
	{ id: 3, assignee: 'User B', title: 'Title 2', column: 3, dueDate: new Date(), storyPoints: 5, projectId: 1 },
	{ id: 4, assignee: 'User B', title: 'Title 2', column: 4, dueDate: new Date(), storyPoints: 5, projectId: 1 },
]);
