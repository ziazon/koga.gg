<template lang="pug">
.relative.bg-white
  .absolute.inset-0
    .absolute.inset-y-0.left-0.bg-gray-50(class="w-1/2")
  .relative.max-w-7xl.mx-auto(class="lg:grid lg:grid-cols-5")
    .bg-gray-50.py-16.px-4(class="sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12")
      .max-w-lg.mx-auto
        h2.text-2xl.font-extrabold.tracking-tight.text-gray-900(class="sm:text-3xl")
          | Get in touch
        p.mt-3.text-lg.leading-6.text-gray-500
          | Use the form to apply to join our clan.
        dl.mt-8.text-base.text-gray-500
          div
            dt.sr-only Discord
            dd
              p Leaders:
              p Officers:
    .bg-white.py-16.px-4(class="sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12")
      .max-w-lg.mx-auto(class="lg:max-w-none")
        form.grid.grid-cols-1.gap-y-6(action="#" method="POST")
          div
            label.sr-only(for="full_name") Full name
            input#full_name.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md(type="text" name="full_name" autocomplete="name" class="focus:ring-indigo-500 focus:border-indigo-500" placeholder="Full name")
          div
            label.sr-only(for="email") Email
            input#email.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md(name="email" type="email" autocomplete="email" class="focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email")
          div
            label.sr-only(for="phone") Phone
            input#phone.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md(type="text" name="phone" autocomplete="tel" class="focus:ring-indigo-500 focus:border-indigo-500" placeholder="Phone")
          div
            label.sr-only(for="message") Message
            textarea#message.block.w-full.shadow-sm.py-3.px-4.placeholder-gray-500.border-gray-300.rounded-md(name="message" rows="4" class="focus:ring-indigo-500 focus:border-indigo-500" placeholder="Message")
          div
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
