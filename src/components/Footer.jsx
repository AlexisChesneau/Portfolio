import Reveal from "./Reveal";
import reseaux from "../data/reseaux.json";

export default function Footer() {
  return (
    <footer className="mt-32 relative">
      <div className="flex flex-col items-center">
        <Reveal
          as="h2"
          className="text-5xl text-center w-[55rem] h2ResponsiveGlobal"
        >
          INTÉRESSÉ POUR TRAVAILLER ENSEMBLE ?
        </Reveal>
        <Reveal as="p" delay={120} className="py-10">
          Envoyer un mail
        </Reveal>
        <Reveal delay={220}>
          <a
            href="mailto:chesneaualexis64@gmail.com"
            className="email-pill block rounded-full"
          >
            <p className="border-2 py-4 px-16 rounded-full max-[720px]:px-8 select-text">
              chesneaualexis64@gmail.com
            </p>
          </a>
        </Reveal>
      </div>
      <div className="h-[1px] w-full bg-white mt-[8rem]"></div>
      <div className="flex items-center">
        <div
          id="contrainerSocialNetwork"
          className="h-[8.5rem] w-full flex items-center justify-between px-24"
        >
          <div>
            <p className="max-[720px]:text-[0.8rem]">
              © 2023 Alexis Chesneau. All rights reserved
            </p>
          </div>
          <div className="flex gap-14 max-[1024px]:gap-4 max-[525px]:gap-8">
            {reseaux.map((reseau, idx) => (
              <Reveal
                as="a"
                key={idx}
                delay={idx * 100}
                href={reseau.lien}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={reseau.alt}
                className="social-link rounded-full"
              >
                <div className="social-icon flex items-center justify-center border-2 p-2 rounded-full w-[50px] h-[50px] max-[720px]:h-[40px] max-[720px]:w-[40px]">
                  <img src={reseau.src} alt="" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
