import { motion } from "framer-motion";
import Connect from "./Connect";

const stats = [
  { value: "30+", label: "Workflows\nDesigned" },
  { value: "40+", label: "Clients" },
  { value: "20+", label: "Creators & Teams\nSupported" },
  { value: "10+", label: "Content Pipelines\nGenerated" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const AboutUs = () => {
  return (
    <section className="  lg:px-0  md:px-16 px-3 ">

      {/* Top label */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="text-[2rem] font-semibold">About Us</p>
        <p className=" font- text-[1.3rem]">
          We don't just create content. We build content engines.
        </p>
      </motion.div>

      {/* Main row — left copy, right stats */}
      <div className="flex flex-col lg:flex-row  lg:px-5  lg:py-5 py-0 px-3 items-start">

        {/* Left */}
        <motion.div
          className="flex-1 mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <h2 className="text-white text-3xl md:text-4xl  leading-snug mb-6">
            We don't just{" "}
            <span className="text-cyan-400">create.</span> We{" "}
            <span className="text-cyan-400">solve,</span>
            <br />
            <span className="text-cyan-400">enhance,</span> and{" "}
            <span className="text-cyan-400">elevate.</span>
          </h2>

          <p className=" text-sm leading-relaxed max-w-md mb-8">
            We design automated content systems that transform ideas into
            structu scripts, videos, and scalable content — faster and more
            efficiently.
          </p>

       <div className="mb-8 md:mb-0">
         <Connect/>
       </div>
        </motion.div>

        {/* Right — 2x2 stats */}
        <div className="grid  grid-rows-2  gap-y-6 gap-x-6 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-20 w-full lg:max-w-md">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              className="border border-white rounded-2xl p-1 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 2}
            >
              <p className="gradient-text bg-gradient-to-r  from-[#00BFA6] to-[#016179] text-4xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-white text-xl leading-snug whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;