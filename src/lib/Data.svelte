<script>
	export let id;
	import CardImage from '$lib/CardImage.svelte';
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center md:py-10"
	{id}
>
	<h1 class="font-msans text-center text-2xl md:text-5xl font-bold md:mb-4">The Dataset</h1>
	<div class="flex flex-col">
		<div class="flex flex-col gap-2 md:gap-6 md:flex-row">
			<CardImage src="psa.png">
				<h1 slot="heading">Source</h1>
				<p slot="desc">
					We collected data regarding retail price for various agricutural goods from <a
						href="https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2M__2018/?tablelist=true"
						target="__blank__"><strong>PSA's website</strong></a
					>. They were readily available to be downloaded as an excel file.
				</p>
			</CardImage>
			<CardImage src="timespan.png">
				<h1 slot="heading">Timespan</h1>
				<p slot="desc">
					Dataset for retail prices are from <strong>January 2020 to December 2023</strong
					>.
				</p>
			</CardImage>
			<CardImage src="count.png">
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
