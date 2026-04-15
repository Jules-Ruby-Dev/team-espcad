/**
 * Card load animation constants.
 * Tweak these values to adjust the team-card entrance animation behaviour.
 */

/** Total duration of each card's entrance animation (ms). */
export const CARD_ANIM_DURATION_MS = 400

/**
 * Delay between each successive card's animation start (ms).
 * Set to 50% of duration so each card begins halfway through the previous
 * card's animation (stagger overlap = 50%).
 */
export const CARD_ANIM_STAGGER_MS = 200

/** CSS easing function applied to both translate and opacity transitions. */
export const CARD_ANIM_EASING = 'ease-in'

/**
 * Horizontal travel distance for the desktop/tablet slide-in (viewport-width units).
 * Card 1 starts CARD_ANIM_TRANSLATE_VW vw to the left; card 2 to the right; etc.
 * Mobile (< 640px): translate is disabled – opacity-only fade-in is used instead.
 */
export const CARD_ANIM_TRANSLATE_VW = 55
