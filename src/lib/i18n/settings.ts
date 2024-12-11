export const fallbackLng = "zh";
export const languages = [fallbackLng, "en"];
export const defaultNS = "translation";

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS) {
    return {
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
