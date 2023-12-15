import CustomButton from "./CustomButton";
import myProjects from "../data/myProjects.json";

export default function Projet() {
  return (
    <section className="flex flex-col items-center mt-32">
      <h3 className="text-3xl font-extrabold">Projets</h3>
      <h2 className="text-5xl text-center py-6">
        Transforming visions <br /> into digital excellence
      </h2>
      {myProjects.map((project, idx) => (
        <div
          key={idx}
          className={`w-[81.25rem] h-[35rem] flex bg-white bg-opacity-[4%] rounded-3xl my-[2.5rem] p-[2.8rem] ${
            idx % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col justify-end">
            <h3 className="text-3xl font-extrabold">{project.title}</h3>
            <p className="text-lg leading-9 py-4">{project.description}</p>
            <p className="pt-32">{project.date}</p>
          </div>
          <img
            className={`w-[40rem] h-[30rem] rounded-3xl ${
              idx % 2 === 1 ? "mr-20" : "ml-20"
            }`}
            src={project.src}
            alt={project.alt}
          />
        </div>
      ))}
      <CustomButton
        string={"View All Projects"}
        width={"w-[216px]"}
        widthDiv={"w-[218px]"}
      />
    </section>
  );
}
