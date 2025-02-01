<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/state';
	interface Project {
		year: Number;
		name: String;
		href?: string;
	}

	const project: Project[] = [
		{ year: 2024, name: 'flask cashier app' },
		{ year: 2024, name: 'school web' },
		{
			year: 2024,
			name: "qur'an digital",
			href: 'https://wanto-production.github.io/quran-digital/'
		},
		{ year: 2024, name: 'weather app', href: 'https://rpl-weather-wheat.vercel.app/' },
		{ year: 2024, name: 'portofolio(1)', href: 'https://portofolio-ikhwans.vercel.app/' },
		{ year: 2024, name: 'sveltekit real time chat app' },
		{ year: 2024, name: 'sveltekit todo app' },
		{ year: 2024, name: 'sveltekit image galery' },
		{ year: 2025, name: 'portofolio(this)', href: page.url.href.replaceAll('project', '') }
	];
</script>

<svelte:head>
	<title>project</title>
</svelte:head>

<main class=" flex h-screen w-full flex-col items-center justify-center gap-3 bg-[#0c0c0c]">
	<Button
		href="/"
		class=" motion-preset-slide-left-lg absolute left-2 top-2 bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text font-[Poppins,serif] text-2xl text-transparent"
	>
		<i class="fa fa-arrow-left"></i> back
	</Button>

	<div
		class=" flex h-[400px] w-[90%] items-center justify-center rounded-md bg-gradient-to-br from-blue-400 to-purple-400 text-xl text-gray-500"
	>
		<ol
			class=" flex h-[99%] w-[99%] flex-col items-start justify-around rounded-md bg-[#0c0c0c] p-2"
		>
			{#each project as { name, href, year }}
				{#if href}
					<li class=" bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
						- {year} - <a {href}>{name}</a>
					</li>
				{:else}
					<li>- {year} - {name}</li>
				{/if}
			{/each}
		</ol>
	</div>
</main>
