// draggable.ts
export function draggable(node: HTMLElement, data: string) {
	let state = data;

	node.draggable = true;
	node.style.cursor = 'grab';

	function handle_dragstart(e: DragEvent) {
		if (!e.dataTransfer) return;
		e.dataTransfer.setData('text/plain', state); // Ensure data is a string
	}

	node.addEventListener('dragstart', handle_dragstart);

	return {
		update(newData: string) {
			state = newData;
		},

		destroy() {
			node.removeEventListener('dragstart', handle_dragstart);
		}
	};
}

// dropzone.ts
interface DropzoneOptions {
	dropEffect?: 'move' | 'copy' | 'link' | 'none';
	dragover_class?: string;
	on_dropzone: (data: string, event: DragEvent) => void;
}

export function dropzone(node: HTMLElement, options: DropzoneOptions) {
	let state: DropzoneOptions = {
		dropEffect: 'move',
		dragover_class: 'droppable',
		...options
	};

	function handle_dragenter(e: DragEvent) {
		if (e.target instanceof HTMLElement) {
			e.target.classList.add(state.dragover_class || '');
		}
	}

	function handle_dragleave(e: DragEvent) {
		if (e.target instanceof HTMLElement) {
			e.target.classList.remove(state.dragover_class || '');
		}
	}

	function handle_dragover(e: DragEvent) {
		e.preventDefault();
		if (e.dataTransfer) {
			e.dataTransfer.dropEffect = state.dropEffect || 'move';
		}
	}

	function handle_drop(e: DragEvent) {
		e.preventDefault();
		if (!e.dataTransfer) return;
		const data = e.dataTransfer.getData('text/plain');
		if (e.target instanceof HTMLElement) {
			e.target.classList.remove(state.dragover_class || '');
		}
		state.on_dropzone(data, e);
	}

	node.addEventListener('dragenter', handle_dragenter);
	node.addEventListener('dragleave', handle_dragleave);
	node.addEventListener('dragover', handle_dragover);
	node.addEventListener('drop', handle_drop);

	return {
		update(newOptions: DropzoneOptions) {
			state = {
				dropEffect: 'move',
				dragover_class: 'droppable',
				...newOptions
			};
		},

		destroy() {
			node.removeEventListener('dragenter', handle_dragenter);
			node.removeEventListener('dragleave', handle_dragleave);
			node.removeEventListener('dragover', handle_dragover);
			node.removeEventListener('drop', handle_drop);
		}
	};
}
