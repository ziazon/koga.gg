<template lang="pug">
.container.mx-auto.font-mono.text-gray-200.pb-8
  TopNav
  .bg-gray-900.pb-8.shadow-lg.rounded-lg
    h1 banner section
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
