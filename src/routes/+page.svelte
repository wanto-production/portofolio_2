<script>
	import background from '$lib/assets/background.png';
	import CardName from '$lib/components/CardName.svelte';

	import { element } from '$lib/storeEl.svelte';
</script>

<svelte:head>
	<title>home</title>
	<meta
		name="keywords"
		content="portofolio, portofolio ikhwan,portofolio ikhwans,portofolio wanto,portofolio ikhwan satrio"
	/>
	<meta name="description" content="portofolio ikhwan satrio wicaksono" />
</svelte:head>

<main class=" bg-[#0c0c0c]">
	<section class=" relative flex h-screen w-full items-center">
		<img src={background} class=" absolute h-screen w-full" alt="" />
		<CardName />
	</section>
	<section
		class="relative flex h-screen w-full flex-col items-center justify-center gap-2 border-t-2 border-blue-400"
		bind:this={element[0]}
	>
		{#await import('$lib/components/Gradientheader.svelte') then { default: Header }}
			<Header class="absolute top-0">
				<h2 class="  font-[Poppins,serif] text-2xl font-semibold text-white">about</h2>
			</Header>
		{/await}

		{#await import('$lib/components/AboutSection.svelte') then { default: AboutSection }}
			<AboutSection />
		{/await}
		<img src="/background2.png" class="absolute bottom-0 h-[300px] w-full" alt="" />
	</section>
	<section
		class=" relative flex h-screen w-full flex-col items-center justify-center gap-2"
		bind:this={element[1]}
	>
		<img src="/background3.png" class="absolute top-0 h-[400px] w-full" alt="" />
		{#await import('$lib/components/Gradientheader.svelte') then { default: Header }}
			<Header class="absolute top-0">
				<h2 class=" font-[Poppins,serif] text-2xl font-semibold text-white">skills</h2>
			</Header>
		{/await}

		<div class=" flex flex-wrap items-center justify-center gap-2">
			<!-- Card Bahasa Pemrograman -->
			<div
				class="flex items-center space-x-4 rounded-2xl border-2 border-transparent bg-gray-800 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-padding p-6 shadow-lg"
			>
				<i class="fas fa-code text-3xl text-purple-400"></i>
				<div>
					<h3 class="text-lg font-semibold">Programming Languages</h3>
					<p class="text-gray-300">JavaScript, TypeScript, Python</p>
				</div>
			</div>

			<!-- Card Framework -->
			<div
				class="flex items-center space-x-4 rounded-2xl border-2 border-transparent bg-gray-800 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-padding p-6 shadow-lg"
			>
				<i class="fas fa-laptop-code text-3xl text-blue-400"></i>
				<div>
					<h3 class="text-lg font-semibold">Frameworks & Libraries</h3>
					<p class="text-gray-300">React, Svelte, Next.js, Tailwind CSS</p>
				</div>
			</div>
		</div>

		<div
			class="flex items-center space-x-4 rounded-xl border-2 border-transparent bg-gray-800 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-padding p-6 shadow-lg"
		>
			<i class="fas fa-certificate text-3xl text-yellow-400"></i>
			<div>
				<h3 class="text-lg font-semibold">Certificates</h3>
				<p class="text-gray-300">2</p>
			</div>
		</div>
	</section>
</main>
