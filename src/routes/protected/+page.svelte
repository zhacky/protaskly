<script lang="ts">
	import type { PageData } from './$types';


	let { data }: { data: PageData } = $props();

	console.debug('Data: ', data);
</script>

 {#if data}
	<h1>Welcome, {data.username}!</h1>
{/if}
