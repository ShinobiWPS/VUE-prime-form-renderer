<script setup>
import { RoutesLabels } from "@/router";
</script>

<template>
  <div>
    <h2>Form Page</h2>
    <p>
      <router-link :to="`${RoutesLabels.ROOT}`"> Back to home</router-link>
    </p>
  </div>
</template>
