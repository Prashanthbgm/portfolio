import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer
      id="contact"
      className="
        bg-[#050816]
        text-white
        px-6
        lg:px-12
        py-20
      "
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
            text-4xl
            font-bold
            text-center
            mb-4
          "
        >
          Let's Connect
        </h2>

        <p
          className="
            text-center
            text-gray-400
            mb-12
          "
        >
          Open to internships, freelance work,
          collaborations and exciting opportunities.
        </p>

        {/* Social Links */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-6
            mb-12
          "
        >

          <a
            href="https://github.com/Prashanthbgm"
            target="_blank"
            rel="noreferrer"
            className="
              p-4
              rounded-full

              bg-white/5

              hover:bg-purple-500/20

              transition-all
            "
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="
              p-4
              rounded-full

              bg-white/5

              hover:bg-purple-500/20

              transition-all
            "
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noreferrer"
            className="
              p-4
              rounded-full

              bg-white/5

              hover:bg-purple-500/20

              transition-all
            "
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="tel:+916360849260"
            className="
              p-4
              rounded-full

              bg-white/5

              hover:bg-purple-500/20

              transition-all
            "
          >
            <FaPhone size={24} />
          </a>

          <a
            href="mailto:prashanthbmy2@gmail.com"
            className="
              p-4
              rounded-full

              bg-white/5

              hover:bg-purple-500/20

              transition-all
            "
          >
            <MdEmail size={24} />
          </a>

        </div>

        {/* Details */}

        <div
          className="
            text-center
            text-gray-400
            space-y-2
          "
        >
          <p>
            📧 prashanthbmy2@gmail.com
          </p>

          <p>
             +91 63608 49260
          </p>

          <p>
            Mysuru-Bengaluru, Karnataka, India
          </p>
        </div>

        {/* Bottom Line */}

        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            text-center
            text-gray-500
          "
        >
          © 2026 Prashanth M • Built with React,
          Tailwind CSS, Framer Motion & Three.js
        </div>

      </div>
    </footer>
  );
}

export default Footer;