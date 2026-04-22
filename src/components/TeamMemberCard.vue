<template>
  <article
    class="card overflow-hidden"
    :class="animClass"
    :style="animStyle"
  >
    <div class="card-inner flex flex-row items-stretch gap-l p-l md:p-xl">

      <!-- Portrait -->
      <div class="card-portrait flex-shrink-0 flex justify-center items-center">
        <img
          :src="portrait"
          :alt="name + ' portrait'"
          class="w-28 h-28 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-teal/20 shadow-sm"
        />
      </div>

      <!-- Info -->
      <div class="card-info flex-1 text-left flex flex-col justify-center">
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

      <!-- QR code -->
      <div class="card-qr flex-shrink-0 flex flex-col justify-center items-center border-l border-slate-light1 pl-xl">
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
            class="w-[180px] h-[180px] border border-slate-light1 rounded-xl object-contain group-hover:shadow-sm transition-shadow duration-150"

          />
        </a>
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

const animClass = computed(() =>
  props.cardIndex % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
)
const animStyle = computed(() => ({
  animationDelay:    `${props.cardIndex * CARD_ANIM_STAGGER_MS}ms`,
  animationDuration: `${CARD_ANIM_DURATION_MS}ms`,
  animationTimingFunction: CARD_ANIM_EASING,
}))
</script>