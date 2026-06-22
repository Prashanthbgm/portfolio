import { motion } from "framer-motion";

function About() {
  const timeline = [
    {
      year: "2021-2024",
      title: "BCA From JSS college",
    },
    {
      year: "2024-2026",
      title: "MCA From RV Institute of Technology",
    },
    {
      year: "Frontend",
      title: "React, React-Native",
    },
    {
      year: "Backend",
      title: "Node.js,Express.js,Django,Flask",
    },
    {
      year: "Programing Language",
      title: "Python,Java,Javascript",
    },
  ];

  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-[#050816]
        text-white
        px-6
        lg:px-12
        py-24
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl
            lg:text-5xl
            font-bold
            text-center
            mb-20
          "
        >
          About Me
        </motion.h2>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              p-8

              bg-white/5
              backdrop-blur-xl

              border
              border-white/10
            "
          >
            <h3 className="text-3xl font-bold mb-6">
              Prashanth M
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Full Stack Engineer focused on FullStack
              Development, AI/ML Integration and
              Intelligent Systems.

              Passionate about building scalable APIs,
              recommendation engines, machine learning
              applications and modern web experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-purple-500/20">
                MERN
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/20">
                Python
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/20">
                AI / ML
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/20">
                Node.js
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/20">
                MongoDB
              </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/20">
                Django
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20">
                Postgresql
              </span>
            </div>

          </motion.div>

          {/* TIMELINE */}

          <div className="space-y-10">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className="
                  flex
                  gap-10
                "
              >

                <div
                  className="
                    min-w-[80px]
                    text-purple-400
                    font-bold
                  "
                >
                  {item.year}
                </div>

                <div
                  className="
                    flex-1
                    border-l
                    border-purple-500/30
                    pl-6
                  "
                >
                  {item.title}
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;