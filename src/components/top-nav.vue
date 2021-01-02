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
        router-link(:to="row.link" active-class="text-yellow-500") {{ row.label }}

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TopNav',
  data() {
    return {
      isOpen: false,
      logo: require('@/assets/koga-eclipse-logo.gif'),
      links: [
        { label: 'About', link: '/' },
        { label: 'Structure', link: '/structure' },
        { label: 'Games', link: '/games' },
        { label: 'Recruitment', link: '/recruitment' }
      ]
    };
  },
  computed: {
    mobileMenuD(): string {
      return this.isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16';
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
});
</script>
