import { initI18next } from "@/lib/i18n";

async function useTranslation(lng: string, ns: string, options = { keyPrefix: "" }) {
    const i18nextInstance = await initI18next(lng, ns);
    return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
        i18n: i18nextInstance,
    };
}

export default useTranslation;
