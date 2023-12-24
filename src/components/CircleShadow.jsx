export default function CircleShadow({ qhd, fhd, height, width }) {
  return (
    <>
      <img
        src="images/shadow/circleShadow.svg"
        alt="circleShadow"
        className={` ${qhd} ${fhd} absolute z-0`}
      />
    </>
  );
}
