import { defineField, defineType } from 'sanity';

/**
 * Footer schema. Define and edit the fields for the 'footer' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
      name: 'address',
      type: 'rte',
      title: 'Adresse information',
    }),
  ],
});