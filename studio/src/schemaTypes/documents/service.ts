import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Behandling',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Overskrift',
      description: 'Overskrift til visning på siden.',
    }),
    defineField({
      name: 'url',
      type: 'slug',
      title: 'URL',
      description: 'Unik url til pænere link stier',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('url skal genereres.'),
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
    defineField({
      name: 'grid',
      type: 'grid',
      title: 'Indhold',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
    }),
  ],
});