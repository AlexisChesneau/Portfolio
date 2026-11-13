import CustomButton from "./CustomButton";
import CircleShadow from "./CircleShadow";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import myProjects from "../data/myProjects.json";

export default function Projet() {
  const noMoreProjects = myProjects.length <= 2;

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
      <Reveal as="h3" className="text-3xl font-extrabold h3ResponsiveGlobal">
        Projets
      </Reveal>
      <Reveal
        as="h2"
        delay={120}
        className="text-5xl text-center py-6 w-[60rem] h2ResponsiveGlobal"
      >
        DU CONCEPT À LA RÉALISATION NUMÉRIQUE
      </Reveal>
      {myProjects.map((project, idx) => (
        <Reveal key={idx} className="relative z-10">
          <a
            href={project.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link block rounded-3xl my-[2.5rem]"
          >
            <TiltCard
              className={`projetCard w-[81.25rem] h-auto flex bg-white bg-opacity-[4%] rounded-3xl p-[2.8rem] ${
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
                className={`project-img h-[100%] rounded-3xl max-[1200px]:h-[400px] max-[1024px]:mt-10 max-[1024px]:m-0 max-[525px]:h-[260px] ${
                  idx % 2 === 1 ? "mr-20" : "ml-20"
                }`}
                src={project.src}
                alt={project.alt}
                loading="lazy"
                decoding="async"
              />
            </TiltCard>
          </a>
        </Reveal>
      ))}
      <Reveal>
        <CustomButton
          custom={noMoreProjects ? "cursor-no-drop" : ""}
          disabled={noMoreProjects}
          string={"Voir tous mes projets"}
          width={"w-[250px]"}
          widthDiv={"w-[252px]"}
        />
      </Reveal>
    </section>
  );
}
