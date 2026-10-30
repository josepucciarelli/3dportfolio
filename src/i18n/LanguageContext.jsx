import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ui } from "./ui.js";

const LANGS = ["en", "es"];
const STORAGE_KEY = "lang";

const getInitialLang = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (LANGS.includes(saved)) return saved;
    } catch {
        // localStorage no disponible (modo privado, etc.)
    }
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("es") ? "es" : "en";
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLangState] = useState(getInitialLang);

    const setLang = useCallback((next) => {
        setLangState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // ignorar
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = ui[lang].meta.title;
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", ui[lang].meta.description);
    }, [lang]);

    const value = useMemo(() => {
        // t: texto de la interfaz por ruta, ej. t("nav.contact")
        const t = (path) => path.split(".").reduce((obj, key) => obj?.[key], ui[lang]) ?? path;
        // l: elige el idioma de un valor { en, es }; si es texto plano lo devuelve tal cual
        const l = (value) =>
            value && typeof value === "object" && !Array.isArray(value) && "en" in value
                ? value[lang]
                : value;
        return { lang, setLang, t, l };
    }, [lang, setLang]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
    return ctx;
};
