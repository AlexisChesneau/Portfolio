// Halo lumineux décoratif (flou bordeaux / turquoise / olive) qui dérive lentement.
export default function CircleShadow({ qhd = "", fhd = "", xl = "" }) {
  return (
    <img
      src="images/shadow/circleShadow.svg"
      alt=""
      aria-hidden="true"
      decoding="async"
      className={`${qhd} ${fhd} ${xl} absolute z-0 pointer-events-none blob-drift`}
    />
  );
}
