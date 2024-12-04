<script setup lang="ts">
import {NuxtLink} from "#components";

const props = defineProps<{
  title: string,
  desc: string,
  link: string
}>()

</script>

<template>
  <NuxtLink id="container" :to="props.link" class="rounded-full bg-slate-700 font-sans">
    <p class="text-2xl font-extrabold">{{ props.title }}</p>
    <p class="text-xl font-medium">{{ props.desc }}</p>
  </NuxtLink>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1.5em;
}
</style>