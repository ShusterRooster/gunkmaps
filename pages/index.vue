<script setup lang="ts">
import type {PinData} from "~/components/PinData";

useSeoMeta({
  // title: 'gunkmaps !',
  description: 'Welcome to GunkMaps',
  ogTitle: 'GunkMaps',
  ogDescription: 'Welcome to GunkMaps',
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

const route = useRoute()
const { data } = await useAsyncData("pins", () => {
  return queryCollection('pins').all()
})

console.log(data)

const show = ref(false);
const divCard = ref();

const title = ref<HTMLParagraphElement>()
const description = ref<HTMLParagraphElement>()
const historic = ref<HTMLParagraphElement>()

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()
  hideCard()
})

function hideCard() {
  show.value = false
  divCard.value.style.transform = `translate(${divCard.value.clientWidth}px, -50%)`
  console.log(divCard.value.style.right)
}

function showCard() {
  show.value = true
  divCard.value.style.transform = `translate(0px, -50%)`
}

async function update(nav: string) {
  const { data: page } = await useAsyncData(nav, () => {
    return queryCollection('all').path(`${nav}/`).all()
  })

  console.log(page)
  console.log(nav)


  showCard()
  divCard.value.style.filter = 'blur(30px)'


  // setTimeout(async () => {
  //   const content = queryContent(pin.nav)
  //   const info = await content.find()
  //
  //   title.value!.textContent = info[0].title!
  //   description.value!.textContent = info[0].description!
  //
  //   posts.value = await content.find()
  //   divCard.value.style.filter = 'blur(0px)'
  // }, 500)
}
</script>

<template>
  <title>testing</title>
  <div id="container" class="bg-background">

    <div id="divCard" ref="divCard">
      <UCard id="card" class="rounded-s-3xl">

        <!--      Title and description-->
        <template #header>
          <div class="text-xl p-4 space-y-4">
            <p ref="title" class="text-5xl font-extrabold">title</p>
            <h3 ref="description">description</h3>
          </div>
        </template>

        <!--      Will appear if there are no posts in that pin-->
        <p v-if="data?.length == 0" class="text-3xl text-extrabold">No posts yet! Be the first to submit one!</p>

<!--        <div v-for="post in data">-->
<!--          <Entry :title="post.title" :desc="post.description" :link="post.path"></Entry>-->
<!--        </div>-->

        <template #footer>
          <p ref="historic">historic</p>
        </template>
      </UCard>
    </div>

    <div style="margin-bottom: 3em">
      <h1 class="text-5xl font-extrabold my-5 ">
        Welcome to GunkMaps!
      </h1>

      <!--      leaflet map implementation-->
      <div id="map" class="rounded-3xl">
        <LMap style="z-index: 1"
              :zoom="16"
              :minZoom="15"
              :center="[41.73854, -74.08594]"
              :use-global-leaflet="false"
              ref="map">

          <Pin v-for="pin in data" :data="pin" @click="update"></Pin>

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
  width: 100%;
  height: 100%;
}

#divCard {
  position: absolute;
  top: 50%;

  right: 0;
  margin: auto;
  z-index: 99;
  height: 100%;
  width: 30vw;

  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  transition: all 0.5s ease-in-out;
  transform: translate(100%, -50%);
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