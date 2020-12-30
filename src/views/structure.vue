<template lang="pug">
.relative.px-4(class="sm:px-6 lg:px-8")
  ul.divide-y.divide-gray-700
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Structure
      p.mt-8.leading-8()
        | Our clan is made up of different Houses broken down by specialty and the leaders who are in charge of those areas.  The clan is led by a council of co-leaders that have oversight over certain Houses. We do have a reporting structure where each person reports to a superior officer all the way up the chain of command. Your superior officer is responsible for you and your time with the clan.
  .mx-auto.grid.gap-4.grid-cols-1(:class="getColumnClass(structure.length)")
    ul(v-for="branch in structure")
      li.text-center.py-3 {{branch.name}}
      li.text-center.py-3.bg-gray-800(v-for="ranks in branch.ranks")
        .space-y-4(class="lg:space-x-6")
          .grid.gap-1.flex.items-center.p-2(v-if="ranks.length === 0")
            ul
              .w-16.h-16.rounded-full.inline-block(class="lg:w-20 lg:h-20")
              .font-medium.text-lg.leading-6.space-y-1
                h3 &nbsp;
          .grid.gap-1.flex.items-center.bg-gray-700.p-2(v-else :class="getColumnClass(ranks.length)")
            .font-medium.text-lg.leading-6.space-y-1(v-for="rank in ranks")
              img.w-16.h-16.rounded-full.inline-block(class="lg:w-20 lg:h-20" v-if="rank.icon" :src="rank.icon" :alt="rank.name")
              h3 {{ rank.name }}
              .w-16.h-16(class="lg:w-20 lg:h-20" v-if="!rank.icon")
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Structure',
  methods: {
    getColumnClass(count: number) {
      return `lg:grid-cols-${count}`;
    }
  },
  data() {
    return {
      structure: [
        {
          name: 'Legend',
          ranks: [
            [
              {
                name: 'Leader'
              }
            ],
            [
              {
                name: 'General'
              }
            ],
            [
              {
                name: 'Lietenant'
              }
            ],
            [
              {
                name: 'Sergeant'
              }
            ],
            [
              {
                name: 'Specialist'
              }
            ],
            [
              {
                name: 'Private'
              }
            ]
          ]
        },
        {
          name: 'Tactical',
          ranks: [
            [
              {
                name: 'Warlord',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [
              {
                name: 'War Commander',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [
              {
                name: 'Battle Commander',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [
              {
                name: 'Battle Sergeant',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [
              {
                name: 'Specialist',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ]
          ]
        },
        {
          name: 'Political',
          ranks: [
            [
              {
                name: 'Clan Leader',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [],
            [
              {
                name: 'Ambassador',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [
              {
                name: 'Diplomat',
                icon: require('@/assets/koga-eclipse-logo.gif')
              },
              {
                name: 'Cartographer',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ]
          ]
        },
        {
          name: 'Operations',
          ranks: [
            [
              {
                name: 'Operations Leader',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [
              {
                name: 'Community Manager',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [],
            [
              {
                name: 'Drill Sergeant',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ],
            [],
            [
              {
                name: 'Private',
                icon: require('@/assets/koga-eclipse-logo.gif')
              }
            ]
          ]
        }
      ]
    };
  }
});
</script>
