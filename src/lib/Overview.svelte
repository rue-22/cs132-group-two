<script>
	export let id;
	import Card from '$lib/Card.svelte';
	import CardImage from '$lib/CardImage.svelte';
</script>

<div
	class="border-b-2 border-t-2 border-black flex flex-col justify-center p-4 gap-4 items-center"
	{id}
>
	<h1 class="text-center text-2xl md:text-3xl font-bold">Overview</h1>
	<div class="flex flex-col justify-center items-center gap-2">
		<div class="flex justify-around gap-2">
			<CardImage>
				<h1 slot="heading">Problem</h1>
				<p slot="desc">
					Despite being an agricultural country, there is a <strong>lack</strong> of
					research regarding price changes for agricultural products. In recent years,
					prices of goods have been
					<strong>continuously rising</strong>, warranting an investigation behind the
					possible factors that affect it.
				</p>
			</CardImage>

			<CardImage>
				<h1 slot="heading">Solution</h1>
				<p slot="desc">
					Hence, we used data science to gain insight into the trends and patterns of
					agricultural prices and subsequently learn the significant factors that affect
					prices of agricultural goods.
				</p>
			</CardImage>
		</div>

		<Card>
			<h1 slot="title">Research Questions</h1>
			<p slot="desc1">
				<strong>1)</strong> Is there any notable correlation between the prices of different
				agricultural goods?
			</p>
			<p slot="desc2">
				<strong>2)</strong> Are there any seasonal patterns or events that affected the prices
				of agricultural goods?
			</p>
		</Card>

		<Card>
			<h1 slot="title">Null Hypothesis</h1>
			<p slot="desc1">
				Prices are <strong>not</strong> affected by seasonal trends nor other agricultural goods.
			</p>
		</Card>

		<Card>
			<h1 slot="title">Alternative Hypothesis</h1>
			<p slot="desc1">
				Prices of goods are <strong>affected</strong> by <strong>time of the year</strong>,
				as well as
				<strong>prices of other goods</strong>.
			</p>
		</Card>

		<Card>
			<h1 slot="title">Action Plan</h1>
			<p slot="desc1">
				We applied statistical tests such as <strong>SARIMA</strong> to analyze seasonal price
				trends and correlations between the prices of different products.
			</p>
		</Card>
	</div>
</div>

<style>
	div {
		@apply md:scroll-mt-14 scroll-mt-24;
	}
</style>
