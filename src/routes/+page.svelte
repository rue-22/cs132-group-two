<script>
	import Intro from '$lib/Intro.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Data from '$lib/Data.svelte';
	import Team from '$lib/Team.svelte';
	import Overview from '$lib/Overview.svelte';
	import References from '$lib/References.svelte';
	import Footer from '$lib/Footer.svelte';
	import Exploration from '$lib/Exploration.svelte';
	import Plots from '$lib/Plots.svelte';
	import Conclusion from '$lib/Conclusion.svelte';
	import Discussion from '$lib/Discussion.svelte';
</script>

<div class="flex flex-col mt-12 bg-bwhite">
	<Navbar />
	<Intro />

	<Overview id="overview" />

	<Data id="data" />

	<Exploration id="exploration" />

	<Plots id="results" />

	<Discussion id="disc" />

	<Conclusion id="conclusion" />

	<Team
		id="team"
		names={['Gaza, Judelle', 'Roy, RE', 'Salces, CJ']}
		desc={['2nd year CS student', '2nd year CS student', '2nd year CS student']}
		images={['1.png', '2.png', '3.jpg']}
		github={[
			'https://github.com/ElleDiablo',
			'https://github.com/reofficial',
			'https://github.com/rue-22'
		]}
	/>

	<!-- <References id="ref" /> -->
	<Footer />
</div>
