/**
 * Affiche un texte lettre par lettre (animation CSS `split-char`).
 * Le texte complet reste lisible par les lecteurs d'écran via le span sr-only,
 * les lettres animées sont masquées pour eux (aria-hidden).
 */
export default function SplitText({ text, baseDelay = 0, step = 50 }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            className="split-char"
            style={{ "--d": `${baseDelay + i * step}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    </>
  );
}
