<script>
	export let names;
	export let desc;
</script>

<div class="border-b-2 border-black p-2">
	<h1 class="text-center text-xl">Meet the Team!</h1>
	<div class="flex flex-col md:flex-row text-center justify-evenly gap-4 py-2">
		{#each names as name, i}
			<div class="">
				<p>Image</p>
				<h1 class="text-l md:text-2xl">{name}</h1>
				<p class="text-xs md:text-base">{desc[i]}</p>
			</div>
		{/each}
	</div>
</div>
