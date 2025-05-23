import images from '../assets/images.png';
import javascript from '../assets/javascript.png';
import skip from '../assets/skip.png';
import Recticon from '../assets/Recticon.png';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skillsect() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const skillAnimations = [
      { selector: ".skill-per", width: "90%" },
      { selector: ".skill-perr", width: "70%" },
      { selector: ".skill-perjj", width: "60%" },
      { selector: ".skill-rect", width: "30%" }
    ];
    skillAnimations.forEach(({ selector, width }) => {
      gsap.fromTo(
        selector,
        { width: "0%", opacity: 0 },
        {
          width,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: selector,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {/* HTML Skill */}
        <div className="skill-item">
          <img src={images} alt="HTML" className="skill-icon" />
          <h2>HTML</h2>
          <div className="skill-bar"><span className='skill-per'><span className='tool-tip'>90%</span></span></div>
          <ul>
            <li>Semantic and accessible HTML5 markup</li>
            <li>Proper use of tags and structure (headings, lists, tables, forms)</li>
            <li>SEO-friendly coding practices</li>
            <li>Embedding media (images, videos, audio)</li>
            <li>Cross-browser compatibility</li>
          </ul>
        </div>

        {/* CSS Skill */}
        <div className="skill-item">
          <img src={skip} alt="CSS" className="skill-icon" />
          <h2>CSS</h2>
          <div className="skill-bar"><span className='skill-perr'><span className='tool-tip'>70%</span></span></div>
          <ul>
            <li>Responsive design with Flexbox and Grid</li>
            <li>Media queries and mobile-first development</li>
            <li>Custom animations and transitions</li>
            <li>SCSS/SASS basics</li>
            <li>Cross-browser and cross-device styling</li>
          </ul>
        </div>

        {/* JavaScript Skill */}
        <div className="skill-item">
          <img src={javascript} alt="JavaScript" className="skill-icon" />
          <h2>JavaScript</h2>
          <div className="skill-bar"><span className='skill-perjj'><span className='tool-tip'>60%</span></span></div>
          <ul>
            <li>Component-based architecture</li>
            <li>useState and basic hooks</li>
            <li>Props and state management</li>
            <li>JSX syntax and virtual DOM understanding</li>
            <li>Project structure and file organization</li>
          </ul>
        </div>

        {/* React Skill */}
        <div className="skill-item">
          <img src={Recticon} alt="React" className="skill-icon" />
          <h2>React.js</h2>
          <div className="skill-bar"><span className='skill-rect'><span className='tool-tip'>30%</span></span></div>
          <ul>
            <li>Learning the basics of React and how component-based architecture works.</li>
            <li>useState and basic hooks</li>
            <li>Learning to render lists and conditionally display content.</li>
            <li>Conditional rendering and lists</li>
            <li>Building small practice components like counters, forms, or toggle buttons.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skillsect;
