<script setup lang="ts">
import Button from "primevue/button";
import { RoutesLabels } from "@/router";
</script>
<template>
  <div>
    <h2>Index page</h2>
    <router-link :to="`${RoutesLabels.FORM}`" custom v-slot="{ navigate }">
      <Button label="Go to Form" @click="navigate" />
    </router-link>
  </div>
</template>
