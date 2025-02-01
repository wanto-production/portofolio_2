<script lang="ts">
	import gsap from 'gsap';
	import Button from './ui/button/button.svelte';

	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { element as section } from '$lib/storeEl.svelte';

	let element = $state<HTMLElement[]>([]);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		gsap.from(element[0], {
			opacity: 0,
			x: 100,
			duration: 1,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: element[0],
				start: 'top 80%',
				end: 'top 30%',
				toggleActions: 'play none none reverse'
			}
		});

		gsap.from(element[1], {
			opacity: 0,
			x: -100,
			duration: 1,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: element[0],
				start: 'top 80%',
				end: 'top 30%',
				toggleActions: 'play none none reverse'
			}
		});
	});
</script>

<div
	class=" z-10 flex w-[300px] flex-col items-center justify-center gap-2 rounded-md p-2 backdrop-blur-md"
>
	<div
		class="rounded-md bg-gradient-to-br from-blue-400 to-purple-400 p-2 shadow-md duration-500 hover:shadow-blue-400"
		bind:this={element[0]}
	>
		<img src="/coding.svg" class=" h-auto w-[300px] rounded-md border-2 border-white p-2" alt="" />
	</div>
	<p bind:this={element[1]} class=" font-[Poppins,serif] text-lg text-transparent text-white">
		I'm a 14-year-old teen passionate about software development, with a focus on JavaScript and
		TypeScript. I love learning new technologies and improving my coding skills.
	</p>

	<Button
		class=" bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-2xl text-transparent"
		href="/project"
	>
		my project <i class="fa fa-arrow-right"></i></Button
	>
	<Button
		class=" bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-2xl text-transparent"
		onclick={() => gsap.to(window, { duration: 1, scrollTo: section[1] })}
	>
		my skills <i class="fa fa-arrow-down"></i>
	</Button>
</div>
