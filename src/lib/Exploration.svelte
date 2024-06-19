<script>
	export let id;
	import CardImage from './CardImage.svelte';
</script>

<div
	class="border-black border-b-2 p-4 text-center flex flex-col gap-4 justify-center items-center md:py-10"
	{id}
>
	<h1 class="font-msans text-center text-3xl md:text-5xl font-bold md:mb-4">Data Exploration</h1>
	<div class="flex flex-col gap-8">
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage src="preprocess.png">
				<span slot="heading">Preprocessing</span>
				<span slot="desc"
					>We computed the average of the Philippines as a whole, removing the null values
					that some regions had on certain products.</span
				>
			</CardImage>
			<CardImage src="visual.png">
				<span slot="heading">Visualization</span>
				<span slot="desc"
					>We used <strong
						><i><a href="https://matplotlib.org/" target="__blank__">Matplotlib</a></i
						></strong
					>
					and
					<strong
						><i><a href="https://seaborn.pydata.org/" target="__blank__">Seaborn</a></i
						></strong
					>
					to generate the graphs that showcased relationships within the data.</span
				>
			</CardImage>
		</div>
		<div class="flex justify-around flex-col md:flex-row gap-2 md:gap-8">
			<CardImage src="pearson.png">
				<span slot="heading">Correlation Test</span>
				<span slot="desc"
					>We used the <strong
						><i
							><a
								href="https://www.scribbr.com/statistics/pearson-correlation-coefficient/"
								target="__blank__">Pearson Correlation test</a
							></i
						></strong
					> to find correlations between two different agricultural products. We then used
					a correlation matrix to visualize correlations of multiple products.</span
				>
			</CardImage>
			<CardImage src="zscore1.png">
				<span slot="heading">Seasonality Testing</span>
				<span slot="desc">
					For each crop, we aggregated mean prices and calculated the z-score of their
					respective prices. We then performed <strong>cubic spline interpolation</strong>
					for better visualization. We made four <strong>line graphs</strong> to visualize
					seasonality.
				</span>
			</CardImage>
		</div>
	</div>
	<div class="flex flex-col md:flex-row gap-6">
		<div
			class="hover:scale-105 transition translate duration-300 max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow"
		>
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
		<div
			class="hover:scale-105 transition translate duration-300 max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow"
		>
			<div>
				<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
					Curious to check our Jupyter Notebook?
				</h5>
			</div>
			<p class="mb-3 font-normal text-gray-500">
				Click the link below to check our exploration process.
			</p>
			<a
				href="https://github.com/rue-22/cs132-group-two/blob/main/EDA/EDAv1.ipynb"
				class="inline-flex font-medium items-center text-blue-600 hover:underline"
				target="__blank__"
			>
				Our Jupyter Notebook!
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
		<div
			class="hover:scale-105 transition translate duration-300 max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow"
		>
			<div>
				<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
					Want to check our repo?
				</h5>
			</div>
			<p class="mb-3 font-normal text-gray-500">
				Click the link below to check our GitHub repository.
			</p>
			<a
				href="https://github.com/rue-22/cs132-group-two"
				class="inline-flex font-medium items-center text-blue-600 hover:underline"
				target="__blank__"
			>
				Our GitHub repo!
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
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
