<script>
	import Intro from '$lib/Intro.svelte';
	import Header from '$lib/Header.svelte';
	import Data from '$lib/Data.svelte';
	import Team from '$lib/Team.svelte';
	import Overview from '$lib/Overview.svelte';
	import References from '$lib/References.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="flex flex-col mt-12">
	<Header on:scrollIntoView />
	<Intro />

	<Overview on:scrollIntoView id="overview" />

	<Data on:scrollIntoView id="data" />

	<Team
		on:scrollIntoView
		id="team"
		names={['Gaza, Judelle', 'Roy, RE', 'Salces, CJ']}
		desc={['Description 1', 'Description 2', 'Description 3']}
		images={['placeholder.png', 'placeholder.png', 'placeholder.png']}
	/>

	<References />
	<Footer />
</div>
