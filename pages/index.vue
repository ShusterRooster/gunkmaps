<script setup lang="ts">
import balls from '~/components/getPreview'

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

let show = ref(true);

function test() {
  show.value = !show.value
  console.log(show.value)
}

const contentQuery = queryContent('testing')

console.log(contentQuery.find())

// balls(new File("./content/testing/hello.md"))


const title = ref<HTMLParagraphElement>()
const recent = ref<HTMLParagraphElement>()
const historic = ref<HTMLParagraphElement>()

function update(t: string, desc: string) {
  title.value!.textContent = t
  recent.value!.textContent = desc

  console.log(t)
}

</script>

<template>
  <title>testing</title>
  <div id="container" class="bg-background">

    <UCard id="card" v-if="show">
      <template #header class="text-xl">
        <p ref="title" class="text-5xl font-extrabold">title</p>
      </template>

      <h3 ref="recent">recent</h3>

      <template #footer>
        <p ref="historic">historic</p>
      </template>
    </UCard>

    <div style="margin-bottom: 3em">
      <h1 class="text-5xl font-extrabold my-5 ">
        Welcome to GunkMaps!
      </h1>

      <!--      https://www.openstreetmap.org/#map=16/41.73854/-74.08594-->

      <div id="map" ref="poop" class="rounded-3xl">
        <LMap style="z-index: 1"
            :zoom="16"
            :minZoom="15"
            :center="[41.73854, -74.08594]"
            :use-global-leaflet="false"
            ref="map">


          <Pin :coords="[41.739955, -74.083383]" title="testing" @pinClick="update"></Pin>


          <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
              layer-type="base"
              name="OpenStreetMap"
          />
        </LMap>
      </div>
    </div>

    <div id="recent" class="bg-slate-700 rounded-lg">
      <h2 class="text-3xl font-extrabold">Recent Stories!</h2>
      <p>here are some recent asf stories and stuff</p>
      <NuxtLink to="/testing/hello">posts</NuxtLink>
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

#card {
  position: absolute;
  top: 50%;
  right: 0;
  margin: auto;
  z-index: 99;

  width: 30vw;
  height: 100%;
  text-align: center;

  transform: translateY(-50%);
}

#map {
  height: 75vh;
  overflow: hidden;
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