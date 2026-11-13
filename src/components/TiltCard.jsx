import { useEffect, useRef } from "react";
import { canUsePointerEffects } from "../hooks/useMotionOK";

const MAX_TILT = 5; // degrés

/**
 * Carte avec léger effet 3D (tilt) et halo lumineux qui suit la souris.
 * Désactivé au tactile et si l'utilisateur préfère réduire les animations :
 * il reste alors l'élévation + le halo au survol (CSS).
 */
export default function TiltCard({ className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canUsePointerEffects()) return undefined;

    let frame = 0;
    let last = null;

    const apply = () => {
      frame = 0;
      if (!last) return;
      const rect = el.getBoundingClientRect();
      const px = (last.clientX - rect.left) / rect.width; // 0 → 1
      const py = (last.clientY - rect.top) / rect.height;
      el.style.setProperty("--ry", `${(px - 0.5) * 2 * MAX_TILT}deg`);
      el.style.setProperty("--rx", `${(0.5 - py) * 2 * MAX_TILT}deg`);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    };

    const onMove = (e) => {
      last = e;
      el.classList.add("is-tilting");
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      last = null;
      el.classList.remove("is-tilting");
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`tilt-card ${className}`} {...rest}>
      {children}
    </div>
  );
}
