<script lang="ts">
	import { cn } from '$lib/utils';

	let { children, class: className = '' } = $props();
</script>

<header class={cn(' h-[70px] w-full p-2', className)}>
	<div
		class=" flex h-full w-full items-center justify-start rounded-md bg-gradient-to-br from-blue-400 to-purple-400 px-2 backdrop-opacity-0"
	>
		{@render children()}
	</div>
</header>
