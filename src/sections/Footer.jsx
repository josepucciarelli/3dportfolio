import { socialImgs } from "../constants";
import { useLang } from "../i18n/LanguageContext.jsx";

const Footer = () => {
    const { t } = useLang();
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p><a href="/terms.html" className="no-underline">{t("footer.terms")}</a></p>
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
                        © {new Date().getFullYear()} Site Sprint Py. {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;