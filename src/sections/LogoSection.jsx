import React from 'react'
import {logoIconsList} from "../constants/index.js";

// Cada mitad repite la lista varias veces para cubrir pantallas anchas (2560px+).
// La pista tiene 2 mitades idénticas y se mueve exactamente -50%:
// cuando termina la primera, la segunda queda en su lugar → loop sin saltos.
const REPEATS_PER_HALF = 4;
const half = Array.from({ length: REPEATS_PER_HALF }).flatMap(() => logoIconsList);

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item md:mr-12 mr-5">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    );
};

const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge"/>
            <div className="gradient-edge"/>

            <div className="marquee h-52">
                <div className="marquee-track">
                    {[0, 1].map((copy) => (
                        <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
                            {half.map((icon, index) => (
                                <LogoIcon key={index} icon={icon} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default LogoSection
