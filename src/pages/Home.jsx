import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Services'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ForWho from '../components/ForWho'
import HowItWorks from '../components/Howitworks'
import Dashboard from '../components/Dashboard'
import TheProblems from '../components/Theproblems'
import FAQ from '../components/Faq'
import FloatingBookBtn from '../components/FloatingBookBtn'
import GetInTouch from '../components/GetInTouch'
const Home = () => {
 
const steps = [
  {
    num: "01",
    title: "Discovery",
    body: "We learn about your content goals, target audience, and current workflow. We map every gap and opportunity.",
  },
  {
    num: "02",
    title: "System Design",
    body: "We design your full content workflow and production process, tailored to your brand voice and schedule.",
  },
  {
    num: "03",
    title: "Implementation",
    body: "Our team sets up all the tools, automation structure, and editing pipeline. Everything is tested before handoff.",
  },
  {
    num: "04",
    title: "Production & Scale",
    body: "You produce content consistently using the system we built. We stay on to support and optimise as you grow.",
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
 const headerRef = useReveal();
  const trackRef = useReveal();
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <>
<div>
 
  <Navbar/>
      <Hero/>
<TheProblems/>
<HowItWorks/>
         <div id="about"><About/></div>
<div id="services"><Service/></div>
  <ForWho/>

  {/* --------how it wrks------------- */}

<section id="process"> 

      <div ref={headerRef} className="reveal process-header">
        <div className="label">How It Works</div>
        <h2 className="section-title">Our Process. 2–4 Weeks to Launch.</h2>
        <p className="process-subheading">
          A clear, structured journey from first call to a fully running content system. No guesswork, no delays.
        </p>
      </div>

      <div ref={trackRef} className="process-track reveal">
        {steps.map((step) => (
          <div className="proc-step" key={step.num}>
            <div className="proc-num">{step.num}</div>
            <div className="proc-title">{step.title}</div>
            <p className="proc-body">{step.body}</p>
          </div>
        ))}
      </div>

    </section> 

  <Dashboard/>
<FAQ/>
<GetInTouch />
<FloatingBookBtn />
</div>

    </>
  )
}

export default Home



