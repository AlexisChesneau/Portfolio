import CircleShadow from "./CircleShadow";
import skillServiceArray from "../data/skillServiceArray.json";

function ServiceWeb() {
  return (
    <section className="mt-32 relative">
      <CircleShadow
        fhd={"max-[1920px]:top-[-20%] max-[1920px]:left-[-15%]"}
        qhd={"top-[-20%] left-[-15%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[-50%] max-[1920px]:left-[65%]"}
        qhd={"top-[-50%] left-[75%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[50%] max-[1920px]:left-[1%]"}
        qhd={"top-[50%] left-[5%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[50%] max-[1920px]:left-[50%]"}
        qhd={"top-[45%] left-[55%]"}
      />
      <div className="flex flex-col text-center items-center">
        <h3 className="leading-10 text-3xl font-extrabold h3ResponsiveGlobal">
          Expérience Web Developpement
        </h3>
        <h2 className="text-5xl py-6 w-[75rem] h2ResponsiveGlobal">
          MES DIFFERENTES EXPERIENCES EN DEVELOPPEMENT WEB
        </h2>
        {/* <p className="text-lg leading-9 w-[54rem] pResponsiveGlobal">
          We specialize in creating seamless, visually stunning websites
          tailored to your unique vision and goals.
        </p> */}
      </div>
      <div id="skillCard" className="flex gap-[2%] justify-center py-8">
        {skillServiceArray.map((eachService, skillidx) => (
          <div
            id="skillElement"
            className="h-[22.188rem] w-[25rem] bg-white bg-opacity-[4%] rounded-3xl flex flex-col justify-evenly px-8"
            key={skillidx}
          >
            <div className="h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-b from-teal-300 via-yellow-500 to-purple-800">
              <div className="h-[4.8rem] w-[4.8rem] flex items-center justify-center rounded-full bg-[#1e0e26]">
                <img
                  className="h-11 w-11"
                  src={eachService.src}
                  alt={eachService.alt}
                />
              </div>
            </div>
            <div>
              <h3 className="w-[280px] leading-7 text-[1.25rem] font-bold pb-3 max-[1200px]:leading-7">
                {eachService.title}
              </h3>
              <p className="h-[75px]">{eachService.description}</p>
            </div>
            <div className="flex">
              {eachService.tag.map((eachTag, tagidx) => (
                <div
                  key={`${skillidx}-tag-${tagidx}`}
                  className="flex border-[1px] rounded-full py-1 px-4 justify-center mr-2"
                >
                  <p className="text-sm">{eachTag}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceWeb;
