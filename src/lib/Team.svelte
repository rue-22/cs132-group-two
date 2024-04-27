<script>
	export let id;
	export let names;
	export let desc;
	export let images;
</script>

<div class="border-b-2 border-black p-2" {id}>
	<h1 class="text-center text-2xl md:text-3xl font-bold mb-8">Meet the Team!</h1>
	<div class="flex flex-col md:flex-row text-center justify-evenly items-center gap-4 py-2">
		{#each names as _, i}
			<div class="">
				<img src={images[i]} alt="Team member" class="rounded-full w-1/3 md:w-1/2 m-auto" />
				<h1 class="text-lg md:text-xl font-semibold mt-2 md:mt-4">{names[i]}</h1>
				<p class="text-sm md:text-base">{desc[i]}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	div {
		scroll-margin-top: 55px;
	}
</style>
