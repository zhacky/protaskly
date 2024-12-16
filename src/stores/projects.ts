import { writable } from 'svelte/store';

export interface Project {
    id: number;
    title: string;
    description: string;
    frontend: string;
    createdAt: Date;
}

export const projects = writable<Project[]>([]);
