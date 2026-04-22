<template>
  <article
    class="card overflow-hidden"
    :class="animClass"
    :style="animStyle"
  >
    <!-- Desktop: horizontal 3-column grid | Mobile: stacked -->
    <div class="flex flex-col sm:flex-row sm:items-stretch gap-l p-l sm:p-xl">

      <!-- Portrait -->
      <div class="flex-shrink-0 flex justify-center sm:items-center">
        <img
          :src="portrait"
          :alt="name + ' portrait'"
          class="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-teal/20 shadow-sm"
        />
      </div>

      <!-- Info -->
      <div class="flex-1 text-center sm:text-left flex flex-col justify-center">
        <h2 class="font-barlow text-h3 font-bold text-yellow-dark dark:text-teal-dark1 leading-tight mb-xxs">
          {{ name }}
        </h2>
        <p class="font-work text-body-sm font-semibold text-yellow dark:text-teal uppercase tracking-widest mb-s">
          {{ role }}
        </p>
        <p class="font-work text-body text-white dark:text-slate-dark1">
          {{ bio }}
        </p>
      </div>

      <!-- QR codes -->
      <div class="flex-shrink-0 flex sm:flex-col flex-row justify-center items-center gap-l sm:gap-xl border-t sm:border-t-0 sm:border-l border-slate-light1 pt-l sm:pt-0 sm:pl-xl">
        <a
          :href="linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group"
          :aria-label="name + ' LinkedIn profile'"
        >
          <img
            :src="linkedinQr"
            :alt="name + ' LinkedIn QR code'"
            class="w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] border border-slate-light1 rounded-xl object-contain group-hover:shadow-sm transition-shadow duration-150"
            style="mix-blend-mode: multiply;"
          />
        </a>
        <!-- <a
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-xs group"
          :aria-label="name + ' GitHub profile'"
        >
          <img
            :src="githubQr"
            :alt="name + ' GitHub QR code'"
            class="w-[150px] h-[150px] sm:w-[140px] sm:h-[140px] border border-slate-light1 rounded-lg object-contain group-hover:shadow-sm transition-shadow duration-150"
          />
          <span class="font-work text-caption font-semibold text-teal uppercase tracking-wider group-hover:text-teal-dark1 transition-colors duration-150">
            GitHub
          </span>
        </a> -->
      </div>

    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { CARD_ANIM_DURATION_MS, CARD_ANIM_STAGGER_MS, CARD_ANIM_EASING } from '../animation.js'

const props = defineProps({
  name:        { type: String, required: true },
  role:        { type: String, required: true },
  bio:         { type: String, required: true },
  portrait:    { type: String, required: true },
  linkedinQr:  { type: String, required: true },
  linkedinUrl: { type: String, default: 'https://linkedin.com' },
  cardIndex:   { type: Number, default: 0 },
})

/*
 * Stagger: each card starts CARD_ANIM_STAGGER_MS after the previous one.
 * Using inline :style so the delay is not overridden by Tailwind's animation
 * shorthand utility (which resets animation-delay to 0 in @layer utilities).
 */
const animClass = computed(() =>
  props.cardIndex % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
)
const animStyle = computed(() => ({
  animationDelay:    `${props.cardIndex * CARD_ANIM_STAGGER_MS}ms`,
  animationDuration: `${CARD_ANIM_DURATION_MS}ms`,
  animationTimingFunction: CARD_ANIM_EASING,
}))
</script>