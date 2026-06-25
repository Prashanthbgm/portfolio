import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/Prash_29.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          relative
          w-[95%]
          max-w-7xl
          px-5
          md:px-8
          py-4
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-lg
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
            text-xl
            md:text-2xl
            font-bold
            text-white
            tracking-wider
          "
        >
          PM
        </a>

        {/* Desktop Navigation */}

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="
                  relative
                  text-gray-300
                  transition-all
                  duration-300
                  hover:text-purple-400
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-purple-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="
            hidden
            md:flex
            items-center
            rounded-xl
            bg-purple-600
            px-5
            py-2.5
            text-white
            font-medium
            transition-all
            duration-300
            hover:scale-105
            hover:bg-purple-500
            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
          "
        >
          Resume
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? (
            <HiX size={30} />
          ) : (
            <HiMenu size={30} />
          )}
        </button>

        {/* Mobile Menu */}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              absolute
              top-20
              left-0
              w-full

              rounded-2xl

              border
              border-white/10

              bg-[#050816]/95
              backdrop-blur-xl

              p-6

              md:hidden
            "
          >
            <ul className="flex flex-col items-center gap-6">

              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="
                      text-lg
                      text-gray-300
                      hover:text-purple-400
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}

              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  bg-purple-600
                  px-6
                  py-3
                  text-white
                  font-medium
                  hover:bg-purple-500
                  transition
                "
              >
                Resume
              </a>

            </ul>
          </motion.div>
        )}

      </motion.nav>
    </header>
  );
}

export default Navbar;