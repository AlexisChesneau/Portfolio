import reseaux from "../data/reseaux.json";

export default function Footer() {
  return (
    <footer className="mt-32 relative">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl text-center w-[55rem]">
          Interested in work together
        </h2>
        <p className="py-10">Drop an Email</p>
        <p className="border-2 py-4 px-16 rounded-full">
          alexischesneau64@gmail.com
        </p>
      </div>
      <div className="h-[1px] w-full bg-white mt-[8rem]"></div>
      <div className="flex items-center">
        <div className="h-[8.5rem] w-full flex items-center justify-between px-24">
          <div>
            <p>© 2023 Alexis Chesneau. All rights reserved</p>
          </div>
          <div className="flex gap-14">
            {reseaux.map((reseau, idx) => (
              <div key={idx}>
                <img
                  className="border-2 p-2 rounded-full w-[50px] h-[50px]"
                  src={reseau.src}
                  alt={reseau.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
