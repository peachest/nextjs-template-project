import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";

import { Button } from "@/components/ui/button";

const component = Button;
const title = "Atoms/Button";

type ComponentType = typeof component;
const meta: Meta<ComponentType> = {
    title,
    component,
    argTypes: {
        variant: {
            options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
            control: { type: "inline-radio" },
        },
        size: {
            options: ["sm", "default", "lg", "icon"],
            control: { type: "radio" },
        },
    },
    args: {
        onClick: fn(),
    },
    render: ({ variant, size, children }) =>
        <Button variant={variant} size={size}>{children}</Button>,
    play: async (context) => {
        const { canvasElement } = context;
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole("button"));
        // await userEvent.click();
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Origin: Story = {
    args: {
        children: "Origin",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "Destructive",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Outline",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost",
    },
};

export const Link: Story = {
    args: {
        variant: "link",
        children: "Link",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        children: "Small",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        children: "Large",
    },
};

export const Icon: Story = {
    args: {
        size: "icon",
        children: "Icon",
    },
};
