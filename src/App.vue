<template lang="pug">
header.header.relative(class="lg:overflow-hidden")
  .absolute.inset-0.z-negative
    .video-wrapper
      video.object-cover.w-full.h-screen(autoplay loop muted playsinline)
        source(:src="mp4BackgroundVideo" type="video/mp4")
        source(:src="webmBackgroundVideo" type="video/webm")
        img(:src="imgBackgrounVideo")

  TopNav
router-view
</template>

<style lang="scss" scoped>
.header {
  height: 100px;
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
      webmBackgroundVideo: require('@/assets/koga-splash.webm'),
      imgBackgrounVideo: require('@/assets/koga-splash.gif')
    };
  }
});
</script>
