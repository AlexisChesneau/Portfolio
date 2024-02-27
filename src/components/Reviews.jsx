import { useEffect, useState } from "react";
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
        <h3 className="text-3xl font-extrabold h3ResponsiveGlobal">
          Temoignages
        </h3>
        <h2 className="text-5xl text-center py-6 w-[70rem] h2ResponsiveGlobal">
          Appreciations et retours clients
        </h2>
        <p className="text-lg leading-9 text-center w-[50rem] pResponsiveGlobal">
          Découvrez ce que disent les gens à propos de mes services de
          développement web. Lisez les témoignages de personnes totalement
          ordinaires.
        </p>
        <div
          id="reviewsCard"
          className="w-[81.25rem] h-[22.2rem] flex flex-col justify-between items-center bg-white bg-opacity-[4%] rounded-3xl my-[5rem] p-[2.8rem]"
        >
          <div className="h-[6rem] w-[6rem] bg-[#3FD0BF] flex justify-center rounded-full max-[1200px]:h-[4rem] max-[1200px]:w-[4rem] max-[1200px]:items-center">
            <img
              className="max-[1200px]:h-[30px] max-[1200px]:w-[30px]"
              src="images/reviewsweb/DQuote.svg"
              alt="DQuaote"
            />
          </div>
          <p className="text-3xl font-extrabold text-center reviewsClientRexponsive">
            {message[index].message}
          </p>
          <p>- {message[index].name} -</p>
        </div>
      </div>
    </section>
  );
}
