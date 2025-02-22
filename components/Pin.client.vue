<script setup lang="ts">

const props = defineProps<{
  data: any
}>()

const emit = defineEmits<{
  (e: 'click', nav: string): void
}>()

</script>


<template>
  <LMarker :lat-lng="props.data.coords" @click="$emit('click', props.data.path)">
    <LIcon icon-url="https://api.iconify.design/material-symbols:location-on.svg" :icon-size="[32, 42]">
    </LIcon>

<!--    //props.data.title-->
    <LTooltip>{{ data.title }}</LTooltip>
  </LMarker>
</template>

<style scoped>

#map {
  height: 75vh;
  overflow: scroll;
}
</style>