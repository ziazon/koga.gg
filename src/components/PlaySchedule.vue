<script setup lang="ts">
// import { defineComponent } from 'vue';

// import SelectionArea from '@simonwep/selection-js';

// interface LabelValue {
//   key: number;
//   label: string;
// }

// interface PlayScheduleData {
//   selectionArea: SelectionArea;
//   selections: Array<{
//     day: number;
//     hour: number;
//   }>;
//   rows: LabelValue[];
//   cols: LabelValue[];
// }

// export default defineComponent<Record<string, unknown>, PlayScheduleData>({
//   name: 'PlaySchedule',
//   data() {
//     return {
//       selectionArea: null,
//       selections: [],
//       rows: [
//         { value: 1, label: 'Mon' },
//         { value: 2, label: 'Tue' },
//         { value: 3, label: 'Wed' },
//         { value: 4, label: 'Thu' },
//         { value: 5, label: 'Fri' },
//         { value: 6, label: 'Sat' },
//         { value: 0, label: 'Sun' }
//       ],
//       cols: [
//         {
//           value: 0,
//           label: '12pm'
//         },
//         {
//           value: 1,
//           label: '1pm'
//         },
//         {
//           value: 2,
//           label: '2pm'
//         },
//         {
//           value: 3,
//           label: '3pm'
//         },
//         {
//           value: 4,
//           label: '4pm'
//         },
//         {
//           value: 5,
//           label: '5pm'
//         },
//         {
//           value: 6,
//           label: '6pm'
//         },
//         {
//           value: 7,
//           label: '7pm'
//         },
//         {
//           value: 8,
//           label: '8pm'
//         },
//         {
//           value: 9,
//           label: '9pm'
//         },
//         {
//           value: 10,
//           label: '10pm'
//         },
//         {
//           value: 11,
//           label: '11pm'
//         },
//         {
//           value: 12,
//           label: '12am'
//         },
//         {
//           value: 13,
//           label: '1am'
//         },
//         {
//           value: 14,
//           label: '2am'
//         },
//         {
//           value: 15,
//           label: '3am'
//         },
//         {
//           value: 16,
//           label: '4am'
//         },
//         {
//           value: 17,
//           label: '5am'
//         },
//         {
//           value: 18,
//           label: '6am'
//         },
//         {
//           value: 19,
//           label: '7am'
//         },
//         {
//           value: 20,
//           label: '8am'
//         },
//         {
//           value: 21,
//           label: '9am'
//         },
//         {
//           value: 22,
//           label: '10am'
//         },
//         {
//           value: 23,
//           label: '11am'
//         }
//       ]
//     };
//   },
//   mounted() {
//     this.selectionArea = new SelectionArea({
//       selectables: ['.selection-area .flex > .cell'],
//       boundaries: ['.selection-area']
//     })
//       .on('start', ({ store, event }) => {
//         if (!event?.ctrlKey && !event?.metaKey) {
//           for (const el of store.stored) el.classList.remove('bg-red-400');
//           this.selectionArea.clearSelection();
//         }
//       })
//       .on(
//         'move',
//         ({
//           store: {
//             changed: { added, removed }
//           }
//         }) => {
//           for (const el of added) el.classList.add('bg-red-400');
//           for (const el of removed) el.classList.remove('bg-red-400');
//         }
//       )
//       .on('stop', () => {
//         this.selectionArea.keepSelection();
//         this.selections = this.selectionArea.getSelection().map(element => {
//           const dataset = (element as HTMLDivElement).dataset;
//           const day = +(dataset.day || '');
//           const hour = +(dataset.hour || '');
//           return { day, hour };
//         });
//         this.$emit('selections', this.selections);
//       });
//   }
// });
</script>
<template lang="pug">
div
//- .selection-area.text-xs
//-   .flex
//-     .flex-1.rounded-sm.flex.items-center.justify-center.w-5.h-5.m-1
//-     .flex-1.rounded-sm.flex.w-5.h-5.m-1(v-for="col in cols") {{ col.label}}
//-   .flex(v-for="row in rows")
//-     .flex-1.rounded-sm.flex.items-center.justify-center.w-5.h-5.m-1 {{ row.label }}
//-     .flex-1.rounded-sm.flex.bg-gray-200.w-5.h-5.m-1.cell(v-for="col in cols" :data-day="row.value" :data-hour="col.value")
</template>
<style lang="scss" scoped></style>
