<script setup lang="ts">
import { computed, ref } from 'vue';

import { RouterView, useRoute } from 'vue-router';

import TopNav from '@/components/TopNav.vue';

import { kogaSplashGif, kogaSplashMp4, kogaSplashWebm } from './assets/media';

const route = useRoute();

const mp4BackgroundVideo = ref(kogaSplashMp4);
const webmBackgroundVideo = ref(kogaSplashWebm);
const imgBackgrounVideo = ref(kogaSplashGif);
const isHome = computed(() => route.name === 'home');
const containerClass = computed(() =>
  isHome.value
    ? 'about-container shadow-lg rounded-lg container mx-auto text-gray-200 pb-8 font-sans bg-gray-800'
    : 'container mx-auto text-gray-200 pb-8 font-sans'
);
</script>

<template lang="pug">
header.header.relative(class="lg:overflow-hidden")
  .absolute.inset-0.z-negative
    .video-wrapper(v-if="isHome")
      video.object-cover.w-full.h-screen(autoplay loop muted playsinline)
        source(:src="mp4BackgroundVideo" type="video/mp4")
        source(:src="webmBackgroundVideo" type="video/webm")
        img(:src="imgBackgrounVideo")

  TopNav

div(:class="containerClass")
  .bg-gray-900.pb-8.shadow-lg.rounded-lg.bg-opacity-90
    RouterView
</template>

<style lang="scss" scoped>
.header {
  height: 100px;
}

.header nav {
  background: rgba(0, 0, 0, 1);
}
.about-container {
  margin-top: 1000px;
}
@media only screen and (min-width: 768px) {
  .video-wrapper {
    height: 0;
    padding-bottom: 56.25%;
    position: fixed;
    width: 100%;
  }

  .video-wrapper video {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
