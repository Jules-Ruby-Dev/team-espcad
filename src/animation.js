/**
 * Card animation constants – tweak these to adjust the entrance animation.
 *
 * CARD_ANIM_DURATION_MS  – how long each card's animation runs (ms).
 * CARD_ANIM_OVERLAP      – fraction of duration that the next card starts before
 *                          the previous one finishes (0 = fully sequential,
 *                          1 = all start at the same time).
 * CARD_ANIM_EASING       – CSS timing function applied to each card animation.
 */
export const CARD_ANIM_DURATION_MS = 400
export const CARD_ANIM_OVERLAP     = 0.5
export const CARD_ANIM_STAGGER_MS  = CARD_ANIM_DURATION_MS * (1 - CARD_ANIM_OVERLAP)  // 200ms
export const CARD_ANIM_EASING      = 'cubic-bezier(0.4, 0, 1, 1)'                     // ease-in
