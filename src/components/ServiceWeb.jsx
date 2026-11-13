import CircleShadow from "./CircleShadow";
import Reveal from "./Reveal";
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
        <Reveal
          as="h3"
          className="leading-10 text-3xl font-extrabold h3ResponsiveGlobal"
        >
          Expérience Web Developpement
        </Reveal>
        <Reveal
          as="h2"
          delay={120}
          className="text-5xl py-6 w-[75rem] h2ResponsiveGlobal"
        >
          MES DIFFERENTES EXPERIENCES EN DEVELOPPEMENT WEB
        </Reveal>
      </div>
      <div id="skillCard" className="flex gap-[2%] justify-center py-8">
        {skillServiceArray.map((eachService, skillidx) => (
          <Reveal
            key={skillidx}
            delay={skillidx * 140}
            className="skillElement h-[22.188rem] w-[25rem]"
          >
            <div className="service-card h-full w-full bg-white bg-opacity-[4%] rounded-3xl flex flex-col justify-evenly px-8">
              <div className="relative h-20 w-20 rounded-full flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="service-ring absolute inset-0 rounded-full bg-gradient-to-b from-teal-300 via-yellow-500 to-purple-800"
                />
                <div className="relative h-[4.8rem] w-[4.8rem] flex items-center justify-center rounded-full bg-[#1e0e26]">
                  <img
                    className="h-11 w-11"
                    src={eachService.src}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                  />
                </div>
              </div>
              <div>
                <h3 className="w-[280px] max-w-full leading-7 text-[1.25rem] font-bold pb-3 max-[1200px]:leading-7">
                  {eachService.title}
                </h3>
                <p className="h-[75px]">{eachService.description}</p>
              </div>
              <div className="flex">
                {eachService.tag.map((eachTag, tagidx) => (
                  <div
                    key={`${skillidx}-tag-${tagidx}`}
                    className="service-tag flex border-[1px] rounded-full py-1 px-4 justify-center mr-2"
                  >
                    <p className="text-sm">{eachTag}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ServiceWeb;
