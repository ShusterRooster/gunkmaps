<script setup lang="ts">
import PopUp from "~/components/Pin.vue";

useSeoMeta({
  // title: 'gunkmaps !',
  description: 'fart balls',
  ogTitle: 'GunkMaps - hawk tuah',
  ogDescription: 'fart balls',
  ogImage: '[og:image]',
  ogUrl: 'gunkmaps.com',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <title>testing</title>
  <div id="container" class="bg-background">

    <div id="map" style="margin-bottom: 3em">
      <h1 class="text-5xl font-extrabold my-5 ">
        Welcome to GunkMaps!
      </h1>

      <div id="scroll">
        <img src="~/assets/placeholder.png" class="w-full h-max max-w-xl rounded-lg drop-shadow-2xl " alt="placeholder">
      </div>

      <Pin></Pin>
    </div>

    <div id="recent" class="bg-slate-700 rounded-lg">
      <h2 class="text-3xl font-extrabold" >Recent Stories!</h2>
      <p>here are some recent asf stories and stuff</p>
      <NuxtLink to ="/testing/hello">posts</NuxtLink>
    </div>


<!--    <div id="contact" class = "bg-slate-700 rounded-s">-->
<!--      <h3 class = "text-2xl font-bold"> Contact us</h3>-->
<!--      <p>gunkdevs@gmail.com</p>-->
<!--    </div>-->

 </div>

</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;

  padding: 2em;
  position: relative;
}

#map {
  height: 80vh;
  overflow: scroll;
}

#recent {
  display: flex;
  flex-direction: column;
  padding: 2em;
}

#contact {
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;
}
</style>