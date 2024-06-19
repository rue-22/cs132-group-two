<script>
	export let id;
	import CardImage from './CardImage.svelte';
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center md:py-10"
	{id}
>
	<h1 class="font-msans text-center text-3xl md:text-5xl font-bold md:mb-4">Discussion</h1>
	<div class="flex flex-col justify-center items-center gap-4 max-w-screen-lg mb-2">
		<h2 class="text-center font-msans font-bold text-xl md:text-3xl">Correlation of Prices</h2>
		<p class="text-center font-m text-normal md:text-xl">
			Establishing correlations between two products allows us to
		</p>
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage>
				<span slot="heading">Forecast Prices</span>
				<span slot="desc"
					>When two products are correlated, a price change in one means a price change in
					the other, letting us forecast prices as one product experiences price changes.</span
				>
			</CardImage>
			<CardImage>
				<span slot="heading">Optimize Production</span>
				<span slot="desc"
					>Diversifying the production of agricultural goods can protect our farmers from
					price movements that affect
				</span>
			</CardImage>
		</div>
	</div>

	<div class="flex flex-col justify-center items-center gap-4 max-w-screen-lg mb-2">
		<h2 class="text-center font-msans font-bold text-xl md:text-3xl">
			Seasonality of Products
		</h2>
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage src="ber.jpg">
				<span slot="heading">Ber months</span>
				<span slot="desc"
					>The price <strong>increase</strong> during <strong>ber months</strong> observed
					throughout multiple products (seafood, meat, grains, rice) indicate higher
					demand during the <strong>holiday</strong> seasons.</span
				>
			</CardImage>
			<CardImage src="rice.jpg">
				<span slot="heading">Rice</span>
				<span slot="desc"
					>Dry season rice is harvested during March and April. Hence, during the holiday
					season, its <strong>dwindling stockpiles</strong>, compounded with
					<strong>higher demands</strong> explains the gradual increase during ber months.
				</span>
			</CardImage>
		</div>
	</div>

	<div class="flex flex-col justify-center items-center gap-4 max-w-screen-lg">
		<h2 class="text-center font-msans font-bold text-xl md:text-3xl">
			What's the significance?
		</h2>
		<p class="text-center font-m text-normal md:text-xl">
			By knowing correlations of products and their seasonality, we can
		</p>
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage>
				<span slot="heading">Help Farmers</span>
				<span slot="desc"
					>Farmers can make <strong>informed decisions</strong> on what to plant in order
					to offset price movements. This <strong>reduces</strong> their risk of losing money.</span
				>
			</CardImage>
			<CardImage>
				<span slot="heading">Help Consumers</span>
				<span slot="desc"
					>We can carefully <strong>predict and plan</strong> our purchases and potentially
					save money, especially in this time where prices of products and services are extremely
					high.</span
				>
			</CardImage>
		</div>
	</div>
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
