<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});

		dispatch;
	}
</script>

<nav
	class="fixed w-full bg-white top-0 grid grid-cols-2 sm:flex gap-2 justify-center md:gap-12 py-2 border-b shadow-md text-xl md:text-2xl text-center mb-8"
>
	<!-- <a class="hover:bg-white hover:text-slate-800" href="/">Overview</a>
	<a class="hover:bg-white hover:text-slate-800" href="/">Data</a>
	<a class="hover:bg-white hover:text-slate-800" href="/">Conclusion</a>
	<a class="hover:bg-white hover:text-slate-800" href="/">Team</a>
	<a class="hover:bg-white hover:text-slate-800" href="/">Results</a>
	<a class="hover:bg-white hover:text-slate-800" href="/">Conclusion</a> -->
	<a href="#overview" on:click|preventDefault={scrollIntoView}>Overview</a>
	<a href="#data" on:click|preventDefault={scrollIntoView}>Data</a>
	<!-- <a href="#results" on:click|preventDefault={scrollIntoView}>Results</a> -->
	<!-- <a href="#conclusion" on:click|preventDefault={scrollIntoView}>Conclusion</a> -->
	<a href="#team" on:click|preventDefault={scrollIntoView}>Team</a>
	<!-- <a href="/" on:click|preventDefault={scrollIntoView}>Placeholder</a> -->
</nav>

<style>
	a {
		@apply hover:scale-110 transition-all;
	}
</style>
