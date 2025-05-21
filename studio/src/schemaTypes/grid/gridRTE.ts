import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gridRTE',
  title: 'Rich Text Editor',
  type: 'object',
  fields: [
    defineField({
      name: 'rte',
      type: 'rte',
      title: 'Rich Text Editor'
    })
  ],
  preview: {
    select: {
      rte: 'rte'
    },
    prepare (value) {
      const content = (value.rte || []).find(item => item._type === 'block')

      return {
        title: content
          ? content.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No title'
      }
    }
  }
});