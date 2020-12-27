<template lang="pug">
nav.bg-gray-800
  .max-w-7xl.mx-auto.px-2(class="sm:px-6 lg:px-8")
    .relative.flex.items-center.justify-between.h-16
      .absolute.inset-y-0.left-0.flex.items-center(class="sm:hidden")
        // Mobile menu button
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
      .flex-1.flex.items-center.justify-center(class="sm:items-stretch sm:justify-start")
        .hidden(class="sm:block sm:ml-6")
          .flex.space-x-4
            router-link.px-3.py-2.rounded-md.text-sm.font-medium(v-for="row in links" :to="row.link" active-class="bg-gray-900 text-white" class="text-gray-300 hover:bg-gray-700 hover:text-white") {{ row.label }}
  div(:class="{hidden: !isOpen, block: isOpen}" class="sm:hidden")
    .px-2.pt-2.pb-3.space-y-1
      router-link.block.px-3.py-2.rounded-md.text-base.font-medium(v-for="row in links" :to="row.link" active-class="bg-gray-900 text-white" class="text-gray-300 hover:bg-gray-700 hover:text-white") {{ row.label }}

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TopNav',
  data() {
    return {
      isOpen: false,
      links: [
        { label: 'About Us', link: '/' },
        { label: 'Rank Structure', link: '/rank-structure' },
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
