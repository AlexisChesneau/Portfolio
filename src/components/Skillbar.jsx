import React from "react";

export default function Skillbar() {
  const skillArray = [
    {
      src: "images/techno/js.svg",
      alt: "JavaScript",
    },
    {
      src: "images/techno/html.svg",
      alt: "HTML",
    },
    {
      src: "images/techno/c++.svg",
      alt: "C++",
    },
    {
      src: "images/techno/php.svg",
      alt: "PHP",
    },
    {
      src: "images/techno/react.svg",
      alt: "React",
    },
  ];

  return (
    <>
      <div className="h-[119px] w-full border-y-white border-y-2 bg-gradient-to-br from-[#330927] from-10% via-[#3FD0BF] via-55% to-[#7E7524] to-90% flex items-center justify-around">
        {skillArray.map((eachSkill, idx) => (
          <img
            className="h-[55px] w-[55px]"
            key={idx}
            src={eachSkill.src}
            alt={eachSkill.alt}
          />
        ))}
      </div>
    </>
  );
}
