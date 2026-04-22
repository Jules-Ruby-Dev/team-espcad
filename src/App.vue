<template>
  <div
    class="min-h-screen flex flex-col dark:bg-gradient-dark bg-gradient-light transition-colors duration-300"
  >
    <!-- Header -->
    <header class="flex flex-col items-center pt-2xl pb-l px-m gap-s relative">
      <!-- Theme toggle pill (top-right) -->
      <button
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="absolute top-m right-m flex items-center gap-xs px-s py-xxs rounded-pill border transition-colors duration-200 bg-teal-dark3 border-teal/30 hover:bg-teal-dark2 shadow-sm"
      >
        <!-- Sun icon -->
        <svg
          class="w-4 h-4 transition-opacity duration-200"
          :class="isDark ? 'opacity-40 text-white' : 'opacity-100 text-yellow'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm9 8a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm14.95 5.364a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707zM6.757 7.05a1 1 0 0 1-1.414 1.415l-.707-.707A1 1 0 0 1 6.05 6.343l.707.707zm12.02-1.414a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM7.464 17.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0z"
          />
        </svg>
        <!-- Pill track -->
        <span
          class="relative inline-flex w-10 h-5 rounded-pill bg-teal transition-colors duration-200"
        >
          <span
            class="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200"
            :class="isDark ? 'left-[calc(100%_-_1.25rem)]' : 'left-0.5'"
          >
          </span>
        </span>
        <!-- Moon icon -->
        <svg
          class="w-4 h-4 transition-opacity duration-200"
          :class="
            isDark ? 'opacity-100 text-teal-light1' : 'opacity-40 text-white'
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
      </button>

      <!-- FlyDocs logo -->
      <img
        :src="isDark ? logoLight : logoDark"
        alt="FlyDocs"
        class="h-10 sm:h-12 w-auto object-contain"
        style="max-width: 220px"
      />

      <h3
        class="font-barlow text-h3 font-bold tracking-widest uppercase dark:text-white text-slate-dark3"
      >
        Team ESPCAD
      </h3>
    </header>

    <!-- Main content -->
    <main class="flex-1 w-full max-w-content mx-auto px-m sm:px-l pb-2xl">
      <h1
        class="font-barlow text-h2 sm:text-h1 font-bold text-center mb-xl tracking-wide dark:text-yellow-dark text-yellow-dark2"
      >
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
    <footer
      class="text-center py-l px-m text-body-sm font-work border-t dark:bg-slate-dark3 dark:border-teal-dark3/60 dark:text-slate-light2 bg-slate-dark2 border-slate-dark1/40 text-slate-light1"
    >
      &copy; 2026 Team ESPCAD. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TeamMemberCard from "./components/TeamMemberCard.vue";
import logoLight from "./assets/images/logo-flydocs-header.svg";
import logoDark from "./assets/images/logo-flydocs-header-dark.svg";

/* ── Theme management ── */
const isDark = ref(true);

function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
}

function toggleTheme() {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  applyTheme(isDark.value);
}

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    isDark.value = saved === "dark";
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Follow system preference changes when no saved override
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          isDark.value = e.matches;
          applyTheme(isDark.value);
        }
      });
  }
  applyTheme(isDark.value);
});

/* ── Team members ── */
const teamMembers = [
  {
    name: "Chris Hanlon",
    role: "Database Admin & Backend Engineer",
    bio: "Alex drives the overall system architecture and keeps the team on track from concept to deployment.",
    portrait: "./assets/images/chris_portrait.jpg",
    linkedinQr: "./assets/images/chris_qr_code.jpg",
    linkedinUrl: "https://www.linkedin.com/in/christopher-hanovich-564083161/",
  },
  {
    name: "Jordan Labell",
    role: "Security Lead & Backend Engineer",
    bio: "Jordan specialises in firmware for ESP32 microcontrollers and real-time sensor data pipelines.",
    portrait: "./assets/images/jordan_portrait.jpg",
    linkedinQr: "./assets/images/jordan_qr_code.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jordan-labell-419008326/",
  },
  {
    name: "J.R. Muri",
    role: "DevOps Lead & Fullstack Engineer",
    bio: "Sam designs and fabricates custom PCBs, turning schematics into production-ready hardware.",
    portrait: "./assets/images/jr_portrait.jpg",
    linkedinQr: "./assets/images/jr_qr_code.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jr-muri-ui/",
  },
  {
    name: "Louielyn Mata",
    role: "Project Manager & Fullstack Engineer",
    bio: "Design & Full-stack Software Engineer\n\nWith a holistic specialty in design, code, UX, and business strategy, Louie creates user-centric solutions across the SDLC (Software Development Life Cycle), from discovery and architecture to system design and continuous delivery.",
    portrait: "./assets/images/louie_portrait.jpg",
    linkedinQr: "./assets/images/louie_qr_code.jpg",
    linkedinUrl: "https://www.linkedin.com/in/louielynmata/",
  },
  {
    name: "Rocky McGoey",
    role: "QA and Testing Lead & Frontend Engineer",
    bio: "Casey builds the web dashboard and cloud backend that visualise live data from the ESPCAD devices.",
    portrait: "./assets/images/rocky_portrait.jpg",
    linkedinQr: "./assets/images/rocky_qr_code.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rocky-mcgoey-a2514633b/",
  },
];
</script>
