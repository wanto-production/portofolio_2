<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	let { children } = $props();
</script>

{@render children()}
<!-- Footer -->
<footer class=" w-full bg-gradient-to-r from-gray-800 via-purple-900 to-gray-800 py-6">
	<div class="flex flex-col items-center">
		<h2 class=" mb-5 text-xl text-gray-500">contact:</h2>
		<div class="flex space-x-6">
			<a
				href="https://github.com/wanto-production"
				aria-label="GitHub"
				class="text-2xl hover:text-white"
			>
				<i class="fab fa-github"></i>
			</a>
			<a href="/" aria-label="Twitter" class="text-2xl hover:text-white">
				<i class="fab fa-twitter"></i>
			</a>
			<a href="/" aria-label="LinkedIn" class="text-2xl hover:text-white">
				<i class="fab fa-linkedin"></i>
			</a>
			<a href="/" aria-label="Instagram" class="text-2xl hover:text-white">
				<i class="fab fa-instagram"></i>
			</a>
		</div>
		<p class="mt-4 text-sm text-gray-400">
			&copy; 2024 Ikhwan Satrio Wicaksono. All rights reserved.
		</p>
	</div>
</footer>
