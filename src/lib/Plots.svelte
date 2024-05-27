<script>
	import { Carousel, Thumbnails } from 'flowbite-svelte';

	const images = [
		{
			src: 'correlation_matrix.png',
			title: '<strong>Res. Qn. 1</strong>: Crop price correlation matrix'
		},
		{
			src: '21.png',
			title: '<strong>Res. Qn. 2</strong>: Z-score for animal products'
		},
		{
			src: '22.png',
			title: '<strong>Res. Qn. 2</strong>: Z-score for seafood'
		},
		{
			src: '23.png',
			title: '<strong>Res. Qn. 2</strong>: Z-score for fruit, vegetables, roots'
		},
		{
			src: '24.png',
			title: '<strong>Res. Qn. 2</strong>: Z-score for grains and starches'
		},
		{
			src: 'nutshell_plot.png',
			title: 'Nutshell plot'
		}
	];

	export let id;

	let index = 0;
	let forward = true;

	let carousel;
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center"
	{id}
>
	<div class="flex flex-col w-full m-auto">
		<h1 class="text-center text-2xl md:text-3xl font-bold mb-4">Plots</h1>
		<div class="w-full flex flex-col m-auto">
			<Carousel
				{images}
				{forward}
				bind:index
				imgClass="aspect-video object-center block"
				class="rounded-md w-full border-4 min-h-[480px] bg-gray-200 flex justify-center items-center"
			></Carousel>
			<Thumbnails
				{images}
				{forward}
				bind:index
				imgClass="opacity-80 flex border border-black"
			/>
			<div class="rounded h-10 bg-gray-300 p-2 my-2 text-center">
				{@html images[index].title}
			</div>
		</div>
	</div>
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
