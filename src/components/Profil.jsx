import { useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import CircleShadow from "./CircleShadow";
import SplitText from "./SplitText";
import { canUsePointerEffects } from "../hooks/useMotionOK";

export default function Profil() {
  const heroRef = useRef(null);
  const spotRef = useRef(null);

  // Lumière douce qui suit la souris sur le hero (souris uniquement).
  useEffect(() => {
    const hero = heroRef.current;
    const spot = spotRef.current;
    if (!hero || !spot || !canUsePointerEffects()) return undefined;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;
    let active = false;

    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      spot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame =
        Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5
          ? requestAnimationFrame(loop)
          : 0;
    };
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      if (!active) {
        active = true;
        x = tx;
        y = ty;
        spot.classList.add("is-active");
      }
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      active = false;
      spot.classList.remove("is-active");
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative">
      <div className="w-[1px] h-[48.8rem] bg-white absolute left-[58%] max-[1920px]:left-[58%] opacity-60 lgHidden line-draw-y"></div>
      <div className="w-full h-[1px] bg-white absolute top-[44%] opacity-60 max-[1920px]:top-[44%] max-[1536px]:top-[42%] max-[1200px]:top-[42%] lgHidden line-draw-x"></div>
      <CircleShadow
        xl={"max-[1280px]:top-[-20%] max-[1280px]:left-[-35%]"}
        fhd={"max-[1920px]:top-[-20%] max-[1920px]:left-[-20%]"}
        qhd={"top-[-20%] left-[-5%]"}
      />
      <CircleShadow
        xl={"max-[1280px]:top-[0%] max-[1280px]:left-[20%]"}
        fhd={"max-[1920px]:top-[-2%] max-[1920px]:left-[36%]"}
        qhd={"top-[-5%] left-[37%]"}
      />
      <CircleShadow
        xl={"max-[1280px]:top-[-60%]  max-[1280px]:left-[35%]"}
        fhd={"max-[1920px]:top-[-70%] max-[1920px]:left-[47%]"}
        qhd={"top-[-80%] left-[48%]"}
      />
      <div ref={spotRef} aria-hidden="true" className="hero-spotlight" />
      <div className="leading-10 flex justify-center pt-[80px] containerProfilResponsive">
        <div className="h-[700px] flex flex-col items-start justify-evenly pb-16 max-[1200px]:w-[25.25rem] max-[1024px]:items-center">
          <h1 className="text-8xl lastNameResponsive">
            <SplitText text="CHESNEAU" baseDelay={150} step={55} />
          </h1>
          <h3 className="leading-10 text-8xl pb-16 firstNameResponsive">
            <SplitText text="ALEXIS" baseDelay={520} step={55} />
          </h3>
          <p
            className="text-[22px] w-[31.25rem] pProfilResponsive enter-up"
            style={{ "--d": "900ms" }}
          >
            Bienvenue sur ce portfolio où je stocke et partage mes différents
            projets. Je suis passionné par l&apos;informatique et le
            développement web. N&apos;hésitez pas à me contacter si vous avez
            des questions.
          </p>
          <div className="enter-up" style={{ "--d": "1100ms" }}>
            <CustomButton
              href="https://www.linkedin.com/in/alexis-chesneau-0951b4243/"
              target="_blank"
              rel="noopener noreferrer"
              string={"Contact"}
              width={"w-[165px]"}
              widthDiv={"w-[167px]"}
            />
          </div>
        </div>
        <div className="flex h-[700px] items-end lgHidden relative">
          <img
            className="absolute z-20 h-[700px] max-[1280px]:h-[620px] hero-photo"
            src="images/pictureProfil.png"
            alt="Photo d'Alexis Chesneau"
          />
          <div className="relative overflow-hidden h-[541px] w-[634px] bg-gradient-to-br from-[#330927] from-10% via-[#3FD0BF] via-55% to-[#7E7524] to-90% opacity-90 z-10 max-[1280px]:h-[500px] max-[1280px]:w-[540px] hero-panel">
            <span aria-hidden="true" className="aurora aurora-bordeaux" />
            <span aria-hidden="true" className="aurora aurora-teal" />
            <span aria-hidden="true" className="aurora aurora-olive" />
            <span aria-hidden="true" className="sheen" />
          </div>
        </div>
      </div>
    </section>
  );
}
