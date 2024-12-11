import Link from "next/link";

import useTranslation from "@/hooks/use-translation";

export default async function Page(props: { params: Promise<{ lng: string; }>; }) {
    const { lng } = await props.params;
    const { t } = await useTranslation(lng, "translation");
    return (
        <>
            <h1>
                {t("h1")}
            </h1>
            <div className="flex w-full flex-1 items-center justify-around">
                <Link href="/en" locale="en">English</Link>
                <Link href="/zh" locale="zh">简体中文</Link>
            </div>
        </>
    );
};
