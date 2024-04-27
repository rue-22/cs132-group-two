<script>
	export let id;
	import Card from '$lib/Card.svelte';
</script>

<div class="border-black border-b-2 p-4 text-center flex flex-col gap-2" {id}>
	<div>
		<p class="mb-2 text-xl">Access our raw data spreadsheet by clicking the button below!</p>
		<a
			href="https://docs.google.com/spreadsheets/d/1yJbxc9azy8CZrL5zApRZX2bkdhs9eyf8dziGNPDIQfQ/edit?usp=sharing"
			target="__blank__"
		>
			<button class="bg-black rounded-full text-white font-bold py-2 px-4"> Link </button>
		</a>
	</div>

	<div>
		<h1 class="text-xl mb-2">The Dataset</h1>
		<div class="flex gap-2">
			<Card>
				<h1 slot="title">Source</h1>
				<p slot="desc1">
					We collected data regarding retail price for various agricutural goods from <a
						href="https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2M__2018/?tablelist=true"
						><strong>PSA's website</strong></a
					>. They were readily available to be downloaded as an excel file.
				</p>
			</Card>
			<Card>
				<h1 slot="title">Timespan</h1>
				<p slot="desc1">
					Dataset for retail prices are from <strong>January 2020 to December 2023</strong>.
				</p>
			</Card>
			<Card>
				<h1 slot="title">Count</h1>
				<p slot="desc1">
					In total, we have 201 products with their retail prices over 52 months, giving the dataset
					a total count of <strong>10,452</strong> items.
				</p>
			</Card>
		</div>
	</div>
</div>

<style>
	div {
		scroll-margin-top: 55px;
	}
</style>
