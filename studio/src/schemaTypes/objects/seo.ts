import { defineField, defineType } from 'sanity';

/**
 * SEO schema. Define and edit the fields for the 'seo' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const seo = defineType({
  name: 'seo',
  title: 'Seo object',
  type: 'object',
  options: {collapsible: true},
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Manchet',
    }),
    defineField({
      name: 'objImage',
      title: 'Image',
      type: 'objImage',
    }),
    defineField({
      name: 'author',
      type: 'string',
      title: 'Forfatter',
    }),
  ],
});