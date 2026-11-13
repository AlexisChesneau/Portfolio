/**
 * Bouton pilule : face sombre bordée de blanc posée sur un socle en dégradé
 * (bordeaux → turquoise → olive) qui dépasse de 7px en bas.
 * - survol : la face s'élève, le dégradé glisse et un halo apparaît
 * - clic : la face s'enfonce et recouvre le socle (comme l'ancien effet)
 * Avec `href`, rend un vrai lien <a> (plus de <button> imbriqué dans un <a>).
 */
export default function CustomButton({
  string,
  widthDiv,
  width,
  custom = "",
  href,
  disabled = false,
  ...rest
}) {
  const content = (
    <>
      <span aria-hidden="true" className="cbtn-glow" />
      <span aria-hidden="true" className="cbtn-base" />
      <span className={`cbtn-face ${width} ${custom}`}>{string}</span>
    </>
  );

  const classes = `cbtn ${widthDiv}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
