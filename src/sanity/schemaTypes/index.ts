import { SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { course } from "./course";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, course],
};
