<script>
	export let id;
	import CardImage from '$lib/CardImage.svelte';
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center md:py-10"
	{id}
>
	<h1 class="font-msans text-center text-3xl md:text-5xl font-bold md:mb-4">Conclusion</h1>

	<div class="flex flex-col justify-center items-center gap-4 mb-2">
		<p class=" text-center font-m text-normal md:text-xl">
			In conclusion, we <strong>reject</strong> the null hypothesis. Some of the <br /> main takeaways
			of our study include the following:
		</p>
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage>
				<span slot="heading">Price Movements</span>
				<span slot="desc"
					>Prices of some products are affected by <strong
						>inter-product correlation</strong
					>
					and
					<strong>time of year</strong>.</span
				>
			</CardImage>
			<CardImage>
				<span slot="heading">Holiday Seasons</span>
				<span slot="desc"
					>We have verified that ber months or the holiday seasons are time periods
					wherein <strong>prices peak</strong> for numerous products.</span
				>
			</CardImage>
			<CardImage>
				<span slot="heading">Applications</span>
				<span slot="desc"
					>This study about agricultural products can help us, <strong
						>the consumers</strong
					>, and, most importantly, our
					<strong>farmers</strong>.
				</span>
			</CardImage>
		</div>
	</div>

	<div class="max-w-screen-lg">
		<h2 class="mb-2 md:mb-4 font-msans text-center text-xl md:text-3xl font-bold">
			Some Recommendations
		</h2>
		<p class="text-center font-m text-normal md:text-xl">
			Due to the sheer number of agricultural products and the amount of possible product
			pairings, we were unable to investigate all of them. Hence, we recommend taking the time
			to perform correlation studies between <strong>all possible product pairs</strong> as
			well as using data that spans for a <strong>longer period</strong>.
		</p>
	</div>
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
