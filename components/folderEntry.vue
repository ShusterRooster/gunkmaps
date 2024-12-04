<script setup lang="ts">
import {NuxtLink} from "#components";
import type {NavItem} from "@nuxt/content";

const props = defineProps<{
  folder: NavItem
}>()

const title = ref()
const desc = ref()
const posts = ref()

console.log(props.folder)

async function setValues() {
  const content = await queryContent(props.folder._path).find()
  const info = content[0]

  title.value = info.title
  desc.value = info.description

  posts.value = content.slice(1)
}

setValues()

</script>

<template>

  <div class="p-8">
    <p class="text-5xl font-extrabold">{{ title }}</p>
    <p class="text-3xl font-medium">{{ desc }}</p>

    <div v-for="post in posts">
      <Entry :title="post.title" :desc="post.description" :link="post._path"></Entry>
    </div>
  </div>


</template>

<style scoped>
</style>