import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'grid',
  title: 'Indholdsgrid',
  type: 'array',
  of: [
    defineArrayMember({ type: 'gridRTE', title: 'Tekst' }),
    defineArrayMember({ type: 'gridImageText', title: 'Billede + Tekst' }),
    defineArrayMember({ type: 'gridImage', title: 'Billede' }),
    defineArrayMember({ type: 'gridIframe', title: 'Kode indlejring' }),
    defineArrayMember({ type: 'gridPersons', title: 'Personale' })
  ]
});