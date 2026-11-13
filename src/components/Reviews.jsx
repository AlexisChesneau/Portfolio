import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import message from "../data/review.json";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % message.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="mt-32 relative">
      <div className="flex flex-col items-center">
        <Reveal as="h3" className="text-3xl font-extrabold h3ResponsiveGlobal">
          Temoignages
        </Reveal>
        <Reveal
          as="h2"
          delay={120}
          className="text-5xl text-center py-6 w-[70rem] h2ResponsiveGlobal"
        >
          APPRÉCIATIONS ET RETOURS CLIENTS
        </Reveal>
        <Reveal
          as="p"
          delay={240}
          className="text-lg leading-9 text-center w-[50rem] pResponsiveGlobal"
        >
          Découvrez ce que disent les gens à propos de mes services de
          développement web. Lisez les témoignages de personnes totalement
          ordinaires.
        </Reveal>
        <Reveal as="p" delay={300} className="text-sm text-primaryLight/70 pt-4 text-center">
          (Témoignages humoristiques et fictifs.)
        </Reveal>
        <Reveal
          delay={200}
          id="reviewsCard"
          aria-live="polite"
          className="review-card w-[81.25rem] h-[22.2rem] flex flex-col justify-between items-center bg-white bg-opacity-[4%] rounded-3xl my-[5rem] p-[2.8rem]"
        >
          <div className="quote-badge relative h-[6rem] w-[6rem] bg-[#3FD0BF] flex justify-center items-center rounded-full max-[1200px]:h-[4rem] max-[1200px]:w-[4rem] ">
            <img
              className="max-[1200px]:h-[30px] max-[1200px]:w-[30px] h-[35px]"
              src="images/reviewsweb/DQuote.svg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <p
            key={`message-${index}`}
            className="review-swap text-3xl font-extrabold text-center reviewsClientRexponsive"
          >
            {message[index].message}
          </p>
          <p
            key={`name-${index}`}
            className="review-swap"
            style={{ "--d": "120ms" }}
          >
            - {message[index].name} -
          </p>
        </Reveal>
      </div>
    </section>
  );
}
