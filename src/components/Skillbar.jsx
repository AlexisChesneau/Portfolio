import skills from "../data/skills.json";

export default function Skillbar() {
  return (
    <div className="gradientShadow">
      <div className="h-[119px] w-full border-y-white border-y-2 bg-gradient-to-br from-[#330927] from-10% via-[#3FD0BF] via-55% to-[#7E7524] to-90% flex items-center justify-around max-[525px]:h-[100px]">
        {skills.map((eachSkill, idx) => (
          <img
            className="h-[55px] w-[55px] max-[1300px]:h-[48px] max-[1300px]:w-[48px] max-[525px]:h-[38px] max-[525px]:w-[38px]"
            key={idx}
            src={eachSkill.src}
            alt={eachSkill.alt}
          />
        ))}
      </div>
    </div>
  );
}
