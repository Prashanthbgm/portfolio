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
  return (
    <>
      <Orbittag
        icon={FaBrain}
        text="AI / ML"
        radius={190}
        duration={20}
        size={60}
      />

      <Orbittag
        icon={SiPython}
        text="Python"
        radius={220}
        duration={16}
        size={60}
      />

      <Orbittag
        icon={SiDjango}
        text="Django"
        radius={290}
        duration={18}
        size={60}
      />

      <Orbittag
        icon={SiNodedotjs}
        text="Node.js"
        radius={270}
        duration={15}
        size={60}
      />

      <Orbittag
        icon={SiReact}
        text="React"
        radius={310}
        duration={10}
        size={60}
      />

      <Orbittag
        icon={SiMongodb}
        text="MongoDB"
        radius={340}
        duration={22}
        size={60}
      />

      <Orbittag
        icon={TbApi}
        text="REST APIs"
        radius={370}
        duration={35}
        size={60}
      />
    </>
  );
}