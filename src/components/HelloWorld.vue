<script setup lang="ts">
	// useStore, and computed are automatically imported. See vite.config.ts.

	defineProps<{
		msg: string
	}>()
</script>

<template>
	<h2>{{ msg }}</h2>
</template>
