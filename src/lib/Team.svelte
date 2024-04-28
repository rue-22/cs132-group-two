<script>
	export let id;
	export let names;
	export let desc;
	export let images;
</script>

<div class="border-b-2 border-black py-2" {id}>
	<h1 class="text-center text-2xl md:text-3xl font-bold mb-4">Meet the Team!</h1>
	<div class="flex flex-col md:flex-row text-center justify-around items-center gap-8">
		{#each names as _, i}
			<div class="flex items-center gap-4">
				<img class="w-36 h-36 rounded-full" src={images[i]} alt="" />
				<div class="font-medium text-black">
					<div>{names[i]}</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">
						{desc[i]}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	div {
		scroll-margin-top: 65px;
	}
</style>
