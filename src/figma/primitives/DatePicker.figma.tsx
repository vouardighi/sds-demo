import figma from "@figma/code-connect";
import { Input, InputField } from "primitives";

figma.connect(Input, "<FIGMA_INPUTS_DATE_PICKER_FIELD>", {
  variant: { "Has Label": false },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
    }),
    placeholder: figma.enum("Value Type", {
      default: "MM/DD/YYYY",
      Placeholder: figma.string("Value"),
    }),
  },
  example: ({ ...props }) => <Input type="date" {...props} />,
});

figma.connect(InputField, "<FIGMA_INPUTS_DATE_PICKER_FIELD>", {
  variant: { "Has Label": true },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    errorMessage: figma.enum("State", { Error: figma.string("Error") }),
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
    }),
    placeholder: figma.enum("Value Type", {
      default: "MM/DD/YYYY",
      Placeholder: figma.string("Value"),
    }),
  },
  example: ({ ...props }) => <InputField type="date" {...props} />,
});
