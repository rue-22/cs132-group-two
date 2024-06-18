<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let width;
	let isFullScreen;

	// onMount(() => {
	// 	width = window.innerWidth;
	// 	if (width > 768) isFullScreen = true;
	// 	else isFullScreen = false;
	// });
	onMount(() => {
		const updateIsFullScreen = () => {
			const width = window.innerWidth;
			if (width > 768) isFullScreen = true;
			else isFullScreen = false;
		};

		updateIsFullScreen();

		window.addEventListener('resize', updateIsFullScreen);

		return () => {
			window.removeEventListener('resize', updateIsFullScreen);
		};
	});

	let isNavOpen = false;

	function toggleView() {
		isNavOpen = !isNavOpen;
	}

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<nav class="font-msans fixed top-0 z-10 w-full border-gray-200 bg-gray-50 border-b shadow-md">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
			<span class="self-center text-2xl font-semibold whitespace-nowrap">Group Two</span>
		</a>
		<button
			on:click={toggleView}
			data-collapse-toggle="navbar-solid-bg"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			aria-controls="navbar-solid-bg"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		{#if isNavOpen || isFullScreen}
			<div
				class="w-full md:block md:w-auto"
				transition:fade={{ duration: 200 }}
				id="navbar-solid-bg"
			>
				<ul
					class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent"
				>
					<li>
						<a
							href="#overview"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							aria-current="page">Overview</a
						>
					</li>
					<li>
						<a
							href="#data"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>Data</a
						>
					</li>
					<li>
						<a
							href="#exploration"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>Exploration</a
						>
					</li>
					<li>
						<a
							href="#plots"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>Plots</a
						>
					</li>
					<li>
						<a
							href="#disc"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>Discussion</a
						>
					</li>
					<li>
						<a
							href="#conclusion"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>Conclusion</a
						>
					</li>
					<li>
						<a
							href="#team"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>Team</a
						>
					</li>
					<li>
						<a
							href="#ref"
							on:click|preventDefault={scrollIntoView}
							class="border-b-2 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
							>References</a
						>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</nav>

<style>
	a {
		@apply transition-all md:hover:scale-110;
	}
</style>
