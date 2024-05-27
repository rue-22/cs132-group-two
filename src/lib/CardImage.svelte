<script>
	export let src = '';
</script>

<!-- change max-w-sm to other dimensions-->
<div class="max-w-md bg-white border border-gray-400 rounded-lg shadow">
	{#if src}
		<div class="border-b-2 bg-cover bg-center h-64 flex justify-center items-center">
			<img class="rounded-t-lg object-cover" {src} alt="" />
		</div>
	{/if}
	<div class="p-5">
		<div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
				<slot name="heading" />
			</h5>
		</div>
		<p class="mb-3 font-normal text-gray-700">
			<slot name="desc" />
		</p>
	</div>
</div>
