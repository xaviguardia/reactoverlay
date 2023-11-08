import { TypeIconAlignmentWrapper } from ".";

export default {
  title: "Components/TypeIconAlignmentWrapper",
  component: TypeIconAlignmentWrapper,
  argTypes: {
    type: {
      options: ["text", "icon", "alternative-6"],
      control: { type: "select" },
    },
    alignment: {
      options: ["center", "right", "left"],
      control: { type: "select" },
    },
    ambient: {
      options: ["inverse", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "text",
    alignment: "center",
    ambient: "inverse",
    className: {},
  },
};
