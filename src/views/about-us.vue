<template lang="pug">
h1 banner section
.max-w-7xl.mx-auto.py-12.px-4(class="sm:px-6 lg:py-16 lg:px-8")
.relative.px-4(class="sm:px-6 lg:px-8")
  ul.divide-y.divide-gray-700
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Who We Are
      p.mt-8.leading-8(v-for="paragraph in whoWeAre") {{ paragraph }}
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") Why Join Us
      .flow-root
        .grid(class="lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12")
          ul.-mb-8(v-for="list in whyjoin")
            li
              .block.my-8.text-base.font-semibold.tracking-wide.uppercase
                | {{ list.title }}
            li(v-for="(reason, index) in list.reasons")
              .relative.pb-8
                span.absolute.top-4.left-4.-ml-px.h-full(:class="{'bg-gray-700 w-0.5': list.reasons.length > index+1}")
                .relative.flex.space-x-3
                  div
                    span.h-8.w-8.rounded-full.bg-green-500.flex.items-center.justify-center.ring-8.ring-grey
                      svg.h-5.w-5.text-white(xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true")
                        path(fill-rule="evenodd" :d="list.shape" clip-rule="evenodd")
                  .min-w-0.flex-1.flex.justify-between.space-x-4
                    div
                      p.ml-2
                        | {{ reason }}
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl") History
      .flow-root
        ul.-mb-8
          li(v-for="(event, index) in history")
            .relative.pb-8
              span.absolute.top-5.left-5.-ml-px.h-full.bg-gray-700(:class="{'bg-gray-700 w-0.5': history.length > index+1}")
              .relative.flex.items-start.space-x-3
                div
                  .relative.px-1
                    span.h-8.w-8.rounded-full.bg-green-500.flex.items-center.justify-center.ring-8.ring-grey
                      svg.h-5.w-5.text-white(xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true")
                        path(fill-rule="evenodd" :d="event.shape" clip-rule="evenodd")
                .min-w-0.flex-1.py-0
                  div.ml-2
                    p.text-3xl.text-gray-400
                      | {{ event.period }}
                    p
                      | {{ event.details }}
    li.py-4
      h3.mt-2.block.text-3xl.text-center.text-gray-400.leading-8.font-extrabold(class="sm:text-4xl")  Videos
      .mx-auto.max-w-7xl(class='sm:px-6 lg:px-8 lg:py-24')
        ul.space-y-12(class='sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:gap-x-8')
          li.shadow-lg.rounded-lg.bg-gray-800(v-for="embed in videos")
            .aspect-w-2.aspect-h-1.m-4
              iframe.object-contain(
                width="560"
                height="315"
                :src="embed"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              )
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutUs',
  data() {
    return {
      whoWeAre: [
        'We are a PVP first clan, where everything we do is in support of our goal of being the best elite fighting force on our server for our small size.',
        'While leveling, we tend to run in the same groups that we do when we’re pvping.  This is done so that our team cohesion and dynamics are well maintained, and don’t require any setup time if/when pvp happens;  we are simply ready.',
        'We don’t go after lowbies or weak enemies, except in the event that said person(s) are griefers.  However we have a healthy kill or be killed mentality where our inclination is more on killing a person or team over a resource/hunting area rather than share.  If we are inclined to take a spot, we take it.  We might be included to ask folks to leave first, but it’s on a case by case basis.',
        'Effective strategies start with training. Drills and running through tactics, getting our timing from a strategic battlefield perspective is key to our play style in pvp due to our focus on gorilla warfare as a primary source of content.  Our Squad and Platoon leaders hold drills periodically focusing a good amount on timing of everything from kiting to flanking with 2-3 different groups working together.'
      ],
      whyjoin: [
        {
          title: 'We Offer',
          shape:
            'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
          reasons: [
            'Tactical PvP combat.',
            'Group PvP Training.',
            'A multi-generational community.',
            'A Clan, not a Guild.',
            'Small to Medium Size clan with a strict no zerg policy.',
            'The Military Branch of an Alliance.'
          ]
        },
        {
          title: 'You are a player who',
          shape:
            'M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z',
          reasons: [
            'loves the challenge of killing other players over killing NPCs.',
            'enjoys military style organization in fights with a family vibe out of combat.',
            'respects the chain of command.',
            'is not afraid of dying a lot.',
            'doesn\'t shit talk. shows up to a fight, kills or dies, with no more than a "gf" at the end.'
          ]
        }
      ],
      history: [
        {
          period: '2003',
          details:
            'Koga was originally known as Yakuza Vanu on the Johari server in the original Planetside. Reaching a rank of 4th on the server for outfit points with the smallest outfit in the top 15 outfits with only 80 on roster (60 actual players, 30-40 on during primetime), the outfit leader (Jubei) was the second Command Rank 5 on the server.',
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2004',
          details:
            "The leader of Yakuza Vanu and a few members left the original Planetside when the Johari merged with Markov and a few other changes came to the game that they weren't a big fan of, in conjunction with the release of Lineage 2, an FFA pvp focused MMORPG. Koga Clan was formed on Gustin in Lineage 2 where the clan recruited up to exactly 2 groups that was maintained and never having more than that. The clan was hired on a regular basis to take castles for other clans and were at war with all major alliances on the server about 80% of the time. Koga Clan was considered the deadliest mercenary clan on the server for three years. Koga Clan also never (yes never) lost a single war. Those who remained in Planetside formed HAYABUSA and continued the tactical ops tradition the outfit so strongly believes in.",
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2007',
          details:
            "The Lineage 2 group reemerged in WoW. The guild's purpose was to develop skilled PvP players so that we could dominate in Open world PvP. Unfortunately WoW was not very well designed or suited for consistent open world PvP. However WoW is the fallback game for many Koga members to this day.",
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2008',
          details:
            'When WAR:Online came out, the group played there for some time with both Koga and HAYABUSA players.',
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2008',
          details:
            "Had a recursion of players from HAYABUSA as free time from SOE came up and members were willing to come back spurred on by rumors of a Planetside sequel. Fun times were had as outfitmates who haven't seen each other in a long time reminisced about the good ol days while killing Terrans and NCs.",
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2010',
          details:
            'Koga Clan joined up with HAYABUSA in Global Agenda. It was during this time that the group saw its greatest successes since Lineage 2 for Koga and Planetside 1 for HAYABUSA. With the help and drive of a new skilled player base HAYABUSA managed to level all opposition and globally colonize the entire Alliance vs Alliance map Sovereign in season 1. This took months of dedication and after the final triumph the outfit needed a break…',
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2011',
          details:
            'The group has once again reformed into a small group (10-15) casually PvPing in Star Wars: The Old Republic.',
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2012',
          details:
            'HAYABUSA reformed in Planetside 2 reuniting everyone, ready for action looking for those who want something more than individual play or zergfests.',
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2017',
          details:
            'Koga Clan reformed in Lineage 2 Revolution (Mobile) and continued the tradition of being a strong pvp group and had some solid successes being the smallest clan to take a Fortress, and had some of the top pvp ranked players on the server.',
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: '2020',
          details:
            "Some members of both HAYABUSA and Koga played a bit of Albion Online, but it didn't stick for most.",
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        },
        {
          period: 'Present',
          details:
            'After 15 years of waiting for a great MMORPG, is Ashes of Creation it? we sure hope so! In the meantime we play an assortment of games together. Among Us, Overwatch, Sea of Thieves, and GTAV are some of the games we play, and are always open to try new games as a group.',
          shape:
            'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
        }
      ],
      videos: [
        // L2R
        'https://www.youtube.com/embed/47g8Rvc7pa4',
        'https://www.youtube.com/embed/f411P3mvRP4',
        'https://www.youtube.com/embed/Q1RPbAVuMDY',
        // WoW
        'https://www.youtube.com/embed/mJsI44Ro26M',
        'https://www.youtube.com/embed/fNYnnIpntGU',
        'https://www.youtube.com/embed/Qv7jOStge4Y',
        //  GA
        'https://www.youtube.com/embed/G387pGDC_so',
        'https://www.youtube.com/embed/zt1y3JMsj9o',
        // Warhammer Online
        'https://www.youtube.com/embed/5IgMbWS2nHs',
        // L2
        'https://www.youtube.com/embed/bHAkUduxgQY',
        'https://www.youtube.com/embed/-XlDd13rl5U',
        'https://www.youtube.com/embed/2RH543QPeAo'
      ]
    };
  }
});
</script>

<style></style>
