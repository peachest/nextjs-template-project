import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import "@/app/[lng]/global.css";

const preview: Preview = {
    globalTypes: {
        locale: {
            description: "Internationalization locale",
            toolbar: {
                icon: "globe",
                items: [
                    { value: "en", right: "US", title: "English" },
                    { value: "zh", right: "CN", title: "中文" },
                ],
            },
        },
    },
    initialGlobals: {
        locale: "zh",
        backgrounds: { value: "light" },
        viewport: {value: "tablet", isRotated: true},
    },
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        backgrounds: {
            options: [
                { name: "Dark", value: "#333" },
                { name: "Light", value: "#F7F9F2" },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            toc: true,
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'ipad',
        },
        options: {
            storySort: {
                order: ["Atoms", ["WIP"], "Components", ["WIP"], "Pages", ["WIP"]],
            },
        },
    },
    tags: ["autodocs"],
};

export default preview;


export const decorators = [
    withThemeByClassName({
                             themes: {
                                 light: "light",
                                 dark: "dark",
                             },
                             defaultTheme: "light",
                         }),
];
