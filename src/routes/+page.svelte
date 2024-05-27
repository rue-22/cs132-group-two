<script>
	import Intro from '$lib/Intro.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Data from '$lib/Data.svelte';
	import Team from '$lib/Team.svelte';
	import Overview from '$lib/Overview.svelte';
	import References from '$lib/References.svelte';
	import Footer from '$lib/Footer.svelte';
	import Exploration from '$lib/Exploration.svelte';
	import Graphs from '$lib/Graphs.svelte';
</script>

<div class="flex flex-col mt-12">
	<Navbar />
	<Intro />

	<Overview id="overview" />

	<Data id="data" />

	<Exploration id="exploration" />

	<Graphs id="graphs" />

	<Team
		id="team"
		names={['Gaza, Judelle', 'Roy, RE', 'Salces, CJ']}
		desc={['2nd year CS student', '2nd year CS student', '2nd year CS student']}
		images={['placeholder.png', 'placeholder.png', 'placeholder.png']}
		github={[
			'https://github.com/ElleDiablo',
			'https://github.com/reofficial',
			'https://github.com/rue-22'
		]}
	/>

	<References />
	<Footer />
</div>
