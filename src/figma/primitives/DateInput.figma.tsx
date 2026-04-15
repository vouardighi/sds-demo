import figma from "@figma/code-connect";
import { Input, InputField } from "primitives";

figma.connect(Input, "<FIGMA_INPUTS_DATE_INPUT_FIELD>", {
  variant: { "Has Label": false },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    day: figma.enum("Value Type", {
      Default: figma.string("Day"),
    }),
    month: figma.enum("Value Type", {
      Default: figma.string("Month"),
    }),
    year: figma.enum("Value Type", {
      Default: figma.string("Year"),
    }),
    placeholder: figma.enum("Value Type", {
      default: "DD / MM / YYYY",
      Placeholder: figma.string("Day"),
    }),
  },
  example: ({ day, month, year, ...props }) => (
    <Input type="date" value={`${year}-${month}-${day}`} {...props} />
  ),
});

figma.connect(InputField, "<FIGMA_INPUTS_DATE_INPUT_FIELD>", {
  variant: { "Has Label": true },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    errorMessage: figma.enum("State", { Error: figma.string("Error") }),
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    day: figma.enum("Value Type", {
      Default: figma.string("Day"),
    }),
    month: figma.enum("Value Type", {
      Default: figma.string("Month"),
    }),
    year: figma.enum("Value Type", {
      Default: figma.string("Year"),
    }),
  },
  example: ({ day, month, year, ...props }) => (
    <InputField type="date" value={`${year}-${month}-${day}`} {...props} />
  ),
});
