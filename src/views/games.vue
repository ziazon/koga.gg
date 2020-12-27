<template lang="pug">
h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Our Games
p.mt-8.text-xl.leading-8
  | Games we have played, corrently play, or plan on playing
.mt-6.grid.grid-cols-2(class="gap-0.5 md:grid-cols-3 lg:mt-8")
  .col-span-1.flex.justify-center.py-8.px-8.bg-gray-800(
    v-for="row in games"
  )
    img.object-contain(:src="row.image" :alt="row.label")
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Games',
  data() {
    return {
      games: [
        {
          label: 'Ashes of Creation',
          image: require('@/assets/900px-ashes-of-creation-new-logo.png')
        },
        {
          label: 'Grand Theft Auto 5',
          image: require('@/assets/grand-theft-auto-5-logo.png')
        },
        {
          label: 'Among Us',
          image: require('@/assets/among-us-logo.png')
        },
        {
          label: 'Overwatch',
          image: require('@/assets/overwatch-logo.png')
        },
        {
          label: 'Sea of Theives',
          image: require('@/assets/sea-of-theives-logo.png')
        },
        {
          label: 'Albion Online',
          image: require('@/assets/albion-online-logo.png')
        },
        {
          label: 'Elder Scrolls Online',
          image: require('@/assets/elder-scrolls-online-logo.png')
        },
        {
          label: 'Lineage 2 Revolution',
          image: require('@/assets/lineage-2-revolution-logo.png')
        },
        {
          label: 'Planetside2',
          image: require('@/assets/planetside-2-logo.png')
        },
        {
          label: 'Star Wars: The Old Replublic',
          image: require('@/assets/star-wars-the-old-republic-logo.png')
        },
        {
          label: 'World of Warcraft',
          image: require('@/assets/world-of-warcraft-logo.png')
        },
        {
          label: 'Global Agenda',
          image: require('@/assets/global-agenda-logo.png')
        },
        {
          label: 'Warhammer Online',
          image: require('@/assets/warhammer-online-logo.png')
        },
        {
          label: 'Lineage 2',
          image: require('@/assets/lineage-2-logo.png')
        },
        {
          label: 'Planetside',
          image: require('@/assets/planetside-logo.png')
        }
      ]
    };
  }
});
</script>

<style></style>
