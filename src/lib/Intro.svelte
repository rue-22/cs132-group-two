<script>
	import { onMount } from 'svelte';

	let isFullScreen;

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
</script>

<section class="bg-center bg-no-repeat bg-[url('/hero.png')] bg-gray-700 bg-blend-multiply">
	<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
		<h1
			class="mb-4 font-msans text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
		>
			Rising Rice Prices?
		</h1>
		<h2
			class="mb-4 font-msans text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl"
		>
			{#if isFullScreen}
				A Longitudinal Study into the <br /> Interplay of Agricultural Goods
			{:else}
				A Longitudinal Study into the Interplay of Agricultural Goods
			{/if}
		</h2>
		<p class="mb-8 font-m text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
			Despite the promises and reforms of the government aimed to lower costs of goods, the
			Filipino people still have not experienced relief from the continuous price hikes of
			goods. Thus, there have been movements in the government to review this law. However, a
			review of related literature suggests that existing studies that analyze price movement
			of agricultural commodities are lacking in either coverage or recency.
		</p>
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
			<a
				href="#overview"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				Let's start!
				<svg
					class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	div {
		scroll-margin-top: 100px;
	}
</style>
