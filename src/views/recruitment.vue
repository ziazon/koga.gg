<template lang="pug">
.bg-gray-800.shadow.my-5.px-4.py-5(class='sm:rounded-lg sm:p-6')
  div(class='md:grid md:grid-cols-3 md:gap-6')
    div(class='md:col-span-1')
      h3.text-lg.font-medium.leading-6 Personal
      p.mt-1.text-sm
        | Personal and account information.
    .mt-5(class='md:mt-0 md:col-span-2')
      .space-y-6
        div
          label.block.text-sm.font-medium
            | Discord Name
          .mt-1.flex.rounded-md.shadow-sm
            input.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md(type="text" class="focus:ring-indigo-500 focus:border-indigo-500")
          p.mt-2.text-sm
            | Your full discord name including the #0000 part.
        fieldset
          legend.text-base.font-medium How did you hear about us?
          .mt-4.space-y-4
            .flex.items-center
              input.h-4.w-4.text-indigo-600.border-gray-300(name='referal_source' type='radio' class='focus:ring-indigo-500')
              label.ml-3.block.text-sm.font-medium
                | Ashes of Creation Discord
            .flex.items-center
              input.h-4.w-4.text-indigo-600.border-gray-300(name='referal_source' type='radio' class='focus:ring-indigo-500')
              label.ml-3.block.text-sm.font-medium
                | Ashes of Creation Forums
            .flex.items-center
              input.h-4.w-4.text-indigo-600.border-gray-300(name='referal_source' type='radio' class='focus:ring-indigo-500')
              label.ml-3.block.text-sm.font-medium
                | Guild Member | Friend
            .flex.items-center
              input.h-4.w-4.text-indigo-600.border-gray-300(name='referal_source' type='radio' class='focus:ring-indigo-500')
              label.ml-3.block.text-sm.font-medium
                | Other
            .mt-1.flex.rounded-md.shadow-sm
              input.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md(type="text" class="focus:ring-indigo-500 focus:border-indigo-500")
            p.mt-2.text-sm
              | If you marked Guild Member | Friend above please specify who, and if Other, specify how you heard about us.
        div
          label.block.text-sm.font-medium
            | Why do you wish to join us?
          .mt-1
            textarea.shadow-sm.block.w-full.border-gray-300.rounded-md(rows='3' class='focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' placeholder='you@example.com')
          p.mt-2.text-sm
            | Be detailed.  We won't consider applications with short answers.
.bg-gray-800.shadow.my-5.px-4.py-5(class='sm:rounded-lg sm:p-6')
  div(class='md:grid md:grid-cols-3 md:gap-6')
    div(class='md:col-span-1')
      h3.text-lg.font-medium.leading-6 Playstyle
      p.mt-1.text-sm
        | Playstyle and experience information.
    .mt-5(class='md:mt-0 md:col-span-2')
      form.space-y-6(action='#' method='POST')
        fieldset
          legend.text-base.font-medium What is your Time Zone
          .mt-4.space-y-4
            .flex.items-start
        fieldset
          legend.text-base.font-medium What's your place schedule look like?
          .mt-4.space-y-4
            .flex.items-start
        fieldset
          legend.text-base.font-medium How skilled would you consider your self in pvp?
          .mt-4.space-y-4
            .flex.items-start
        fieldset
          legend.text-base.font-medium What type of pvp content do you enjoy the most?
          .mt-4.space-y-4
            .flex.items-start
        fieldset
          legend.text-base.font-medium PvE|Exploring|Progression|Trade?
          .mt-4.space-y-4
            .flex.items-start
.flex.justify-end
  button.inline-flex.justify-center.py-3.px-6.border.border-transparent.shadow-sm.text-base.font-medium.rounded-md.text-white.bg-indigo-600(type="submit" class="hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
    | Submit

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Recruitment'
});
</script>

<style></style>
