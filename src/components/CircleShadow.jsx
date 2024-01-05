export default function CircleShadow({ qhd, fhd, xl }) {
  return (
    <>
      <img
        src="images/shadow/circleShadow.svg"
        alt="circleShadow"
        className={` ${qhd} ${fhd} ${xl} absolute z-0`}
      />
    </>
  );
}
