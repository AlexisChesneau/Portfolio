// Vrai si l'utilisateur n'a pas demandé à réduire les animations
// ET utilise un pointeur précis (souris). Sert aux effets qui suivent la souris.
export function canUsePointerEffects() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(
    "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)"
  ).matches;
}
