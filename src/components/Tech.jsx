import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-col gap-10">
      {technologies.map((category) => (
        <div key={category.category}>
          <h3 className="text-lg font-bold">{category.category}</h3>
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {category.technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
                <p className="text-center">{technology.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};



export default SectionWrapper(Tech, "");
