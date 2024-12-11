<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	let { data }: { data: PageData } = $props();

	console.debug('Data: ', data);
	setTimeout(async () => {
		try	{
			await goto('/');
		} catch(e) {
			console.error('Error while trying to redirect to', e);
		}
	}, 3000);
</script>

{#if data.success}
	<h1>{data.message}</h1>
{/if}