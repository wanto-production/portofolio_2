<script lang="ts">
	import gsap from 'gsap';
	import Button from './ui/button/button.svelte';

	import { onMount } from 'svelte';
	import { element } from '$lib/storeEl.svelte';
	import { ScrollToPlugin } from 'gsap/all';

	let card = $state<HTMLDivElement | null>();

	function handleMouseMove(event: any) {
		const { clientX, clientY, currentTarget } = event;
		const { left, top, width, height } = currentTarget.getBoundingClientRect();

		const x = (clientX - left - width / 2) / 7;
		const y = -(clientY - top - height / 2) / 7;
		if (card) {
			gsap.to(card, { rotationY: x, rotationX: y, duration: 0.2 });
		}
	}

	function resetTilt() {
		if (card) {
			gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.2 });
		}
	}

	onMount(() => {
		gsap.registerPlugin(ScrollToPlugin);
	});
</script>

<div
	class=" *:no-select z-10 w-[300px] cursor-pointer rounded-md p-[20px] backdrop-blur-md"
	bind:this={card}
	onmousemove={handleMouseMove}
	onmouseleave={resetTilt}
	role="region"
>
	<h2 class="motion-preset-slide-right-lg font-[Poppins,serif] text-5xl font-semibold text-white">
		ikhwan satrio wicaksono
	</h2>

	<p
		class=" motion-preset-slide-right-md bg-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-xl font-semibold text-transparent"
	>
		Fullstack dev
	</p>

	<p class=" motion-preset-slide-right-sm m-2 text-lg text-gray-400">focus on make best ui/ux</p>

	<Button onclick={() => gsap.to(window, { duration: 1, scrollTo: element[0] })}>
		about me <i class="fa fa-arrow-down"></i>
	</Button>
</div>
