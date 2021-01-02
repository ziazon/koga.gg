<template lang="pug">
header.header.relative(class="lg:overflow-hidden")
  .absolute.inset-0.z-negative
    .video-wrapper
      video.object-cover.w-full.h-screen(autoplay loop muted playsinline)
        source(:src="mp4BackgroundVideo" type="video/mp4")
        source(:src="webmBackgroundVideo" type="video/webm")
        img(:src="imgBackgrounVideo")

  TopNav
.container.mx-auto.text-gray-200.pb-8.font-sans
  .bg-gray-900.pb-8.shadow-lg.rounded-lg.bg-opacity-90
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
      mp4BackgroundVideo: '/media/koga-splash.mp4',
      webmBackgroundVideo: '/media/koga-splash.webm',
      imgBackgrounVideo: '/media/koga-splash.gif'
    };
  }
});
</script>

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
