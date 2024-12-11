import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import boundaries from "eslint-plugin-boundaries";
import compat from "eslint-plugin-compat";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import i18next from "eslint-plugin-i18next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import oxlint from "eslint-plugin-oxlint";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import security from "eslint-plugin-security";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import storyBook from "eslint-plugin-storybook";
import tailwind from "eslint-plugin-tailwindcss";
import testingLibrary from "eslint-plugin-testing-library";
import { produce } from "immer";
import tseslint from "typescript-eslint";

const typescriptLanguageOption = {
    parser: tseslint.parser,
    parserOptions: {
        // relative to tsconfigRootDir
        // project: [
        //     "tsconfig.lint.json",
        // ],
        projectService: true,
        // tsconfigRootDir: import.meta.dirname,
    },
    ecmaVersion: "latest",
    sourceType: "module",
};

// const nextPageFileConventions = [
//     { name: "default.(jsx|tsx)" },
//     { name: "error.(jsx|tsx)" },
//     { name: "instrumentation.(js|ts)" },
//     { name: "layout.(jsx|tsx)" },
//     { name: "loading.(jsx|tsx)" },
//     { name: "mdx-components.(js|tsx)" },
//     { name: "middleware.(js|ts))" },
//     { name: "not-found.(jsx|tsx)" },
//     { name: "page.(jsx|tsx)" },
//     { name: "template.(jsx|tsx)" },
// ];

const nextFolderConvention = "*";

export default tseslint.config(
    {
        name: "ignore",
        ignores: [
            ".vscode/",
            ".idea/",
            ".next/",
            "**/node_modules/**",
        ],
    },
    // {
    //     // files: ["**/*.ts(x)", "./src/**/"],
    //     files: ["./src/**/*"],
    //     languageOptions: {
    //         parser: projectStructureParser,
    //         parserOptions: {
    //             extraFileExtensions: [
    //                 ".md",
    //                 ".json",
    //                 ".lock",
    //             ],
    //         },
    //     },
    //     plugins: {
    //         "project-structure": projectStructurePlugin,
    //     },
    //     rules: {
    //         "project-structure/folder-structure": ["error", createFolderStructure({
    //             projectRoot: ".",
    //             structureRoot: ".",
    //             structure: {
    //                 enforceExistence: "src",
    //                 children: [
    //                     { ruleId: "app_folder" },
    //                     { ruleId: "hooks_folder" },
    //                     { ruleId: "components_folder" },
    //                     { ruleId: "features_folder" },
    //                     { ruleId: "api_folder" },
    //                     { name: "*" },
    //                     { name: "*", children: [] },
    //                 ],
    //             },
    //             rules: {
    //                 api_folder: {
    //                     name: "api",
    //                     children: [
    //                         { ruleId: "concrete_api_folder" },
    //                         { name: "route.(js|ts)" },
    //                     ],
    //                 },
    //                 concrete_api_folder: {
    //                     folderRecursionLimit: 10,
    //                     name: "*",
    //                     children: [
    //                         { ruleId: "concrete_api_folder" },
    //                         { name: "route.(js|ts)" },
    //                     ],
    //                 },
    //                 hooks_folder: {
    //                     name: "hooks",
    //                     folderRecursionLimit: 3,
    //                     children: [
    //                         { name: "use{PascalCase}(.test)?.ts" },
    //                     ],
    //                 },
    //                 hook_folder: {
    //                     name: "use-{kebab-case}",
    //                     children: [
    //                         { ruleId: "hooks_folder" },
    //                         { name: "{folderName}(.(test|api|types))?.ts" },
    //                     ],
    //                 },
    //                 components_folder: {
    //                     name: "components",
    //                     children: [
    //                         { ruleId: "component_folder" },
    //                     ],
    //                 },
    //                 component_folder: {
    //                     name: "{kebab-case}",
    //                     children: [
    //                         { ruleId: "components_folder" },
    //                         { ruleId: "hooks_folder" },
    //                         {
    //                             name: "{folder-name}.tsx",
    //                             enforceExistence: [
    //                                 "{node-name}.(test|stories).tsx",
    //                             ],
    //                         },
    //                         {
    //                             name: "{node-name}.(types|schema).tsx",
    //                         },
    //                     ],
    //                 },
    //                 app_folder: {
    //                     name: "app",
    //                     children: [
    //                         { ruleId: "page_folder" },
    //                         { name: "*.css" },
    //                         ...nextPageFileConventions,
    //                         { name: "robots.txt" },
    //                         { name: "sitemap.(xml|js|ts)" },
    //                         { name: "manifest.(json|webmanifest)" },
    //                         { name: "favicon.ico" },
    //                     ],
    //                 },
    //                 page_folder: {
    //                     folderRecursionLimit: 10,
    //                     name: nextFolderConvention,
    //                     children: [
    //                         { ruleId: "page_folder" },
    //                         ...nextPageFileConventions,
    //                         { name: "icon.(ico|jpg|jpeg|png|svg|js|ts|tsx)" },
    //                         { name: "apple-icon.(png|jpg|jpeg|js|ts|tsx)" },
    //                     ],
    //                 },
    //                 features_folder: {
    //                     name: "features",
    //                     folderRecursionLimit: 5,
    //                     children: [
    //                         { ruleId: "feature_folder" },
    //                     ],
    //                 },
    //                 feature_folder: {
    //                     name: "{kebab-case}",
    //                     children: [
    //                         { ruleId: "features_folder" },
    //                         { ruleId: "hooks_folder" },
    //                         { ruleId: "components_folder" },
    //                         {
    //                             name: "{folder-name}.tsx",
    //                             enforceExistence: [
    //                                 "{node-name}.(test|stories).tsx",
    //                             ],
    //                         },
    //                         {
    //                             name: "{node-name}.(types|schema).tsx",
    //                         },
    //                     ],
    //                 },
    //             },
    //         })],
    //         // "project-structure/independent-modules": ["error", {}],
    //         "project-structure/file-composition": ["error", createFileComposition({
    //             filesRules: [{
    //                 filePattern: "**/*.tsx",
    //                 rules: [
    //                     { // 导出一个形如 xxxProps 的类型
    //                         selector: ["interface", "type"],
    //                         scope: "fileExport",
    //                         positionIndex: 0,
    //                         format: "{FileName}Props",
    //                     },
    //                     { // 不导出时写作 Props
    //                         selector: ["interface", "type"],
    //                         scope: "fileRoot",
    //                         positionIndex: 0,
    //                         format: "Props",
    //                     },
    //                 ],
    //             }],
    //         })],
    //     },
    // },
    {
        plugins: {
            boundaries,
        },
        extends: [
            boundaries.configs.strict,
        ],
        settings: {
            "boundaries/include": ["src/**/*"],
            "boundaries/ignore": [],
            /**
             * @type {{
             *  mode?: "full" | "file" | "folder",
             *  type: string,
             *  pattern: string | string[],
             *  basePattern?: string,
             *  capture?: string[],
             *  baseCapture?: string[],
             * }[]}
             */
            "boundaries/elements": [
                {
                    type: "shared",
                    mode: "full",
                    pattern: [
                        "src/components/**/*",
                        "src/hooks/**/*",
                        "src/data/**/*",
                        "src/lib/**/*",
                    ],
                },
                {
                    type: "feature",
                    mode: "full",
                    pattern: ["src/features/*/**/*"],
                    capture: ["featureName"],
                },
                {
                    type: "app",
                    mode: "full",
                    pattern: ["src/app/**/*"],
                    capture: ["_", "fileName"],
                },
                {
                    type: "neverImport",
                    mode: "full",
                    pattern: ["src/*"],
                },
            ],
        },
        rules: {
            "boundaries/element-types": [
                "error",
                {
                    default: "disallow",
                    rules: [
                        {
                            from: ["shared"],
                            allow: ["shared"],
                        },
                        {
                            from: ["feature"],
                            allow: [
                                "shared",
                                ["feature", { featureName: "${from.featureName}" }],
                            ],
                        },
                        {
                            from: ["app", "neverImport"],
                            allow: [
                                "shared",
                                "feature",
                            ],
                        },
                        {
                            from: ["app"],
                            allow: [
                                ["app", { fileName: "*.css" }],
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "custom-eslint",
        extends: [
            eslint.configs.recommended,
        ],
        rules: {},
    },
    {
        name: "miscellaneous",
        extends: [
            compat.configs["flat/recommended"],
            // jsdoc.configs["flat/recommended"],
            security.configs.recommended,
            promise.configs["flat/recommended"],
            eslintPlugin.configs["flat/recommended"],
        ],
        rules: {},
    },
    {
        name: "custom-i18next",
        extends: [
            i18next.configs["flat/recommended"],
        ],
        rules: {
            "i18next/no-literal-string": ["warn"],
        },
    },
    {
        name: "custom-typescript",
        files: [
            "**/*.ts",
            "**/*.tsx",
        ],
        extends: [
            ...tseslint.configs.strictTypeChecked,
            // functional.configs.recommended,
            // functional.configs.externalTypeScriptRecommended,
            // functional.configs.stylistic,
        ],
        languageOptions: typescriptLanguageOption,
        rules: {},
    },
    {
        name: "custom-tailwind-css",
        files: [
            "**/*.tsx",
            "**/*.jsx",
        ],
        extends: [
            ...tailwind.configs["flat/recommended"],
        ],
        rules: {},
    },
    {
        name: "custom-react",
        files: [
            "**/*.tsx",
            "**/*.jsx",
        ],
        extends: [
            react.configs.flat.recommended,
            react.configs.flat["jsx-runtime"], // no need to do `import React from "react";` after react17
            jsxA11y.flatConfigs.recommended,
        ],
        settings: {
            react: {
                version: "detect",
            },
        },
        languageOptions: produce(typescriptLanguageOption, (draft) => {
            // the same of parserOptions of "jsx-runtime"
            draft.parserOptions.ecmaFeatures = { jsx: true };
            draft.parserOptions.jsxPragma = null;
        }),
        rules: {},
    },
    {
        // linting components story
        name: "custom-storybook",
        files: [
            "**/*.stories.tsx",
            "**/*.stories.jsx",
        ],
        extends: [
            ...storyBook.configs["flat/recommended"],
        ],
        rules: {},
    },
    {
        name: "custom-test",
        files: [
            "**/*.stories.tsx",
            "**/*.stories.jsx",
        ],
        extends: [
            testingLibrary.configs["flat/react"],
        ],
        rules: {},
    },
    {
        name: "custom-stylistic",
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        extends: [
            stylistic.configs["recommended-flat"],
            stylistic.configs.customize({
                indent: 4,
                quotes: "double",
                semi: true,
                jsx: true,
                commaDangle: "always-multiline",
            }),
        ],
        languageOptions: typescriptLanguageOption,
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
    ...oxlint.buildFromOxlintConfigFile("./oxlintrc.json"),
)
;
