<script setup lang="ts">
import type {ParsedContent} from "@nuxt/content";
//need display folders and their respective file names

const data = ref()

async function getStuff() {
  return fetchContentNavigation(queryContent('/')).then((data) => {
    return data
  })
}

getStuff().then((d) => {
  console.log(d)
  data.value = d
})

</script>


<template>
  <title>All Pages</title>

    <div>
      <h1>Search Bar placeholder</h1>
    </div>

  <ContentRenderer :value="data as any" >

    if(data == null){
    <template #empty>
      <p>No content found.</p>
      }

      <div v-for="folder in data">
        <FolderEntry :folder="folder"></FolderEntry>
      </div>

    </template>
    <ContentRendererMarkdown :value="data!" />
  </ContentRenderer>


</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;

  padding: 2em;
  position: relative;
}

</style>