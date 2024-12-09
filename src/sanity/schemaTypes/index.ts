import { SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { course } from "./course";
import { playlist } from "./playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, course, playlist],
};
