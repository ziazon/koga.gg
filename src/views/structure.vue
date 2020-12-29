<template lang="pug">
.relative.px-4(class="sm:px-6 lg:px-8")
  ul.divide-y.divide-gray-700
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Structure
      p.mt-8.leading-8()
        | Our clan is made up of different Houses broken down by specialty and the leaders who are in charge of those areas.  The clan is led by a council of co-leaders that have oversight over certain Houses. We do have a reporting structure where each person reports to a superior officer all the way up the chain of command. Your superior officer is responsible for you and your time with the clan.
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Structure'
});
</script>
