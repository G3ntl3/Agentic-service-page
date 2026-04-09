import { useEffect, useRef } from "react";
import { Mic, BookOpen, Rocket, Cpu, Building2 } from "lucide-react";

const audience = [
  {
    icon: Mic,
    title: "Content Creators",
    sub: "Building a personal brand and ready to systemise consistent output.",
  },
  {
    icon: BookOpen,
    title: "Educators & Coaches",
    sub: "Online teachers who want their knowledge to reach a wider audience systematically.",
  },
  {
    icon: Rocket,
    title: "Startup Founders",
    sub: "Founders growing audience and authority through consistent, professional content.",
  },
  {
    icon: Cpu,
    title: "AI & Tech Creators",
    sub: "Creators in the AI space who want to produce content at the speed the space moves.",
  },
  {
    icon: Building2,
    title: "Content-Led Businesses",
    sub: "Businesses using video content as a core growth and lead generation channel.",
  },
];

const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const ForWho = () => {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section
      id="who"
      className="bg-[#081510] border-y border-[rgba(0,195,154,0.12)] 
      px-4 md:px-16 lg:py-20 py-24"
    >

      {/* Header */}
      <div
        ref={headerRef}
        className="text-center mb-14 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="inline-flex items-center gap-2 font-mono  text-[0.65rem] tracking-[0.18em] 
        uppercase text-[#00c39a] mb-4">
          <span className="block w-5 h-px bg-[#00c39a]" />
          Who We Work With
        </div>

        <h2 className="font-extrabold text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-tight
         text-[#eef7f4]">
          Built For Creators <br /> Who Are Serious About Scale.
        </h2>
      </div>

      {/* Cards */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-[1.5px] opacity-0 translate-y-8 transition-all duration-700"
      >
        {audience.map((person, index) => (
          <div
            key={person.title}
            className={`
              relative overflow-hidden bg-[#013618] px-7 py-10
              cursor-default transition-transform duration-300
              hover:-translate-y-1 hover:z-10 group
              ${index === 0 ? "lg:rounded-l-xl" : ""}
              ${index === audience.length - 1 ? "lg:rounded-r-xl" : ""}
              max-lg:rounded-xl
            `}
          >
            {/* hover glow — rises from bottom */}
            <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[rgba(0,195,154,0.10)] to-transparent transition-all duration-500 group-hover:h-full" />

            <div className="relative z-10 text-4xl mb-4">
              <person.icon size={48} strokeWidth={1.5} className="text-white" />
            </div>
            <div className="relative z-10 font-bold text-[0.95rem] text-[#eef7f4] mb-2">
              {person.title}
            </div>
            <div className="relative z-10 text-[0.8rem] text-[#7aab97] leading-relaxed">
              {person.sub}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ForWho;