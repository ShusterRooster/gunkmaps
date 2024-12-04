<script setup lang="ts">
import type {PinData} from "~/components/PinData";

const props = defineProps<{
  data: PinData
}>()

// const emit = defineEmits<{
//   (e: 'click', title: string, desc: string): void
// }>()

const emit = defineEmits<{
  (e: 'click', data: PinData): void
}>()

</script>


<template>
  <LMarker :lat-lng="props.data.coords" @click="$emit('click', props.data)">
    <LIcon icon-url="https://api.iconify.design/material-symbols:location-on.svg" :icon-size="[32, 42]">
    </LIcon>

<!--    //props.data.title-->
    <LTooltip>title</LTooltip>
  </LMarker>
</template>

<style scoped>

#map {
  height: 75vh;
  overflow: scroll;
}
</style>