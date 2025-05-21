import { defineField, defineType } from 'sanity';

export const aboutus = defineType({
  name: 'aboutus',
  title: 'Om os',
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
      title: 'Om os',
    },
  },
});