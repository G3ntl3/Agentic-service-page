import { motion } from "framer-motion";
import { TbTrendingDown, TbUserX, TbClockExclamation, TbRobotOff } from "react-icons/tb";

const problems = [
  {
    icon: TbTrendingDown,
    title: "Fragmented Content Workflow",
    desc: "Content creation often requires switching between many tools for research, writing, editing, and structuring ideas.",
  },
  {
    icon: TbUserX,
    title: "Slow Research Process",
    desc: "Finding reliable insights and information takes time, which delays the content production process.",
  },
  {
    icon: TbClockExclamation,
    title: "Inefficient Script Development",
    desc: "Turning ideas into well structured scripts requires several revisions and creative effort.",
  },
  {
    icon: TbRobotOff,
    title: "Lack of Automation",
    desc: "Most creators still rely on manual workflows instead of automated systems that save time and improve efficiency.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const TheProblems = () => {
  return (
    <section className="bg-] px-6 md:px-16 py-24">

      {/* Top label */}
      <motion.p
        className="text-center font-bold text-white text-[2rem] mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        The Problems
      </motion.p>

      {/* Header row — big title left, description right */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">
        <motion.h2
          className="gradient-text bg-gradient-to-r pb-2 from-[#00BFA6] to-[#016179] text-2xl md:text-4xl lg:text-5xl text-start font-bold glowtext"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Problems We Are Solving
        </motion.h2>

        <motion.p
          className="text-white text-sm leading-relaxed flex-1 max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          Many brands and creators struggle to maintain consistent content
          output while trying to grow their audience. Agentic Arc solves the
          biggest bottlenecks in content production.
        </motion.p>
      </div>

      {/* Problem cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            className="bg-[#081510] border border-[rgba(0,195,154,0.15)] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:border-[rgba(0,195,154,0.4)] hover:shadow-xl hover:shadow-[rgba(0,195,154,0.2)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i + 3}
          >
            {/* Icon box */}
            <div className="w-10 h-10 rounded-lg bg-[#0493ab] flex items-center justify-center shrink-0">
              <problem.icon className="text-white" size={20} />
            </div>

            {/* Title */}
            <p className="text-[#00c39a] font-semibold text-sm leading-snug">
              {problem.title}
            </p>

            {/* Description */}
            <p className="text-[#7aab97] text-sm leading-relaxed">
              {problem.desc}
            </p>

            {/* Bottom divider line */}
            <div className="mt-auto pt-4 border-t border-[rgba(0,195,154,0.1)]" />
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default TheProblems;