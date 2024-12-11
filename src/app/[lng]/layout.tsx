import "./global.css";
import "shiki-magic-move/dist/style.css";

import { dir } from "i18next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { languages } from "@/lib/i18n/settings";

// 根据 lib/i18n/settings.ts 中的配置生成静态参数
export async function generateStaticParams() {
    return Promise.resolve(languages.map(lng => ({ lng })));
}

export const metadata: Metadata = {
    title: "Daily Functional",
    description: "Learn functional programming",
};

export default async function RootLayout(props: {
    children: ReactNode; params: Promise<{
        lng: string;
    }>;
}) {
    const { children, params } = props;
    const { lng } = await params;
    console.log(lng, dir(lng));
    return (
        <html lang={lng} dir={dir(lng)}>
            <body>
                {children}
            </body>
        </html>
    );
}
