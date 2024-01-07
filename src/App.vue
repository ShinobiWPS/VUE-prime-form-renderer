<script setup lang="ts">
	// See vite.config.ts for details about automatic imports
	const route = useRoute()

	useHead({
		title: () => route.meta.title || 'Vue3',
	})
</script>
<template>
	<header>
		<h1>Vite + Vue 3</h1>
	</header>
	<main>
		<router-view></router-view>
	</main>
	<footer>
		<p>footer</p>
	</footer>
	ter>
</template>
