<script>
	export let id;
	import Card from '$lib/Card.svelte';
	import CardImage from '$lib/CardImage.svelte';
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center"
	{id}
>
	<div class="flex flex-col">
		<h1 class="text-2xl mb-2">The Dataset</h1>
		<div class="flex flex-col gap-2 md:flex-row">
			<CardImage>
				<h1 slot="heading">Source</h1>
				<p slot="desc">
					We collected data regarding retail price for various agricutural goods from <a
						href="https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2M__2018/?tablelist=true"
						target="__blank__"><strong>PSA's website</strong></a
					>. They were readily available to be downloaded as an excel file.
				</p>
			</CardImage>
			<CardImage>
				<h1 slot="heading">Timespan</h1>
				<p slot="desc">
					Dataset for retail prices are from <strong>January 2020 to December 2023</strong
					>.
				</p>
			</CardImage>
			<CardImage>
				<h1 slot="heading">Count</h1>
				<p slot="desc">
					In total, we have 201 products with their retail prices over 52 months, giving
					the dataset a total count of <strong>10,452</strong> items.
				</p>
			</CardImage>
		</div>
	</div>
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
