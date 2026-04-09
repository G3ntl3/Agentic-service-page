import { motion } from "framer-motion";
import architectureSvg from "../assets/architecture.svg";
// import scriptSvg from "../assets/icon/blockdata.svg";
import scrollSvg from "../assets/scroll.svg";
import videoSvg from "../assets/tabler_video icon.svg";
import arrowSvg from "../assets/arrow.svg";

const steps = [
  {
    icon: architectureSvg,
    title: "Workflow Architecture",
    desc: "Build your automated content system",
  },
  {
    icon: scrollSvg,
    title: "Script Production",
    desc: "Turn ideas into structured scripts",
  },
  {
    icon: videoSvg,
    title: "Video Production & Editing",
    desc: "Bring scripts to life visually",
  },
  {
    icon: arrowSvg,
    title: "Posting & Repurposing",
    desc: "Distribute and scale your content",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const HowItWorks = () => {
  return (
   <>
   </>
  );
};

export default HowItWorks;