import { Tag } from ".";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    alignment: {
      options: ["right", "left"],
      control: { type: "select" },
    },
    color: {
      options: ["main", "inverse"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    alignment: "right",
    color: "main",
    className: {},
    text: "NEW",
    typographySpecialClassName: {},
  },
};
