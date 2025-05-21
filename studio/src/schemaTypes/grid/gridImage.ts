import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gridImage',
  title: 'Billede',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'objImage',
      title: 'Billede'
    }),
    defineField({
      name: 'alignment',
      type: 'string',
      title: 'Placering af billede',
      description: 'Har kun effekt når valgte billede bredde er andet end 100%.',
      options: {
        list: [
          { title: 'Venstre', value: 'left' },
          { title: 'Centreret', value: 'center' },
          { title: 'Højre', value: 'right' }
        ]
      }
    }),
    defineField({
      name: 'imageWidth',
      type: 'string',
      title: 'Sæt billede bredde',
      options: {
        list: [
          { title: 'Bredde: 100%', value: '100' },
          { title: 'Bredde: 75%', value: '75' },
          { title: 'Bredde: 66%', value: '66' },
          { title: 'Bredde: 50%', value: '50' },
          { title: 'Bredde: 33%', value: '33' },
          { title: 'Bredde: 25%', value: '25' }
        ]
      }
    })
  ],
  preview: {
    select: {
      image: 'image'
    }
  }
});