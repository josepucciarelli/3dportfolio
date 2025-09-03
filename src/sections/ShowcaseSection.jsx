import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const FabioARef = useRef(null);
    const GoogleDRef = useRef(null);
    const ResumitRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [FabioARef.current, GoogleDRef.current, ResumitRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className='showcaselayout'>
                    <div ref={FabioARef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.webp" alt="Fabio Araujo" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Fabio Araujo Landing Page
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with React Native, TypeScript, & TailwindCSS for a fast, user-friendly experience.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={GoogleDRef}>
                            <div className="image-wrapper bg-[#e5eef5]">
                                <img
                                    src="/images/project2.webp"
                                    alt="File Management Platform"
                                />
                            </div>
                            <h2>Google Drive Clone</h2>
                        </div>

                        <div className="project" ref={ResumitRef}>
                            <div className="image-wrapper bg-[#dfefeb]">
                                <img src="/images/project3.png" alt="AI Analyzer" />
                            </div>
                            <h2>Resumit - AI Analyzer</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
