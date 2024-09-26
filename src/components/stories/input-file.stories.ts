import type { Meta, StoryObj } from "@storybook/react";

import { FileInput } from "../input-file";

const meta = {
  title: "File Input",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FileInputComponent: Story = {
  args: {
    placeholder: "Choose file",
  },
};
