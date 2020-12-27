<template lang="pug">
.container.mx-auto.h-screen.bg-gray-900.font-mono.text-gray-200
  TopNav
  router-view
</template>

<style lang="scss"></style>
<script lang="ts">
import { defineComponent } from 'vue';
import TopNav from '@/components/top-nav.vue';

export default defineComponent({
  name: 'App',
  components: {
    TopNav
  }
});
</script>
