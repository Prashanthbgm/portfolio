import { useEffect, useMemo, useState } from "react";
import Orbittag from "./orbittags";

import {
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiReact,
  SiMongodb,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";

export default function Floatingtags() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tags = useMemo(() => {
    const scale = isMobile ? 0.65 : 1;
    const size = isMobile ? 45 : 60;

    return [
      { icon: FaBrain, text: "AI / ML", radius: 190 * scale, duration: 20, size },
      { icon: SiPython, text: "Python", radius: 220 * scale, duration: 16, size },
      { icon: SiDjango, text: "Django", radius: 260 * scale, duration: 18, size },
      { icon: SiNodedotjs, text: "Node.js", radius: 240 * scale, duration: 15, size },
      { icon: SiReact, text: "React", radius: 280 * scale, duration: 10, size },
      { icon: SiMongodb, text: "MongoDB", radius: 310 * scale, duration: 22, size },
      { icon: TbApi, text: "REST APIs", radius: 340 * scale, duration: 35, size },
    ];
  }, [isMobile]);

  return (
    <>
      {tags.map((tag) => (
        <Orbittag
          key={tag.text}
          icon={tag.icon}
          text={tag.text}
          radius={tag.radius}
          duration={tag.duration}
          size={tag.size}
        />
      ))}
    </>
  );
}
