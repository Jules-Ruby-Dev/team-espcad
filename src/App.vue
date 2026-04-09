<template>
  <div id="site-wrapper">
    <header class="site-header">
      <img
        src="https://placehold.co/120x120/4a90d9/ffffff?text=ESPCAD"
        alt="Team ESPCAD Logo"
        class="logo"
      />
      <h3 class="team-name">Team ESPCAD</h3>
    </header>

    <main class="site-main">
      <h1 class="section-title">Meet the Team</h1>
      <div class="cards-grid">
        <TeamMemberCard
          v-for="member in teamMembers"
          :key="member.name"
          v-bind="member"
        />
      </div>
    </main>

    <footer class="site-footer">
      <p>&copy; 2026 Team ESPCAD. All rights reserved.</p>
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
    portrait: 'https://placehold.co/160x160/4a90d9/ffffff?text=AR',
    linkedinQr: 'https://placehold.co/100x100/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/100x100/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Jordan Kim',
    role: 'Embedded Software Engineer',
    bio: 'Jordan specialises in firmware for ESP32 microcontrollers and real-time sensor data pipelines.',
    portrait: 'https://placehold.co/160x160/e94e77/ffffff?text=JK',
    linkedinQr: 'https://placehold.co/100x100/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/100x100/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Sam Patel',
    role: 'Hardware & PCB Designer',
    bio: 'Sam designs and fabricates custom PCBs, turning schematics into production-ready hardware.',
    portrait: 'https://placehold.co/160x160/50c878/ffffff?text=SP',
    linkedinQr: 'https://placehold.co/100x100/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/100x100/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Morgan Lee',
    role: 'CAD & Mechanical Engineer',
    bio: 'Morgan creates precise 3D models and enclosure designs, bridging the gap between electronics and the physical world.',
    portrait: 'https://placehold.co/160x160/f5a623/ffffff?text=ML',
    linkedinQr: 'https://placehold.co/100x100/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/100x100/ffffff/333333?text=GitHub+QR',
  },
  {
    name: 'Casey Chen',
    role: 'Full-Stack & Cloud Developer',
    bio: 'Casey builds the web dashboard and cloud backend that visualise live data from the ESPCAD devices.',
    portrait: 'https://placehold.co/160x160/9b59b6/ffffff?text=CC',
    linkedinQr: 'https://placehold.co/100x100/ffffff/333333?text=LinkedIn+QR',
    githubQr: 'https://placehold.co/100x100/ffffff/333333?text=GitHub+QR',
  },
]
</script>
