import CustomButton from "./CustomButton";

export default function Projet() {
  const myProjects = [
    {
      src: "images/projet/project1.png",
      alt: "images project 1",
      title: "E-Commerce Bliss",
      description:
        "Crafted a dynamic e-commerce platform for seamless online shopping, enhancing user experience with intuitive design and secure transactions.",
      date: "March 2022 - June 2022",
    },
    {
      src: "images/projet/project2.png",
      alt: "images project 2",
      title: "SocialHub Connect",
      description:
        "Developed a social media integration platform, empowering clients to enhance online presence through unified social engagement tools.",
      date: "September 2021 - December 2021",
    },
    {
      src: "images/projet/project3.png",
      alt: "images project 3",
      title: "Responsive Portfolio Revamp",
      description:
        "Transformed a personal portfolio website into a mobile-responsive showcase, optimizing user engagement and visual appeal.",
      date: "January 2023 - March 2023",
    },
  ];

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
      <CustomButton string={"View All Projects"} width={"w-[13.5rem]"} />
    </section>
  );
}

//
