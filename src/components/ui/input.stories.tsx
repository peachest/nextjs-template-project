import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";

const component = Input;
const title = "Atoms/WIP/Input";

type ComponentType = typeof component;
const meta: Meta<ComponentType> = {
    title,
    component,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Origin: Story = {
    render: () => <Input />,
};
