import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'person',
  title: 'Person Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navn',
      type: 'string',
      description: 'Indtast fornavn og evt. efternavn',
    }),
    defineField({
      name: 'rte',
      title: 'Fritekst',
      type: 'rte',
    }),
    defineField({
      name: 'image',
      title: 'Billede',
      type: 'objImage',
    }),
  ],
});