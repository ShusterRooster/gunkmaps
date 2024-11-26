<script setup lang="ts">
const props = defineProps<{
  coords: [number, number],
  title: string,
}>()

const emit = defineEmits<{
  (e: 'pinClick', title: string, desc: string): void
}>()

</script>


<template>
  <LMarker :lat-lng="props.coords" @click="$emit('pinClick', props.title, 'test desc')">
    <LIcon icon-url="https://api.iconify.design/material-symbols:location-on.svg" :icon-size="[32, 42]">
    </LIcon>

    <LTooltip>burger cart</LTooltip>
  </LMarker>
</template>

<style scoped>

#map {
  height: 75vh;
  overflow: scroll;
}
</style>