import { defineField, defineType } from 'sanity';

/**
 * Image Text schema. Define and edit the fields for the 'imageText' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const imageText = defineType({
  name: 'imageText',
  title: 'Billede og text',
  type: 'object',
  fields: [
    defineField({
      name: 'rte',
      type: 'rte',
      title: 'RTE',
    }),
    defineField({
      name: 'image',
      type: 'objImage',
      title: 'Image',
    }),
    defineField({
      name: 'imageRight',
      type: 'boolean',
      title: 'Billede til højre for teksten?',
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      name: 'hidePattern',
      type: 'boolean',
      title: 'Skjul visitkort grafik?',
      options: {
        layout: 'checkbox',
      },
    }),
  ],
});