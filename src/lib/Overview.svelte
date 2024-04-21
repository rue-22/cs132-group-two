<script>
	import Card from '$lib/Card.svelte';
</script>

<div class="border-b-2 border-t-2 border-black flex flex-col justify-center p-4 gap-4 items-center">
	<Card>
		<h1 slot="title">Background Research</h1>
		<p slot="desc1">
			To combat the rise of prices in rice, among other commodities, the Philippine Government
			issued the Rice Tariffication Law in 2019, which eases import restrictions of rice. Despite
			this, the Filipino people have not experienced relief from rising prices of goods. Thus, there
			have been movements in the government to review this law. However, a review of related
			literature suggests that analysis into the price movement of agricultural commodities are
			lacking in either coverage or recency.
		</p>
	</Card>

	<Card>
		<h1 slot="title">Research Questions</h1>
		<p slot="desc1">
			<strong>1)</strong> Is there any notable correlation between the prices of different agricultural
			goods?
		</p>
		<p slot="desc2">
			<strong>2)</strong> Are there any seasonal patterns or events that affected the prices of agricultural
			goods?
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
			Prices of goods are <strong>affected</strong> by <strong>time of the year</strong>, as well as
			<strong>prices of other goods</strong>.
		</p>
	</Card>

	<Card>
		<h1 slot="title">Action Plan</h1>
		<p slot="desc1">
			We applied statistical tests such as SARIMA to analyze seasonal price trends and correlations
			between the prices of different products.
		</p>
	</Card>
</div>
