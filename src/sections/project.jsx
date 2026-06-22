import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Agrishayak",
      description:
        "AI-powered agriculture platform that helps farmers make data-driven decisions using crop recommendation, disease detection and market intelligence.",

      features: [
        "Crop Recommendation System",
        "Plant Disease Detection",
        "Mandi Market Prices",
        "Weather Integration",
        "Machine Learning Models",
      ],

      tech: [
        "React",
        "Flask",
        "Python",
        "TensorFlow",
        "MongoDB",
      ],
    },

    {
      title: "BlinkSit",
      description:
        "Quick-commerce grocery delivery platform inspired by Blinkit, providing product discovery, cart management, admin control and order processing.",

      features: [
        "Product Management",
        "Shopping Cart",
        "Admin Dashboard",
        "Order Management",
        "Location-Based Delivery",
      ],

      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
    },
  ];

  return (
    <section
      id="projects"
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

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            text-5xl
            font-bold
            mb-20
          "
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              }}
              className="
                grid
                lg:grid-cols-2
                gap-10

                rounded-3xl
                p-8

                bg-white/5
                backdrop-blur-xl

                border
                border-white/10

                hover:border-purple-500/40

                transition-all
              "
            >
              {/* Image Side */}

              <div
                className="
                  h-[300px]
                  rounded-2xl

                  bg-gradient-to-br
                  from-purple-500/20
                  to-blue-500/20

                  flex
                  items-center
                  justify-center

                  text-gray-400
                "
              >
                Project Screenshot
              </div>

              {/* Content */}

              <div>

                <h3
                  className="
                    text-4xl
                    font-bold
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-300
                    leading-relaxed
                    mb-6
                  "
                >
                  {project.description}
                </p>

                {/* Features */}

                <div className="mb-6">

                  <h4
                    className="
                      text-purple-400
                      mb-3
                      font-semibold
                    "
                  >
                    Key Features
                  </h4>

                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-gray-400"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Tech Stack */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2

                        rounded-full

                        bg-purple-500/10

                        border
                        border-purple-500/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;