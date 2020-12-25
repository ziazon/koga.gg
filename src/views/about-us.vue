<template lang="pug">
h1 banner
.max-w-7xl.mx-auto.py-12.px-4(class="sm:px-6 lg:py-16 lg:px-8")
  p.text-center.text-base.font-semibold.uppercase.text-gray-600.tracking-wider
    h2 Who We Are
  p.text-center.text-base.font-semibold.uppercase.text-gray-600.tracking-wider
    h2 Why Join Us
  p.text-center.text-base.font-semibold.uppercase.text-gray-600.tracking-wider
    h2 History
    h3 2003
    p Koga was originally known as Yakuza Vanu on the Johari server in the original Planetside. Reaching a rank of 4th on the server for outfit points with the smallest outfit in the top 15 outfits with only 80 on roster (60 actual players, 30-40 on during primetime), the outfit leader (Jubei) was the second Command Rank 5 on the server.
    h3 2004
    p The leader of Yakuza Vanu and a few members left the original Planetside when the Johari merged with Markov and a few other changes came to the game that they weren't a big fan of, in conjunction with the release of Lineage 2, an FFA pvp focused MMORPG. Koga Clan was formed on Gustin in Lineage 2 where the clan recruited up to exactly 2 groups that was maintained and never having more than that. The clan was hired on a regular basis to take castles for other clans and were at war with all major alliances on the server about 80% of the time. Koga Clan was considered the deadliest mercenary clan on the server for three years. Koga Clan also never (yes never) lost a single war. Those who remained in Planetside formed HAYABUSA and continued the tactical ops tradition the outfit so strongly believes in.
    h3 2007
    p The Lineage 2 group reemerged in WoW. The guild's purpose was to develop skilled PvP players so that we could dominate in Open world PvP. Unfortunately WoW was not very well designed or suited for consistent open world PvP. However WoW was the fallback game for many Koga members to this day.
    h3 2008
    p When WAR:Online came out, the group played there for some time with both Koga and HAYABUSA players.
    h3 2008
    p Had a recursion of players from HAYABUSA as free time from SOE came up and members were willing to come back spurred on by rumors of a Planetside sequel. Fun times were had as outfitmates who haven't seen each other in a long time reminisced about the good ol days while killing Terrans and NCs.
    h3 2010
    p Koga Clan joined up with HAYABUSA in Global Agenda. It was during this time that the group saw its greatest successes since Lineage 2 for Koga and Planetside 1 for HAYABUSA. With the help and drive of a new skilled player base HAYABUSA managed to level all opposition and globally colonize the entire Alliance vs Alliance map Sovereign in season 1. This took months of dedication and after the final triumph the outfit needed a break…
    h3 2011
    p The group has once again reformed into a small group (10-15) casually PvPing in Star War: The Old Republic.
    h3 2012
    p HAYABUSA reformed in Planetside 2 reuniting everyone, ready for action looking for those who want something more than individual play or zergfests.
    h3 2017
    p Koga Clan reformed in Lineage 2 Revolution (Mobile) and continued the tradition of being a strong pvp group and had some solid successes being the smallest clan to take a Fortress, and had some of the top pvp ranked players on the server.
    h3 2020
    p Some members of both HAYABUSA and Koga played a bit of Albion Online, but it didn't stick for most.
    h3 Present
    p After 15 years of waiting for a great MMORPG, is Ashes of Creation it? we sure hope so!  In the meantime we play an assortment of games together.  Among Us, Overwatch, Sea of Thieves, and GTAV are some of the games we play, and are always open to try new games as a group.s
  p.text-center.text-base.font-semibold.uppercase.text-gray-600.tracking-wider
    h2 Videos
  .mt-6.grid.grid-cols-2(class="gap-0.5 md:grid-cols-2 lg:mt-8")
    .col-span-1.flex.justify-center.py-8.px-8.bg-gray-800(
      v-for="embed in videos"
    )
      iframe(
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
