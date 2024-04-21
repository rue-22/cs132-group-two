<script>
	import Intro from '$lib/Intro.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Data from '$lib/Data.svelte';
	import Team from '$lib/Team.svelte';
	import Overview from '$lib/Overview.svelte';
</script>

<Navbar />
<div class="flex flex-col">
	<Intro />

	<Overview />

	<Data />

	<Team
		names={['Gaza, Judelle', 'Roy, RE', 'Salces, CJ']}
		desc={['Description 1', 'Description 2', 'Description 3']}
		img={['img1', 'img2', 'img3']}
	/>
</div>
