<script setup lang="ts">
import { ref } from 'vue';

import { kogaStructure } from '@/assets/media';

const structure = ref(kogaStructure);
</script>
<template lang="pug">
.relative.px-4(class="sm:px-6 lg:px-8")
  ul.divide-y.divide-gray-700
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Structure
      p.mt-8.leading-8
        | Our clan is made up of different Houses split up by area of focus. The clan is led by a council that is comprised of each house's leader. We do have a reporting structure where each person reports to a superior officer for the house they are a part of. It is possible for members to be part of multiple houses, and in such a case a member would report to their house superior officer based on the activity they are participating in.
      p.mt-8.leading-8
        | Membership of the houses is based on the activity the member participates in. For example, if a member focuses on pvp combat and/or raids, they would be considered part of the Tactical House. If they are a social butterfly, and/or scout, they would be considered part of the Political House. If they focus crafting, training, and/or are new members, they would be considered part of the Operations House.
      p.mt-8.leading-8
        | The council is responsible for the overall direction of the clan, where as each house leader is responsible for the day to day operations of their house.
      center.mt-8.leading-8
        img.object-container(:src="structure" alt="Koga Clan Structure")
</template>

<style></style>
