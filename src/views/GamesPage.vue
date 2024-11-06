<script setup lang="ts">
import { ref } from 'vue';

import {
  albionOnlineLogo,
  amongUsLogo,
  ashesLogo,
  elderScrollsOnlineLogo,
  globalAgendaLogo,
  gta5Logo,
  lineage2Logo,
  lineage2RevolutionLogo,
  newWorldLogo,
  overwatchLogo,
  planetside2Logo,
  planetsideLogo,
  seaOfTheivesLogo,
  starWarsTheOldReplublicLogo,
  warhammerOnlineLogo,
  worldOfWarcraftLogo
} from '@/assets/media';

const games = ref([
  {
    title: 'Current MMO',
    games: [
      {
        label: 'Ashes of Creation',
        image: ashesLogo
      }
    ]
  },
  {
    title: 'Past MMOs',
    games: [
      {
        label: 'NewWorld',
        image: newWorldLogo
      },
      {
        label: 'Albion Online',
        image: albionOnlineLogo
      },
      {
        label: 'Elder Scrolls Online',
        image: elderScrollsOnlineLogo
      },
      {
        label: 'Lineage 2 Revolution',
        image: lineage2RevolutionLogo
      },
      {
        label: 'Planetside2',
        image: planetside2Logo
      },
      {
        label: 'Star Wars: The Old Replublic',
        image: starWarsTheOldReplublicLogo
      },
      {
        label: 'World of Warcraft',
        image: worldOfWarcraftLogo
      },
      {
        label: 'Global Agenda',
        image: globalAgendaLogo
      },
      {
        label: 'Warhammer Online',
        image: warhammerOnlineLogo
      },
      {
        label: 'Lineage 2',
        image: lineage2Logo
      },
      {
        label: 'Planetside',
        image: planetsideLogo
      }
    ]
  },
  {
    title: 'Games we enjoy playing for fun when our main game servers are down',
    games: [
      {
        label: 'Grand Theft Auto 5',
        image: gta5Logo
      },
      {
        label: 'Among Us',
        image: amongUsLogo
      },
      {
        label: 'Overwatch',
        image: overwatchLogo
      },
      {
        label: 'Sea of Theives',
        image: seaOfTheivesLogo
      }
    ]
  }
]);
</script>
<template lang="pug">
.relative.px-4(class="sm:px-6 lg:px-8")
  ul.divided--y.divide-grey-700
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Games
    li.py-4(v-for="section in games" :key="section.title")
      h4.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold {{ section.title }}
      ul.py-4.space-y-12(class="sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:gap-x-8")
        li.shadow-lg.rounded-lg.bg-gray-800(v-for="row in section.games" :key="row.label")
          .aspect-w-2.aspect-h-1.m-4
            img.object-contain(:src="row.image" :alt="row.label")

</template>

<style></style>
