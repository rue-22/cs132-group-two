<script>
	import { Carousel, Thumbnails } from 'flowbite-svelte';
	import CardImage from '$lib/CardImage.svelte';

	const images = [
		{
			src: 'correlation_matrix.png',
			title: '<strong>Res. Qn. 1</strong>: Crop price correlation matrix'
		},
		{
			src: 'zscore1.png',
			title: '<strong>Res. Qn. 2</strong>: Z-score for animal products'
		},
		{
			src: 'zscore2.png',
			title: '<strong>Res. Qn. 2</strong>: Z-score for seafood'
		},
		{
			src: 'zscore3.png',
			title: '<strong>Res. Qn. 2</strong>: Z-score for fruit, vegetables, roots'
		},
		{
			src: 'zscore4.png',
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
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center md:py-10"
	{id}
>
	<h1 class="text-center text-3xl md:text-5xl font-bold md:mb-4 font-msans">Results</h1>

	<div class="flex flex-col w-full m-auto">
		<div class="w-full flex flex-col m-auto">
			<Carousel
				{images}
				{forward}
				bind:index
				imgClass="object-center block"
				class="rounded-md border-4 w-full bg-gray-200 flex justify-center items-center"
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

	<div class="md:flex md:flex-row md:justify-between md:items-center md:gap-12 md:mt-8">
		<div class="flex flex-col gap-2 md:gap-6 items-center">
			<h2 class="text-center font-msans font-bold text-xl md:text-3xl mt-2">
				Top Products with <i>Positive</i> Correlation
			</h2>
			<div class="flex justify-around flex-col gap-2 md:gap-8">
				<CardImage src="positive1.png">
					<span slot="heading">Coconut and Corn</span>
				</CardImage>
				<CardImage src="positive2.png">
					<span slot="heading">Beef and Coconut</span>
				</CardImage>
				<CardImage src="positive3.png">
					<span slot="heading">Chicken and Beef</span>
				</CardImage>
			</div>
		</div>

		<div class="flex flex-col gap-2 md:gap-6 items-center">
			<h2 class="text-center font-msans font-bold text-xl md:text-3xl mt-2">
				Top Products with <i>Weakest</i> Correlation
			</h2>
			<div class="flex justify-around flex-col gap-2 md:gap-8">
				<CardImage src="weak1.png">
					<span slot="heading">Rice and Ginger</span>
					<span slot="desc"></span>
				</CardImage>
				<CardImage src="weak2.png">
					<span slot="heading">Rice and Saba Banana</span>
					<span slot="desc"></span>
				</CardImage>
				<CardImage src="weak3.png">
					<span slot="heading">Chayote and Saba Banana</span>
					<span slot="desc"></span>
				</CardImage>
			</div>
		</div>

		<div class="flex flex-col gap-2 md:gap-6 items-center">
			<h2 class="font-msans font-bold text-xl md:text-3xl mt-2">
				Top Products with <i>Negative</i> Correlation
			</h2>
			<div class="flex justify-around flex-col gap-2 md:gap-8">
				<CardImage src="negative1.png">
					<span slot="heading">Suaje Shrimp and Corn</span>
					<span></span>
				</CardImage>
				<CardImage src="negative2.png">
					<span slot="heading">Suaje Shrimp and Coconut</span>
					<span slot="desc"></span>
				</CardImage>
				<CardImage src="negative3.png">
					<span slot="heading">Beef and Ginger</span>
					<span slot="desc"></span>
				</CardImage>
			</div>
		</div>
	</div>

	<div class="flex mt-2 md:mt-8 flex-col gap-2 md:gap-6">
		<h2 class="text-center font-msans font-bold text-xl md:text-3xl">
			Seasonality of Products
		</h2>
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage src="animal.jpg">
				<span slot="heading">Animal products</span>
				<span slot="desc"
					><strong>Spikes</strong> in ber months and <strong>dips</strong> in the following
					months.</span
				>
			</CardImage>
			<CardImage src="seafood.png">
				<span slot="heading">Seafood</span>
				<span slot="desc">
					<strong>Does not</strong> experience drastic changes in prices, but
					<strong>shrimp</strong>
					gets quite <strong>cheap</strong> during the ber months.
				</span>
			</CardImage>
		</div>
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage src="fruits_veg.jpg">
				<span slot="heading">Fruits, Vegetables, and Roots</span>
				<span slot="desc">
					<strong>Does not</strong> follow some sort of general seasonality.
				</span>
			</CardImage>
			<CardImage src="rice_grains.jpg">
				<span slot="heading">Rice, Grains, and Starches</span>
				<span slot="desc">
					<strong>Gradually increase</strong> in price from August up to December.
				</span>
			</CardImage>
		</div>
	</div>
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
