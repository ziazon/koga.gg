<template lang="pug">
.relative.px-4(class="sm:px-6 lg:px-8")
  ul.divide-y.divide-gray-700
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl")  Videos
      .mx-auto.max-w-7xl(class='sm:px-6 lg:px-8 lg:py-24')
        ul.space-y-12(class='sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:gap-x-8')
          li.shadow-lg.rounded-lg.bg-gray-800(v-for="embed in videos")
            .aspect-w-2.aspect-h-1.m-4
              iframe.object-contain(
                width="560"
                height="315"
                :src="embed"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              )
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Videos',
  data() {
    return {
      videos: [
        // L2R
        'https://www.youtube.com/embed/xQ80S-wKHgM',
        'https://www.youtube.com/embed/47g8Rvc7pa4',
        'https://www.youtube.com/embed/f411P3mvRP4',
        'https://www.youtube.com/embed/Q1RPbAVuMDY',
        // WoW
        'https://www.youtube.com/embed/mJsI44Ro26M',
        'https://www.youtube.com/embed/fNYnnIpntGU',
        'https://www.youtube.com/embed/Qv7jOStge4Y',
        //  GA
        'https://www.youtube.com/embed/G387pGDC_so',
        'https://www.youtube.com/embed/zt1y3JMsj9o',
        // Warhammer Online
        'https://www.youtube.com/embed/5IgMbWS2nHs',
        // L2
        'https://www.youtube.com/embed/bHAkUduxgQY',
        'https://www.youtube.com/embed/-XlDd13rl5U',
        'https://www.youtube.com/embed/2RH543QPeAo'
      ]
    };
  }
});
</script>

<style></style>
