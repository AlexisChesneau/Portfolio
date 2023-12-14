import CustomButton from "./CustomButton";

export default function Profil() {
  return (
    <section>
      <div className="w-full h-[1px] bg-white absolute top-[41%] opacity-60"></div>
      <div className="w-[1px] h-[51.4rem] bg-white absolute left-[62%] opacity-60"></div>
      <header className="flex items-center justify-between pt-12 px-24">
        <h3 className="text-5xl">PortFolio</h3>
        <CustomButton string={"Contact"} width={"w-[165px]"} />
      </header>
      <div className="leading-10 flex justify-center">
        <div className="h-[700px] flex flex-col items-start justify-evenly pb-16">
          <h1 className="text-8xl">CHESNEAU</h1>
          <h3 className="leading-10 text-8xl pb-16">ALEXIS</h3>
          <p className="text-[22px]">
            Hello, I'm Alexis Chesneau, a passionate web <br /> developer
            dedicated to transforming ideas into <br /> dynamic digital
            experiences. With a keen eye for <br /> design and expertise in
            coding, I craft websites <br /> that leave a lasting impression
          </p>
          <CustomButton string={"Contact"} width={"w-[165px]"} />
        </div>
        <div className="flex h-[700px] items-end">
          <div className="h-[541px] w-[634px] bg-gradient-to-br from-[#330927] from-10% via-[#3FD0BF] via-55% to-[#7E7524] to-90% opacity-90 z-10"></div>
        </div>
      </div>
    </section>
  );
}
