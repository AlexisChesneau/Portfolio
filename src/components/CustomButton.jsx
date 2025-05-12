import { useState } from "react";

export default function CustomButton({ string, widthDiv, width, custom }) {
  const [isClicked, setIsClicked] = useState(false);
  setTimeout(() => {
    setIsClicked(false);
  }, [100]);
  return (
    <div className="flex justify-end">
      <div
        className={`${
          isClicked ? "mt-[7px]" : "h-[72px]"
        } ${widthDiv} rounded-full bg-gradient-to-br from-[#331D09] from-10% via-[#3FD0BF] via-55% to-[#7E7524] to-90% transform transition-transform duration-500 ease-in-out hover:scale-105`}
      >
        <button
          className={`${width} h-[65px] border-2 rounded-full text-lg bg-[#15041D] ${custom}`}
          onClick={() => setIsClicked(true)}
        >
          {string}
        </button>
      </div>
    </div>
  );
}
