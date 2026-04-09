import { useEffect, useRef } from "react";
import { Settings, Film, FileText } from "lucide-react";

const services = [
  {
    num: "01 / 03",
    icon: Settings,
    name: "AI Content Workflow Creation",
    desc: "We design a complete content system for your brand using automation and AI-powered tools. Go from idea to published content with clarity and structure.",
    items: [
      "Idea generation system",
      "Script creation workflow",
      "Recording process structure",
      "Editing pipeline setup",
      "Content repurposing flow",
      "Posting schedule system",
      "Content library management",
    ],
    result: "You run a repeatable content engine",
    delay: "0s",
  },
  {
    num: "02 / 03",
    icon: Film,
    name: "Short Form Editing & Packaging",
    desc: "Our team transforms your recordings into engaging short videos optimised for growth across every platform you publish on.",
    items: [
      "Clip selection & hook improvement",
      "Captions and subtitles",
      "Pacing & visual movement",
      "Platform-ready formatting",
      "Performance-focused editing",
    ],
    result: "Your content becomes easier to share and grow",
    delay: "0.15s",
  },
  {
    num: "03 / 03",
    icon: FileText,
    name: "Script to Video Production",
    desc: "We help turn your ideas into structured, engaging videos that are easier to record and perform better with your audience.",
    items: [
      "Topic research & planning",
      "Hook development",
      "Full script writing",
      "Visual direction for editing",
      "Full video production support",
    ],
    result: "You show up on camera with clarity and confidence",
    delay: "0.3s",
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
          el.classList.add("visible");
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

const ServiceCard = ({ service }) => {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="svc-card reveal"
      style={{ transitionDelay: service.delay }}
    >
      <div className="svc-num">{service.num}</div>
      <div className="svc-icon">
        <service.icon size={48} strokeWidth={1.5} />
      </div>
      <div className="svc-name">{service.name}</div>
      <p className="svc-desc">{service.desc}</p>

      <div className="svc-items">
        {service.items.map((item) => (
          <div className="svc-item" key={item}>
            {item}
          </div>
        ))}
      </div>

      <div className="svc-result">{service.result}</div>
    </div>
  );
};

const ServicesSection = () => {
  const headerRef = useReveal();

  return (
    <section className="services" id="services">
      <div ref={headerRef} className="services-header reveal">
        <div>
          <div className="label">What We Build</div>
          <h2 className="section-title">Our Services</h2>
        </div>
        <a href="#cta" className="btn-primary">Start a Project →</a>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.num} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;































// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";

// import faceless from "../assets/sevices/faceless.png";
// import faced from "../assets/sevices/faced.png";
// import extraservices from "../assets/sevices/extraservices.png";

// const services = [
//   {
//     title: "Faceless Videos",
//     image: faceless,
//     avatar: faceless,
//     features: [
//       "AI Voiceovers – Choose from a variety of realistic AI voices.",
//       "Customizable Avatars – Tailor avatars to match your brand identity.",
//     ],
//   },
//   {
//     title: "Faced Videos",
//     image: faced,
//     avatar: faced,
//     features: [
//       "High-Quality Recording Assistance – Guidance on setting up professional lighting, sound, and framing.",
//       "Custom Script Writing – Professionally written scripts to match your brand.",
//     ],
//   },
//   {
//     title: "Extra Services",
//     image: extraservices,
//     avatar: extraservices,
//     features: [
//       "Brand Strategy Consultation – One-on-one sessions to refine your digital identity.",
//       "SEO-Optimized Captions & Tags – Improve visibility and reach.",
//     ],
//   },
// ];

// // Reusable Service Card Component
// const ServiceCard = ({ service }) => {
//   return (
//     <div
//       className="rounded-2xl overflow-hidden lg:mt-5 flex flex-col justify-between h-full min-h-[500px]"
//       style={{
//         background:
//                 "linear-gradient(90deg, #002A24 0%,  #023B14 100%)",
//         border: "1px solid rgba(61,220,151,0.12)",
//         boxShadow: "0 12px 40px rgba(2,8,6,0.6)",
//         backdropFilter: "blur(6px)",
//       }}
//     >
//       <div className="relative flex-shrink-0">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full p-3 h-48 md:h-52 object-cover rounded-t-2xl"
//         />
//         <div className="absolute left-2 bottom-2">
//           <img
//             src={service.avatar || service.image}
//             alt={`${service.title} avatar`}
//             className="w-12 h-12 rounded-full border-2 border-[#168bda] object-cover"
//           />
//         </div>
//       </div>

//       <div className="pt-1 pb-6 px-6 flex-1">
//         <h3 className="text-[20px] font-semibold text-[#00e6a5] mb-2">
//           {service.title}
//         </h3>

//         <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#2b6435d7] text-[#bfe9de] mb-4">
//           Features
//         </span>

//         <ul className="space-y-3 mt-3">
//           {service.features.map((f, i) => (
//             <li
//               key={i}
//               className="flex items-start gap-3 text-sm leading-tight text-[#d8efe6]"
//             >
//               <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#032a23] border border-[#0b4f3f] text-[#35e3a0] mt-1">
//                 ✓
//               </span>
//               <span className="flex-1">{f}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="px-6 pb-6">
//         <button className="w-full py-2 border border-[#18d9a0] text-[#18d9a0] bg-transparent rounded-2xl hover:bg-[#afbe9150] hover:text-white transition transform-fill ">
//           Learn More →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function Services() {
//   return (
//     <>
//       <div className="text-center glowtext gradient-text mt-20 lg:mt-25 text-3xl lg:text-4xl">
//         Our Services
//       </div>
//       <div className="text-white lg:text-3xl font-extralight text-center mb-3 lg:mb-5">
//         Explore services tailored to your needs
//       </div>

//       <section className=" px-4">
//         {/* Mobile Carousel */}
//         <div className="block md:hidden py-6">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             spaceBetween={20}
//             slidesPerView={1}
//             className="w-full"
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index} style={{ height: 'auto' }}>
//                 <ServiceCard service={service} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden md:block px-20 bg-services min-h-screen">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <ServiceCard key={idx} service={service} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }