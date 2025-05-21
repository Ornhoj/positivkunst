import { defineField, defineType } from 'sanity';

/**
 * News schema. Define and edit the fields for the 'news' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'news',
  title: 'Nyheder',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Overskrift',
    }),
    defineField({
      name: 'teaser',
      type: 'text',
      title: 'Teaser',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
    defineField({
      name: 'published',
      type: 'boolean',
      title: 'Aktiver nyheden',
      description: 'Gør nyheden synlig på hjemmesiden',
      options: {
        layout: 'checkbox',
      },
    }),
  ],
});