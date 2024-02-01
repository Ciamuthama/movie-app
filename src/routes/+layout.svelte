<script lang="ts">
	import './styles.css';
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"


</script>

<main class="mx-20 max-sm:mx-auto">
	<slot />
	<injectSpeedInsights/>
</main>
