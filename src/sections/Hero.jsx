import Navbar from "../components/Navbar";
import Globe from "../components/Globe";
import Floatingtags from "../components/FloatingTags";
import resume from "../assets/Prash_29.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white px-6 py-8 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* LEFT SIDE */}

          <div className="space-y-6 sm:space-y-7">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 sm:px-5 sm:py-2.5">
              AI • BACKEND • FULL STACK
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                PRASHANTH M
              </h1>
              <h2 className="text-lg font-medium text-gray-300 sm:text-xl lg:text-2xl">
                Full Stack Engineer | Backend Engineer | AI Engineer
              </h2>
            </div>

            <p className="text-2xl font-semibold text-purple-400 sm:text-3xl">
              AI / ML Enthusiast
            </p>

            <p className="max-w-xl text-gray-400 leading-relaxed text-base sm:text-lg">
              I build intelligent systems, AI-powered applications and modern digital experiences using MERN, Python and Machine Learning.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://github.com/Prashanthbgm"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 sm:w-auto"
              >
                View My Work
              </a>
              <a
                href={resume}
                download="Prashanth_M_Resume.pdf"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-purple-500 sm:w-auto"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center">
            <div className="relative flex h-[420px] w-full max-w-[620px] items-center justify-center sm:h-[520px] lg:h-[650px]">
              <div className="absolute inset-0 m-auto h-[240px] w-[240px] rounded-full border border-white/10 sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px]" />
              <div className="absolute inset-0 m-auto h-[320px] w-[320px] rounded-full border border-white/10 sm:h-[400px] sm:w-[400px] lg:h-[470px] lg:w-[470px]" />
              <div className="absolute inset-0 m-auto h-[380px] w-[380px] rounded-full border border-white/10 sm:h-[480px] sm:w-[480px] lg:h-[600px] lg:w-[600px]" />

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