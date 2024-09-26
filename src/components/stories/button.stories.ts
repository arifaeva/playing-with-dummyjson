import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const ButtonSecondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const ButtonTertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Button",
  },
};
