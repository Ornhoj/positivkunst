import { defineField, defineType } from 'sanity';

/**
 * Intro schema. Define and edit the fields for the 'intro' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const intro = defineType({
  name: 'intro',
  title: 'Intro',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Overskrift',
      description: 'Overskrift til visning på siden.',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Manchet',
    }),
    defineField({
      name: 'logo',
      type: 'string',
      title: 'Logo farve',
      description: 'Vælg logo farve til at matche evt. billede bedre. (Guld er standard)',
      options: {
        list: ['gold', 'white', 'black', 'art-gold', 'art-white', 'art-black'],
      },
    }),
    defineField({
      name: 'image',
      type: 'objImage',
      title: 'Hero billede',
    }),
  ],
});