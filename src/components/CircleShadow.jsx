export default function CircleShadow({ qhd, fhd, xl, lg, md, sm }) {
  return (
    <>
      <img
        src="images/shadow/circleShadow.svg"
        alt="circleShadow"
        className={` ${qhd} ${fhd} ${xl} ${lg} ${md} ${sm} absolute z-0`}
      />
    </>
  );
}
