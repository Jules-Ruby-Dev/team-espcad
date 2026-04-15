<template>
  <div class="min-h-screen bg-gradient-dark flex flex-col">
    <!-- Header -->
    <header class="flex flex-col items-center pt-2xl pb-l px-m gap-s">
      <img
        src="https://placehold.co/96x96/38b2ac/ffffff?text=ESPCAD"
        alt="Team ESPCAD Logo"
        class="w-24 h-24 rounded-full object-cover border-4 border-teal/40 shadow-card"
      />
      <h3 class="font-barlow text-h3 font-bold text-white tracking-widest uppercase">
        Team ESPCAD
      </h3>
    </header>

    <!-- Main content -->
    <main class="flex-1 w-full max-w-content mx-auto px-m sm:px-l pb-2xl">
      <h1 class="font-barlow text-h2 sm:text-h1 font-bold text-white text-center mb-xl tracking-wide">
        Meet the Team
      </h1>

      <!-- Cards list – staggered animation on mount -->
      <div class="flex flex-col gap-l">
        <TeamMemberCard
          v-for="(member, index) in teamMembers"
          :key="member.name"
          v-bind="member"
          :card-index="index"
        />
      </div>
    </main>

    <!-- Footer -->
    <footer class="text-center py-m px-m text-white/50 text-body-sm font-work border-t border-white/10">
      &copy; 2026 Team ESPCAD. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import TeamMemberCard from './components/TeamMemberCard.vue'

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Team Lead & Systems Engineer',
    bio: 'Alex drives the overall system architecture and keeps the team on track from concept to deployment.',
    portrait: 'https://placehold.co/160x160/38b2ac/ffffff?text=AR',
    linkedinQr: 'https://placehold.co/140x140/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/140x140/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Jordan Kim',
    role: 'Embedded Software Engineer',
    bio: 'Jordan specialises in firmware for ESP32 microcontrollers and real-time sensor data pipelines.',
    portrait: 'https://placehold.co/160x160/e94e77/ffffff?text=JK',
    linkedinQr: 'https://placehold.co/140x140/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/140x140/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Sam Patel',
    role: 'Hardware & PCB Designer',
    bio: 'Sam designs and fabricates custom PCBs, turning schematics into production-ready hardware.',
    portrait: 'https://placehold.co/160x160/50c878/ffffff?text=SP',
    linkedinQr: 'https://placehold.co/140x140/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/140x140/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Morgan Lee',
    role: 'CAD & Mechanical Engineer',
    bio: 'Morgan creates precise 3D models and enclosure designs, bridging the gap between electronics and the physical world.',
    portrait: 'https://placehold.co/160x160/f5a623/ffffff?text=ML',
    linkedinQr: 'https://placehold.co/140x140/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/140x140/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Casey Chen',
    role: 'Full-Stack & Cloud Developer',
    bio: 'Casey builds the web dashboard and cloud backend that visualise live data from the ESPCAD devices.',
    portrait: 'https://placehold.co/160x160/9b59b6/ffffff?text=CC',
    linkedinQr: 'https://placehold.co/140x140/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/140x140/ffffff/333333?text=GitHub+QR',
  },
]
</script>
