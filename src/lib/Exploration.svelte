<script>
	export let id;
	import CardImage from './CardImage.svelte';
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center"
	{id}
>
	<div class="flex flex-col">
		<h1 class="text-center text-2xl md:text-3xl font-bold mb-4">Data Exploration</h1>
		<div class="flex flex-col gap-2 md:flex-row">
			<CardImage src="mean.png">
				<span slot="heading">Preprocessing</span>
				<span slot="desc"
					>We computed the average of the Philippines as a whole, removing the null values
					that some regions had on certain products.</span
				>
			</CardImage>
			<CardImage src="matplotlib.png">
				<span slot="heading">Visualization</span>
				<span slot="desc"
					>We used <strong>Matplotlib</strong> and <strong>Seaborn</strong> to generate graphs
					that showcase relationship within the data.</span
				>
			</CardImage>
			<CardImage src="pearson.png">
				<span slot="heading">Pearson Correlation</span>
				<span slot="desc">test</span>
			</CardImage>
		</div>
	</div>
	<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
		<div>
			<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
				Want to access our spreadsheet?
			</h5>
		</div>
		<p class="mb-3 font-normal text-gray-500">
			Click the link below to know more about the data we've dealt with.
		</p>
		<a
			href="https://docs.google.com/spreadsheets/d/1yJbxc9azy8CZrL5zApRZX2bkdhs9eyf8dziGNPDIQfQ/edit?usp=sharing"
			class="inline-flex font-medium items-center text-blue-600 hover:underline"
			target="__blank__"
		>
			Check out our spreadsheet!
			<svg
				class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
				/>
			</svg>
		</a>
	</div>
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
