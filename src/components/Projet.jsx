import CustomButton from "./CustomButton";
import CircleShadow from "./CircleShadow";
import myProjects from "../data/myProjects.json";

export default function Projet() {
  return (
    <section className="flex flex-col items-center mt-32 relative">
      <CircleShadow
        fhd={"max-[1920px]:top-[-10%] max-[1920px]:left-[-23%]"}
        qhd={"top-[-10%] left-[-15%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[-10%] max-[1920px]:left-[70%]"}
        qhd={"top-[-10%] left-[70%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[17%] max-[1920px]:left-[70%]"}
        qhd={"top-[17%] left-[70%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[72%] max-[1920px]:left-[70%]"}
        qhd={"top-[72%] left-[70%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[33%] max-[1920px]:left-[-20%]"}
        qhd={"top-[33%] left-[-7%]"}
      />
      <CircleShadow
        fhd={"max-[1920px]:top-[80%] max-[1920px]:left-[-25%]"}
        qhd={"top-[80%] left-[-25%]"}
      />
      <h3 className="text-3xl font-extrabold h3ResponsiveGlobal">Projets</h3>
      <h2 className="text-5xl text-center py-6 w-[60rem] h2ResponsiveGlobal">
        Transforme mes idees en projets numeriques
      </h2>
      {myProjects.map((project, idx) => (
        <a href={project.lien} target="_blank">
          <div
            id="projetCard"
            key={idx}
            className={`w-[81.25rem] h-[35rem] flex bg-white bg-opacity-[4%] rounded-3xl my-[2.5rem] p-[2.8rem] transform transition-transform duration-500 ease-in-out hover:scale-102 ${
              idx % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold">{project.title}</h3>
              <p className="text-lg leading-9 py-10 pProjetResponsive">
                {project.description}
              </p>
              <p className="border-[1px] rounded-full mr-auto px-4 py-1 dateProjetResponsive">
                {project.date}
              </p>
            </div>
            <img
              className={`h-[100%] rounded-3xl max-[1200px]:h-[400px] max-[1024px]:mt-10 max-[1024px]:m-0 max-[525px]:h-[260px] ${
                idx % 2 === 1 ? "mr-20" : "ml-20"
              }`}
              src={project.src}
              alt={project.alt}
            />
          </div>
        </a>
      ))}
      <CustomButton
        custom={myProjects.length <= 2 ? "cursor-no-drop" : ""}
        string={"Voir tous mes projets"}
        width={"w-[250px]"}
        widthDiv={"w-[252px]"}
      />
    </section>
  );
}
