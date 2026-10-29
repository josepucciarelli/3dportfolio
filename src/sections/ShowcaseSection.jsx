import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

        cardRefs.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: { trigger: card, start: "top bottom-=100" },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {projects.map((project, index) => (
                        <a
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="project-card cursor-pointer block"
                        >
                            <div className={`image-wrapper ${project.bg ?? ""}`}>
                                <img
                                    src={project.imgPath}
                                    alt={project.alt}
                                    loading="lazy"
                                    className={project.imgClass ?? ""}
                                />
                            </div>
                            <div className="text-content">
                                <h2>{project.title}</h2>
                                <p className="text-white-50 md:text-base">{project.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowcaseSection;
