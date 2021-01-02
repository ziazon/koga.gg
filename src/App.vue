<template lang="pug">
header.header.relative(class="lg:overflow-hidden")
  .absolute.inset-0.z-negative.opacity-50(class="lg:opacity-100")
    .video-wrapper
      video.object-cover.w-full.h-full(autoplay loop muted)
        source(:src="mp4BackgroundVideo" type="video/mp4")
        source(:src="webmBackgroundVideo" type="video/webm")

  TopNav
.container.mx-auto.text-gray-200.pb-8.font-sans
  .bg-gray-900.pb-8.shadow-lg.rounded-lg
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
  },
  data() {
    return {
      mp4BackgroundVideo: require('@/assets/koga-splash.mp4'),
      webmBackgroundVideo: require('@/assets/koga-splash.webm')
    };
  }
});
</script>

<style lang="scss">
.header {
  height: auto;
}

.header nav {
  background: rgba(0, 0, 0, 0.2);
}

.video-cta {
  height: auto;
}

@media (min-width: 1024px) {
  .header {
    height: 762px;
  }

  .video-cta {
    height: 582px;
  }
}

.btn-primary {
  @apply bg-black text-white px-10 py-3 my-2 inline-block;
}

.btn-primary:hover {
  @apply bg-black;
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
