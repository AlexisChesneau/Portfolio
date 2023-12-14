export default function Footer() {
  const reseaux = [
    {
      src: "images/reseau/facebook.svg",
      alt: "facebook",
    },
    {
      src: "images/reseau/instagram.svg",
      alt: "instagram.",
    },
    {
      src: "images/reseau/twitter.svg",
      alt: "twitter",
    },
  ];

  return (
    <footer className="mt-32">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl text-center">
          Interested in work <br /> together
        </h2>
        <p className="py-10">Drop an Email</p>
        <p className="border-2 py-4 px-16 rounded-full">
          alexischesneau64@gmail.com
        </p>
      </div>
      <div className="h-[1px] w-full bg-white mt-[8rem]"></div>
      <div className="flex items-center">
        <div className="h-[8.5rem] flex items-center">
          <p>© 2023 Alexis Chesneau. All rights reserved</p>
        </div>
        {reseaux.map((reseau, idx) => (
          <div key={idx}>
            <img src={reseau.src} alt={reseau.alt} />
          </div>
        ))}
      </div>
    </footer>
  );
}
