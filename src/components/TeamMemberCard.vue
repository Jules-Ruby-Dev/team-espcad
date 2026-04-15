<template>
  <article
    class="card overflow-hidden"
    :class="[animClass, delayClass]"
  >
    <!-- Desktop: horizontal 3-column grid | Mobile: stacked -->
    <div class="flex flex-col sm:flex-row sm:items-center gap-l p-l sm:p-xl">

      <!-- Portrait -->
      <div class="flex-shrink-0 flex justify-center">
        <img
          :src="portrait"
          :alt="name + ' portrait'"
          class="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-teal/20 shadow-sm"
        />
      </div>

      <!-- Info -->
      <div class="flex-1 text-center sm:text-left">
        <h2 class="font-barlow text-h3 font-bold text-teal-dark1 leading-tight mb-xxs">
          {{ name }}
        </h2>
        <p class="font-work text-body-sm font-semibold text-teal uppercase tracking-widest mb-s">
          {{ role }}
        </p>
        <p class="font-work text-body text-slate-dark1">
          {{ bio }}
        </p>
      </div>

      <!-- QR codes -->
      <div class="flex-shrink-0 flex sm:flex-col flex-row justify-center gap-m">
        <figure class="flex flex-col items-center gap-xxs">
          <img
            :src="linkedinQr"
            :alt="name + ' LinkedIn QR code'"
            class="w-[140px] h-[140px] sm:w-[120px] sm:h-[120px] border border-slate-light1 rounded-lg object-contain"
          />
          <figcaption class="font-work text-caption font-semibold text-slate uppercase tracking-wider">
            LinkedIn
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center gap-xxs">
          <img
            :src="githubQr"
            :alt="name + ' GitHub QR code'"
            class="w-[140px] h-[140px] sm:w-[120px] sm:h-[120px] border border-slate-light1 rounded-lg object-contain"
          />
          <figcaption class="font-work text-caption font-semibold text-slate uppercase tracking-wider">
            GitHub
          </figcaption>
        </figure>
      </div>

    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name:       { type: String, required: true },
  role:       { type: String, required: true },
  bio:        { type: String, required: true },
  portrait:   { type: String, required: true },
  linkedinQr: { type: String, required: true },
  githubQr:   { type: String, required: true },
  cardIndex:  { type: Number, default: 0 },
})

/*
 * Animation direction alternates: even → from left, odd → from right.
 * The `both` fill-mode in the keyframe animation handles the initial opacity:0
 * and the final resting state, so we only need to set the correct class.
 */
const animClass = computed(() =>
  props.cardIndex % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
)

/*
 * Stagger: each card starts halfway through the previous card's 500ms duration,
 * so the delay increments by 250ms per card.
 */
const delayClass = computed(() => `card-delay-${props.cardIndex}`)
</script>
