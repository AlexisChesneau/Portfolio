import skills from "../data/skills.json";

export default function Skillbar() {
  return (
    <div className="gradientShadow">
      <div className="relative overflow-hidden h-[119px] w-full border-y-white border-y-2 bg-gradient-to-br from-[#330927] from-10% via-[#3FD0BF] via-55% to-[#7E7524] to-90% flex items-center justify-around max-[525px]:h-[100px]">
        <span aria-hidden="true" className="aurora-bar aurora-bar-1" />
        <span aria-hidden="true" className="aurora-bar aurora-bar-2" />
        <span aria-hidden="true" className="aurora-bar aurora-bar-3" />
        <span aria-hidden="true" className="sheen sheen-bar" />
        {skills.map((eachSkill, idx) => (
          <span
            key={idx}
            className="skill-icon relative z-10"
            style={{ "--i": idx }}
          >
            <img
              className="h-[55px] w-[55px] max-[1300px]:h-[48px] max-[1300px]:w-[48px] max-[525px]:h-[38px] max-[525px]:w-[38px]"
              src={eachSkill.src}
              alt={eachSkill.alt}
              decoding="async"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
