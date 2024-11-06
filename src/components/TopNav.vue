<script setup lang="ts">
import { computed, ref } from 'vue';

import { RouterLink } from 'vue-router';

const links = ref([
  { label: 'About', link: '/' },
  { label: 'Structure', link: '/structure' },
  { label: 'Videos', link: '/videos' },
  { label: 'Games', link: '/games' },
  { label: 'Recruitment', link: '/recruitment' }
]);

const isOpen = ref(false);

const mobileMenuD = computed(() =>
  isOpen.value ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template lang="pug">
nav.py-2.px-3.z-10.fixed.w-full(class="md:p-3")
  .container.mx-auto.block.flex-wrap.items-center.justify-start(class="md:flex")
    .inset-y-0.left-0.flex(class="sm:hidden")
      button.inline-flex.items-center.justify-center.p-2.rounded-md.text-gray-400(
        class="hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-expanded="false"
        @click="toggleMenu"
      )
        span.sr-only Open main menu
        svg.block.h-6.w-6(
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewbox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        )
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="mobileMenuD")
    ul.flex-wrap.items-center.justify-start.text-white(
      data-menu=""
      class="md:flex"
      :class="{hidden: !isOpen, block: isOpen}"
    )
      li.py-2(class="md:px-6" v-for="row in links")
        RouterLink(:to="row.link" active-class="text-yellow-500") {{ row.label }}

</template>

<style lang="scss" scoped>
.header {
  height: calc(100vh - 200px);
}

.header nav {
  background: rgba(0, 0, 0, 0.2);
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
