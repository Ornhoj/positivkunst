import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gridIframe',
  title: 'Indlejring',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Overskrift/Beskrivelse'
    }),
    defineField({
      name: 'iframe',
      type: 'text',
      title: 'Iframe indlejring',
      description: 'Indsæt iframe embed kode herunder. OBS på evt. cookies'
    })
  ]
});