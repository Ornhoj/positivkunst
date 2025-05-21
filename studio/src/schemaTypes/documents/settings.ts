import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Opsætning',
  type: 'document',
  fields: [
    defineField({
      name: 'site_name',
      type: 'string',
      title: 'Sidens navn'
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'Seo information'
    }),
    defineField({
      name: 'news',
      type: 'news',
      title: 'Nyhedsboks'
    }),
    defineField({
      name: 'footer',
      type: 'footer',
      title: 'Footer information'
    })
  ]
});