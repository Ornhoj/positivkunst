import { defineField, defineType } from "sanity"

export default defineType({
  name: 'gridImageText',
  type: 'object',
  title: 'Billede og text',
  fields: [
    defineField({name: 'imageText', type: 'imageText', title: 'Billde + tekst'})
  ],
  preview: {
    select: {
      imageText: 'imageText'
    },
    prepare (value) {
      const {rte, image = null} = value.imageText
      const content = (rte || []).find(item => item._type === 'block')

      return {
        title: content
          ? content.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No title',
        media: image && image.asset
      }
    }
  }
})
