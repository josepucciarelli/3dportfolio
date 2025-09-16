import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p><a href="/terms.html" className="no-underline">Terms & Conditions</a></p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a href={socialImg.url || "about:blank"} target="_blank" rel="noopener noreferrer" aria-label={socialImg.name ? `${socialImg.name} link` : "social link"}>
                                <img src={socialImg.imgPath} alt={socialImg.name ? `${socialImg.name} icon` : "social icon"} />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Site Sprint Py. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;