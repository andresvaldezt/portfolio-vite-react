import { motion } from "framer-motion"
import cv from '../assets/CV_Andres_Valdez_Tirado.pdf'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-[calc(100vh-104px)] flex items-center px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        {/* ── Left: Text content ── */}
        <div className="flex-1">

          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 light:border-gray-700 text-sm light:text-gray-500 text-gray-400 mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl font-medium leading-tight mb-2 light:text-black text-white"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
          >
            Andrés Valdez
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-3xl md:text-4xl font-normal light:text-gray-500 text-gray-400 mb-5"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            Frontend{" "}
            <span className="light:text-purple-600 text-amber-400 font-medium">
              Developer
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base light:text-gray-500 text-gray-400 leading-relaxed max-w-lg mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
          >
            Building scalable, responsive web experiences with React and
            TypeScript. 7+ years turning designs into pixel-perfect interfaces
            for global platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            <button
              onClick={scrollToProjects}
              className="px-5 py-2.5 rounded-lg light:bg-gray-900 bg-white light:text-white text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              About me
            </button>
            <a
              href={cv}
              download
              className="px-5 py-2.5 rounded-lg border border-gray-200 light:border-gray-700 text-sm light:text-gray-700 text-gray-300 light:hover:bg-gray-100 hover:bg-gray-950 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* ── Right: Decorative graphic ── */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* Outer ring */}
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-gray-200 light:border-gray-700 flex items-center justify-center relative">
            {/* Inner circle */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-gray-200 light:border-gray-700 light:bg-gray-50 bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-medium light:text-purple-600 text-amber-400">AV</span>
            </div>

            {/* Orbiting icons */}
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-gray-200 light:border-gray-700 bg-white light:bg-gray-900 flex items-center justify-center text-base"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50% 140px" }}
            >
              ⚛️
            </motion.div>
            <motion.div
              className="absolute top-1 -right-3 w-10 h-10 rounded-full border border-gray-200 light:border-gray-700 bg-white light:bg-gray-900 flex items-center justify-center text-base"
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "-80px 50%" }}
            >
              🎨
            </motion.div>
            <motion.div
              className="absolute bottom-4 -left-3 w-10 h-10 rounded-full border border-gray-200 light:border-gray-700 bg-white light:bg-gray-900 flex items-center justify-center text-sm font-medium text-gray-500 light:text-gray-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "80px 50%" }}
            >
              {"{ }"}
            </motion.div>
          </div>

          {/* Tech tags */}
          <motion.span
            className="absolute top-4 right-0 text-xs px-2.5 py-1 rounded-md border border-gray-200 light:border-gray-700 bg-white light:bg-gray-900 text-gray-500 light:text-gray-400"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            React
          </motion.span>
          <motion.span
            className="absolute bottom-6 right-0 text-xs px-2.5 py-1 rounded-md border border-gray-200 light:border-gray-700 bg-white light:bg-gray-900 text-gray-500 light:text-gray-400"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75 }}
          >
            TypeScript
          </motion.span>
          <motion.span
            className="absolute top-1/2 -right-8 text-xs px-2.5 py-1 rounded-md border border-gray-200 light:border-gray-700 bg-white light:bg-gray-900 text-gray-500 light:text-gray-400"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            Tailwind
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;