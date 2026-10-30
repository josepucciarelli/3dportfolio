import { abilities } from "../constants";
import { useLang } from "../i18n/LanguageContext.jsx";

const FeatureCards = () => {
    const { l } = useLang();
    return (
    <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
            {abilities.map(({ imgPath, title, desc }) => (
                <div
                    key={imgPath}
                    className="card-border rounded-xl p-8 flex flex-col gap-4"
                >
                    <div className="size-14 flex items-center justify-center rounded-full">
                        <img src={imgPath} alt={l(title)} />
                    </div>
                    <h3 className="text-white text-2xl font-semibold mt-2">{l(title)}</h3>
                    <p className="text-white-50 text-lg">{l(desc)}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default FeatureCards;