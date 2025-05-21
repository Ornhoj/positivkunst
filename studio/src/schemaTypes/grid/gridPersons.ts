import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'gridPersons',
  title: 'Personale',
  type: 'object',
  fields: [
    defineField({
      name: 'hidePattern',
      type: 'boolean',
      title: 'Skjul visitkort grafik?',
      options: { layout: 'checkbox' }
    }),
    defineField({
      name: 'personale',
      type: 'array',
      title: 'Personale',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'person' }]
        })
      ]
    })
  ],
  preview: {
    select: {
      personale: 'personale'
    },
    prepare (value) {
      return {
        title: `Personale: ${(value.personale || []).length || 'Ingen'} valgt`
      }
    }
  }
});
