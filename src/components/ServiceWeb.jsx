import CustomButton from "./CustomButton";

function ServiceWeb() {
  const skillServiceArray = [
    {
      src: "images/serviceweb/desktop.svg",
      alt: "JavaScript",
      title: "Web Development Services",
      description:
        "Creating visually appealing and user-friendly designs for optimal user engagement.",
      tag: ["UI/UX Design"],
    },
    {
      src: "images/serviceweb/brackets.svg",
      alt: "JavaScript",
      title: "Wordpress Development",
      description:
        "Designing and developing interactive applications accessible through web browsers.",
      tag: ["Optimization", "Funtionality"],
    },
    {
      src: "images/serviceweb/rocket.svg",
      alt: "JavaScript",
      title: "Promotion",
      description:
        "Integrating social media features to boost online presence and engagement.",
      tag: ["UI/UX Design"],
    },
  ];

  return (
    <section className="mt-32">
      <div className="flex flex-col text-center">
        <h3 className="leading-10 text-3xl font-extrabold">
          Web Development Services
        </h3>
        <h1 className="text-5xl py-6">
          TRANSFORME VISIONS
          <br />
          INTO DIGITAL EXCELLENCE
        </h1>
        <p className="text-lg leading-9">
          We specialize in creating seamless, visually stunning websites
          tailored to your unique vision <br /> and goals.
        </p>
      </div>
      <div className="flex gap-[2%] justify-center py-8">
        {skillServiceArray.map((eachService, skillidx) => (
          <div
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
              <h3 className="text-lg font-bold">{eachService.title}</h3>
              <p>{eachService.description}</p>
            </div>
            <div className="flex">
              {eachService.tag.map((eachTag, tagidx) => (
                <div
                  key={`${skillidx}-tag-${tagidx}`}
                  className="flex border-[1px] rounded-full w-40 py-1 justify-center"
                >
                  <p className="">{eachTag}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <CustomButton string={"Explore My Work"} width={"w-[200px]"} />
      </div>
    </section>
  );
}

export default ServiceWeb;
