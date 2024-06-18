<script>
	export let id;
	import CardImage from '$lib/CardImage.svelte';
</script>

<div
	class="border-b-2 border-t-2 border-black flex flex-col justify-center p-4 gap-4 items-center md:py-10"
	{id}
>
	<h1 class="font-msans text-center text-2xl md:text-5xl font-bold md:mb-4">Overview</h1>
	<div class="flex flex-col justify-center items-center gap-4 md:gap-8">
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage src="problem.png">
				<h1 slot="heading">Problem</h1>
				<p slot="desc">
					Despite being an agricultural country, there is a <span class="font-">lack</span
					>
					of research regarding price changes for agricultural products. In recent years, prices
					of goods have been
					<strong>continuously rising</strong>, warranting an investigation behind the
					possible factors that affect it.
				</p>
			</CardImage>

			<CardImage src="soln.jpg">
				<h1 slot="heading">Solution</h1>
				<p slot="desc">
					Hence, we used data science to gain insight into the trends and patterns of
					agricultural prices and subsequently learn the significant factors that affect
					prices of agricultural goods.
				</p>
			</CardImage>
		</div>

		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage>
				<h1 slot="heading">Research Question 1</h1>
				<p slot="desc">
					Is there any notable correlation between the prices of different agricultural
					goods?
				</p>
			</CardImage>

			<CardImage>
				<h1 slot="heading">Research Question 2</h1>
				<p slot="desc">
					Are there any seasonal patterns or events that affected the prices of
					agricultural goods?
				</p>
			</CardImage>
		</div>

		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage>
				<h1 slot="heading">Null Hypothesis</h1>
				<p slot="desc">
					Prices are <strong>NOT</strong> affected by seasonal trends nor other agricultural
					goods.
				</p>
			</CardImage>

			<CardImage>
				<h1 slot="heading">Alternative Hypothesis</h1>
				<p slot="desc">
					Prices of goods are <strong>AFFECTED</strong> by
					<strong>time of the year</strong>, as well as
					<strong>prices of other goods</strong>.
				</p>
			</CardImage>
		</div>

		<CardImage>
			<h1 slot="heading">Action Plan</h1>
			<p slot="desc">
				We applied statistical tests such as <strong>SARIMA</strong> to analyze seasonal price
				trends and correlations between the prices of different products.
			</p>
		</CardImage>
	</div>
</div>

<style>
	div {
		@apply md:scroll-mt-14 scroll-mt-24;
	}
</style>
