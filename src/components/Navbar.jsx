import { motion } from "framer-motion";
import resume from "../assets/Prash_29.pdf"

function Navbar() {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    // "Experience",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          w-[90%]
          max-w-7xl
          px-8
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
            text-2xl
            font-bold
            text-white
            tracking-wider
          "
        >
          PM
        </a>

        {/* Nav Links */}

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

        {/* Resume Button */}

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

        {/* Mobile Button */}

        <button
          className="
            md:hidden
            flex
            flex-col
            gap-1
          "
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </motion.nav>
    </header>
  );
}

export default Navbar;