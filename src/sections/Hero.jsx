import Navbar from "../components/Navbar";
import Globe from "../components/Globe";
// import Floatingtags from "../components/FloatingTags";
import resume from "../assets/Prash_29.pdf"
import Floatingtags from "../components/FloatingTags"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <Navbar />

        <div
          className="
            mt-16
            grid
            lg:grid-cols-2
            items-center
            min-h-[85vh]
            gap-20
          "
        >

          {/* LEFT SIDE */}

          <div className="space-y-5">

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-purple-500/30
                bg-purple-500/10
                px-5
                py-2
                text-sm
                text-purple-300
              "
            >
              AI • BACKEND • FULL STACK
            </div>

            {/* Name */}

            <h1
              className="
                text-3xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              PRASHANTH M
            </h1>

            {/* Role */}

            <h2
              className="
                text-xl
                lg:text-2xl
                text-gray-300
              "
            >
             Full Stack Engineer | Backend Enginner | AI Engineer
            </h2>

            {/* Highlight */}

            <p
              className="
                text-2xl
                text-purple-400
                font-semibold
              "
            >
              AI / ML Enthusiast
            </p>

            {/* Description */}

            <p
              className="
                max-w-xl
                text-gray-400
                leading-relaxed
              "
            >
              I build intelligent systems,
              AI-powered applications and modern
              digital experiences using MERN,
              Python and Machine Learning.
            </p>

            {/* Buttons */}

            <div className="flex gap-4">

              ith:

            <a
              href="https://github.com/Prashanthbgm"
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-3
                rounded-xl
                bg-purple-600
                hover:bg-purple-500
                transition
              "
            >
              View My Work
            </a>
              <a
              href={resume}
              download="Prashanth_M_Resume.pdf"
              className="
                px-6
                py-3
                rounded-xl
                border
                border-white/20
                hover:border-purple-500
                transition
              "
            >
              Download Resume
            </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center justify-center">

  <div
    className="
      relative
      w-[650px]
      h-[650px]
      flex
      items-center
      justify-center

      mt-13
    "
  >

    {/* Orbit Ring 1 */}

    <div
      className="
        absolute
        w-[350px]
        h-[350px]
        rounded-full
        border
        border-white/10
      "
    />

    {/* Orbit Ring 2 */}

    <div
      className="
        absolute
        w-[470px]
        h-[470px]
        rounded-full
        border
        border-white/10
      "
    />

    {/* Orbit Ring 3 */}

    <div
      className="
        absolute
        w-[600px]
        h-[600px]
        rounded-full
        border
        border-white/10
      "
    />

    <Floatingtags />

    <Globe />

  </div>

</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;