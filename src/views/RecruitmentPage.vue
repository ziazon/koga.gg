<script setup lang="ts">
// import { defineComponent } from 'vue';

// import { MessageEmbed, WebhookClient } from 'discord.js';
// import { groupBy, toPairs } from 'lodash/fp';
// import moment from 'moment';

// import PlaySchedule from '@/components/PlaySchedule.vue';

// interface DayHour {
//   day: number;
//   hour: number;
// }

// interface Times {
//   day: number;
//   hours: number[];
// }
// export default defineComponent({
//   name: 'Recruitment',
//   components: {
//     PlaySchedule
//   },
//   methods: {
//     shouldDisplayMoreInfo(source: { value: string; moreInfo: string }) {
//       return !!source.moreInfo && source.value === this.form.referalSource;
//     },
//     isSelectedTimeZone(offset: string) {
//       return this.form.timezone === offset;
//     },
//     setSelections(selections: DayHour[]) {
//       this.form.times = toPairs(groupBy<DayHour>('day')(selections)).map(
//         ([day, list]) => ({
//           day: +day,
//           hours: list.map(row => row.hour).sort((a, b) => a - b)
//         })
//       );
//     },
//     resetForm() {
//       this.form.discordName = '';
//       this.form.referalSource = '';
//       this.form.whyJoinUs = '';
//       this.form.times = new Array<Times>();
//       this.form.timezone = moment().format('Z');
//       this.form.gameplayExperience = {};
//     },
//     getTimeRange(ranges: number[]): string {
//       if (ranges.length === 0) return '';
//       const startTime = ranges[0] <= 12 ? ranges[0] + 12 : ranges[0] - 12;
//       const endTime =
//         ranges[ranges.length - 1] > 12
//           ? ranges[ranges.length - 1] - 12
//           : ranges[ranges.length - 1] + 12;
//       const start = moment().hour(startTime).format('ha');
//       const end = moment().hour(endTime).endOf('hour').format('ha');
//       return `${start} - ${end}`;
//     },
//     sendForm() {
//       // TODO: Add Validation
//       const hook = new WebhookClient(
//         '798899769858195487',
//         '0ExGM17nfmIlQM3Hlva1KSALPD3U6H77cCHNPnEt6uf2Cl5JTV1ySurpAcNW4PoTAOzY'
//       );
//       hook
//         .send({
//           embeds: [
//             this.discordMessageSummary,
//             this.playScheduleDetails,
//             this.discordMessageDetails
//           ]
//         })
//         .then(this.resetForm);
//     }
//   },
//   computed: {
//     selectedTimezoneLabel(): string {
//       const { name } =
//         this.timezones.find(
//           timezone => timezone.value === this.form.timezone
//         ) || {};
//       return name || '';
//     },
//     organizedPlaySchedule(): Array<{ day: string; times: string[] }> {
//       return this.form.times.map(time => {
//         const ranges: number[][] = [];
//         const hours = time.hours;
//         let counter = 0;
//         for (let index = 0; index < hours.length; index++) {
//           const hour = +hours[index];
//           if (index === 0) ranges[counter] = [];
//           else if (hour - 1 !== +hours[index - 1]) {
//             counter++;
//             ranges[counter] = [];
//           }
//           ranges[counter].push(hour);
//         }
//         return {
//           day: moment().day(time.day).format('ddd'),
//           times: ranges.map(range => this.getTimeRange(range))
//         };
//       });
//     },
//     referalSourceAndDetail(): string {
//       const append = this.form.referalDetails
//         ? `: ${this.form.referalDetails}`
//         : '';
//       return this.form.referalSource + append;
//     },
//     discordMessageSummary(): MessageEmbed {
//       return new MessageEmbed()
//         .setTitle(
//           `${this.form.discordName} Via: ${this.referalSourceAndDetail}`
//         )
//         .setColor(0xff0000)
//         .setDescription(this.form.whyJoinUs);
//     },
//     discordMessageDetails(): MessageEmbed {
//       return new MessageEmbed()
//         .setTitle('Gameplay')
//         .setColor(0xff0000)
//         .setDescription('Playstyle and Experience')
//         .addFields([
//           ...Object.entries(this.form.gameplayExperience).map(
//             ([style, value]) => ({
//               name: `Level of Experience: ${style}`,
//               value,
//               inline: true
//             })
//           )
//         ]);
//     },
//     playScheduleDetails(): MessageEmbed {
//       return new MessageEmbed()
//         .setTitle('Play Schedule')
//         .setColor(0xff0000)
//         .setDescription('Timezone and Day/Hour Play Schedule')
//         .addFields([
//           {
//             name: 'Timezone',
//             value: this.selectedTimezoneLabel
//           },
//           ...this.organizedPlaySchedule.flatMap(({ day, times }) =>
//             times.map(time => ({
//               name: day,
//               value: time,
//               inline: true
//             }))
//           )
//         ]);
//     }
//   },
//   data() {
//     return {
//       form: {
//         discordName: '',
//         referalSource: '',
//         referalDetails: '',
//         whyJoinUs: '',
//         times: new Array<Times>(),
//         timezone: moment().format('Z'),
//         gameplayExperience: {}
//       },
//       referalSources: [
//         {
//           value: 'Ashes of Creation Discord',
//           moreInfo: ''
//         },
//         {
//           value: 'Ashes of Creation Forums',
//           moreInfo: ''
//         },
//         {
//           value: 'Guild Member | Friend',
//           moreInfo: 'Please specify who refered you to us'
//         },
//         {
//           value: 'Other',
//           moreInfo: 'Please specify how you heard about us.'
//         }
//       ],
//       timezones: [
//         { name: '(GMT -12:00) Eniwetok, Kwajalein', value: '-12:00' },
//         { name: '(GMT -11:00) Midway Island, Samoa', value: '-11:00' },
//         { name: '(GMT -10:00) Hawaii', value: '-10:00' },
//         { name: '(GMT -9:30) Taiohae', value: '-09:50' },
//         { name: '(GMT -9:00) Alaska', value: '-09:00' },
//         { name: '(GMT -8:00) Pacific Time (US &amp; Canada)', value: '-08:00' },
//         {
//           name: '(GMT -7:00) Mountain Time (US &amp; Canada)',
//           value: '-07:00'
//         },
//         {
//           name: '(GMT -6:00) Central Time (US &amp; Canada), Mexico City',
//           value: '-06:00'
//         },
//         {
//           name: '(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima',
//           value: '-05:00'
//         },
//         { name: '(GMT -4:30) Caracas', value: '-04:50' },
//         {
//           name: '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz',
//           value: '-04:00'
//         },
//         { name: '(GMT -3:30) Newfoundland', value: '-03:50' },
//         {
//           name: '(GMT -3:00) Brazil, Buenos Aires, Georgetown',
//           value: '-03:00'
//         },
//         { name: '(GMT -2:00) Mid-Atlantic', value: '-02:00' },
//         {
//           name: '(GMT -1:00) Azores, Cape Verde Islands',
//           value: '-01:00'
//         },
//         {
//           name: '(GMT) Western Europe Time, London, Lisbon, Casablanca',
//           value: '+00:00'
//         },
//         {
//           name: '(GMT +1:00) Brussels, Copenhagen, Madrid, Paris',
//           value: '+01:00'
//         },
//         { name: '(GMT +2:00) Kaliningrad, South Africa', value: '+02:00' },
//         {
//           name: '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg',
//           value: '+03:00'
//         },
//         { name: '(GMT +3:30) Tehran', value: '+03:50' },
//         {
//           name: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi',
//           value: '+04:00'
//         },
//         { name: '(GMT +4:30) Kabul', value: '+04:50' },
//         {
//           name: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent',
//           value: '+05:00'
//         },
//         {
//           name: '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi',
//           value: '+05:50'
//         },
//         { name: '(GMT +5:45) Kathmandu, Pokhara', value: '+05:75' },
//         { name: '(GMT +6:00) Almaty, Dhaka, Colombo', value: '+06:00' },
//         { name: '(GMT +6:30) Yangon, Mandalay', value: '+06:50' },
//         { name: '(GMT +7:00) Bangkok, Hanoi, Jakarta', value: '+07:00' },
//         {
//           name: '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong',
//           value: '+08:00'
//         },
//         { name: '(GMT +8:45) Eucla', value: '+08:75' },
//         {
//           name: '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
//           value: '+09:00'
//         },
//         { name: '(GMT +9:30) Adelaide, Darwin', value: '+09:50' },
//         {
//           name: '(GMT +10:00) Eastern Australia, Guam, Vladivostok',
//           value: '+10:00'
//         },
//         { name: '(GMT +10:30) Lord Howe Island', value: '+10:50' },
//         {
//           name: '(GMT +11:00) Magadan, Solomon Islands, New Caledonia',
//           value: '+11:00'
//         },
//         { name: '(GMT +11:30) Norfolk Island', value: '+11:50' },
//         {
//           name: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka',
//           value: '+12:00'
//         },
//         { name: '(GMT +12:45) Chatham Islands', value: '+12:75' },
//         { name: '(GMT +13:00) Apia, Nukualofa', value: '+13:00' },
//         { name: '(GMT +14:00) Line Islands, Tokelau', value: '+14:00' }
//       ],
//       pvpScenarios: [
//         'Guild Wars',
//         'Node Wars',
//         'Castle Seiges',
//         'Node Seiges',
//         'Battlegrounds',
//         'Caravan PvP',
//         'Naval PvP',
//         'Arenas',
//         'Trade',
//         'Crafting',
//         'PvE Progression',
//         'Exploration'
//       ]
//     };
//   }
// });
</script>
<template lang="pug">
.relative.px-4(class="sm:px-6 lg:px-8")
  ul.divide-y.divide-gray-700
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Join Us
      p.mt-8.leading-8
        | We are looking for players who are interested in joining us in Ashes of Creation.  We are a group of players who have been playing MMORPGs together for over 20 years.  We are looking for players who are interested in playing with a group of like minded individuals who are looking to have fun and enjoy the game together.
      //- p.mt-8.leading-8
      //-   | If you are interested in joining us, please fill out the form below.  We will review your application and get back to you as soon as possible.
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Under Construction
//- .px-4(class="sm:px-6 lg:px-8")
//-   p.mt-8.leading-8
//-     h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Join Us
//-     p.mt-8.leading-8
//-       .bg-gray-800.shadow.my-5.px-4.py-5(class="sm:rounded-lg sm:p-6")
//-         div(class="md:col-span-1")
//-           h3.text-lg.font-medium.leading-6 Personal
//-           p.mt-1.text-sm
//-             | Personal and account information.
//-         .mt-5(class="md:mt-0 md:col-span-2")
//-           .space-y-6
//-             div
//-               label.block.text-sm.font-medium
//-                 | Discord Name
//-               .mt-1.flex.rounded-md.shadow-sm
//-                 input.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md.text-gray-900(
//-                   type="text"
//-                   class="focus:ring-indigo-500 focus:border-indigo-500"
//-                   v-model="form.discordName"
//-                 )
//-               p.mt-2.text-sm
//-                 | Your full discord name including the #0000 part. This is how we will be contacting you, so please type it in correctly!
//-             fieldset
//-               legend.text-base.font-medium How did you hear about us?
//-               .mt-4.space-y-4
//-                 div(v-for="source in referalSources" :key="source.value")
//-                   .flex.items-center
//-                     input.h-4.w-4.text-indigo-600.border-gray-300(
//-                       name="referal_source"
//-                       type="radio"
//-                       class="focus:ring-indigo-500"
//-                       :value="source.value"
//-                       v-model="form.referalSource"
//-                       @change="form.referalDetails = ''"
//-                     )
//-                     label.ml-3.block.text-sm.font-medium
//-                       | {{ source.value }}
//-                   div(v-if="shouldDisplayMoreInfo(source)")
//-                     .mt-1.flex.rounded-md.shadow-sm
//-                       input.block.w-full.shadow-sm.py-3.px-4.border-gray-300.rounded-md.text-gray-900(
//-                         type="text"
//-                         class="focus:ring-indigo-500 focus:border-indigo-500"
//-                         v-model="form.referalDetails"
//-                       )
//-                     p.mt-2.text-sm
//-                       | {{ source.moreInfo }}
//-             div
//-               label.block.text-sm.font-medium
//-                 | Why do you wish to join us?
//-               .mt-1
//-                 textarea.shadow-sm.block.w-full.border-gray-300.rounded-md.text-gray-900(
//-                   rows="5"
//-                   class="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//-                   v-model="form.whyJoinUs"
//-                 )
//-               p.mt-2.text-sm
//-                 | Be detailed.  We won't consider applications with short answers.
//-       .bg-gray-800.shadow.my-5.px-4.py-5(class="sm:rounded-lg sm:p-6")
//-         div(class="md:col-span-1")
//-           h3.text-lg.font-medium.leading-6 Gameplay
//-           p.mt-1.text-sm
//-             | Playstyle and experience information.
//-         .mt-5(class="md:mt-0 md:col-span-2")
//-           fieldset.mt-4.space-y-4
//-             legend.text-base.font-medium What's your Time zone
//-             .flex.items-start
//-               select.mt-1.block.w-full.pl-3.pr-10.py-2.text-base.border-gray-300.rounded-md.text-gray-900(name="timezone" class="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")
//-                 option(
//-                   v-for="timezone in timezones"
//-                   :value="timezone.value"
//-                   :selected="isSelectedTimeZone(timezone.value)"
//-                   :key="timezone.name"
//-                 ) {{ timezone.name }}
//-           fieldset.mt-4.space-y-4
//-             legend.text-base.font-medium What's your play schedule look like?
//-             span.text-sm Alt Drag on Windows, or Command Drag on Mac to Select multiple ranges
//-             PlaySchedule(@selections="setSelections")
//-           fieldset.mt-4.space-y-4
//-             legend.text-base.font-medium For each of the following scenarios, please detail your level of experience using examples and achievements.
//-             .space-y-6
//-               div(v-for="scenario in pvpScenarios" :key="scenario")
//-                 label.block.text-sm.font-medium
//-                   | {{ scenario }}
//-                 .mt-1.flex.rounded-md.shadow-sm
//-                   input.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md.text-gray-900(
//-                     type="text"
//-                     class="focus:ring-indigo-500 focus:border-indigo-500"
//-                     v-model="form.gameplayExperience[scenario]"
//-                   )
//-     .flex.justify-end
//-       button.inline-flex.justify-center.py-3.px-6.border.border-transparent.shadow-sm.text-base.font-medium.rounded-md.text-white.bg-indigo-600(
//-         class="hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//-         @click="sendForm()"
//-       )
//-         | Submit
</template>

<style></style>
