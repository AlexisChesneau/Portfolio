import reseaux from "../data/reseaux.json";

export default function Footer() {
  return (
    <footer className="mt-32 relative">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl text-center w-[55rem] h2ResponsiveGlobal">
          INTÉRESSÉ POUR TRAVAILLER ENSEMBLE ?
        </h2>
        <p className="py-10">Envoyer un mail</p>
        <a href="mailto:chesneaualexis64@gmail.com">
          <p className="border-2 py-4 px-16 rounded-full max-[720px]:px-8 transform transition-transform duration-500 ease-in-out hover:scale-105">
            chesneaualexis64@gmail.com
          </p>
        </a>
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
              <a href={reseau.lien} target="_blank">
                <div
                  key={idx}
                  className="flex items-center justify-center border-2 p-2 rounded-full w-[50px] h-[50px] max-[720px]:h-[40px] max-[720px]:w-[40px] transform transition-transform duration-500 ease-in-out hover:scale-125"
                >
                  <img src={reseau.src} alt={reseau.alt} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
