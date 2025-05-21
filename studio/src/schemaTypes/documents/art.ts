import { defineField, defineType } from 'sanity';

/**
 * Art schema. Define and edit the fields for the 'art' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'art',
  title: 'Art',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'intro',
    }),
    defineField({
      name: 'grid',
      title: 'Indhold',
      type: 'grid',
    }),
    defineField({
      name: 'seo',
      title: 'Seo information',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'Kunst',
    },
  },
});