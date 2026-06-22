import { motion } from "framer-motion";

import {
  SiReact,
//   SiReactNative,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";

import { FaJava, FaBrain } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <SiReact size={28} />,
      items: [
        { name: "React", icon: <SiReact /> },
        // { name: "React Native", icon: <SiReactnative /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },

    {
      category: "Backend",
      icon: <SiNodedotjs size={28} />,
      items: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Flask", icon: <SiFlask /> },
      ],
    },

    {
      category: "AI / ML",
      icon: <FaBrain size={28} />,
      items: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "CNN" },
        { name: "Deep Learning" },
      ],
    },

    {
      category: "Languages",
      icon: <SiPython size={28} />,
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },

    {
      category: "Database",
      icon: <SiMongodb size={28} />,
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-[#050816]
        text-white
        py-24
        px-6
        lg:px-12
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            text-5xl
            font-bold
            mb-6
          "
        >
          Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            text-center
            text-gray-400
            max-w-2xl
            mx-auto
            mb-20
          "
        >
          Building scalable web applications,
          intelligent systems, APIs, and mobile
          experiences using modern technologies.
        </motion.p>

        {/* Grid */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group

                p-6
                rounded-3xl

                bg-white/5
                backdrop-blur-xl

                border
                border-white/10

                hover:border-purple-500/50

                transition-all
                duration-300

                hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
              "
            >
              <div className="flex items-center gap-3 mb-6">

                <div className="text-purple-400">
                  {group.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {group.category}
                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-2

                      px-4
                      py-2

                      rounded-full

                      bg-purple-500/10

                      border
                      border-purple-500/20

                      hover:border-purple-400

                      transition-all
                      duration-300
                    "
                  >
                    {skill.icon}

                    <span>
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;