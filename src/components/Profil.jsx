import CustomButton from "./CustomButton";
import CircleShadow from "./CircleShadow";

export default function Profil() {
  return (
    <section className="relative">
      <div className="w-[1px] h-[48.8rem] bg-white absolute left-[58%] max-[1920px]:left-[58%] opacity-60 lgHidden"></div>
      <div className="w-full h-[1px] bg-white absolute top-[44%] opacity-60 max-[1920px]:top-[44%] max-[1536px]:top-[40%] max-[1200px]:top-[39%] lgHidden"></div>
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
      <div className="leading-10 flex justify-center pt-[80px] containerProfilResponsive">
        <div className="h-[700px] flex flex-col items-start justify-evenly pb-16 max-[1200px]:w-[25.25rem] max-[1024px]:items-center">
          <h1 className="text-8xl lastNameResponsive">CHESNEAU</h1>
          <h3 className="leading-10 text-8xl pb-16 firstNameResponsive">
            ALEXIS
          </h3>
          <p className="text-[22px] w-[31.25rem] pProfilResponsive">
            Hello, I'm Alexis Chesneau, a passionate web developer dedicated to
            transforming ideas into dynamic digital experiences. With a keen eye
            for design and expertise in coding, I craft websites that leave a
            lasting impression
          </p>
          <CustomButton
            string={"Contact"}
            width={"w-[165px]"}
            widthDiv={"w-[167px]"}
          />
        </div>
        <div className="flex h-[700px] items-end lgHidden relative">
          <img
            className="absolute z-20 h-[700px] max-[1280px]:h-[620px]"
            src="images/pictureProfil.png"
            alt=""
          />
          <div className="h-[541px] w-[634px] bg-gradient-to-br from-[#330927] from-10% via-[#3FD0BF] via-55% to-[#7E7524] to-90% opacity-90 z-10 max-[1280px]:h-[500px] max-[1280px]:w-[540px]"></div>
        </div>
      </div>
    </section>
  );
}
