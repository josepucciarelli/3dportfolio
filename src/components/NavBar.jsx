import {navLinks} from "../constants/index.js";
import {useEffect, useState} from "react";
import {useLang} from "../i18n/LanguageContext.jsx";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const {lang, setLang, t, l} = useLang();

    useEffect(() => {
        // create an event listener for when the user scrolls
        const handleScroll = () => {
            // check if the user has scrolled down at least 10px
            // if so, set the state to true
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        // add the event listener to the window
        window.addEventListener("scroll", handleScroll);

        // cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Site Sprint Py
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={link} className="group">
                                <a href={link}>
                                    <span>{l(name)}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-actions">
                    <div className="lang-toggle" role="group" aria-label={t("nav.switchTo")}>
                        {["en", "es"].map((code) => (
                            <button
                                key={code}
                                type="button"
                                className={lang === code ? "active" : ""}
                                aria-pressed={lang === code}
                                onClick={() => setLang(code)}
                            >
                                {code.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>{t("nav.contact")}</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}
export default NavBar
