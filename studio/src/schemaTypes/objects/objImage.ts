import { defineField, defineType } from 'sanity';

/**
 * Image schema. Define and edit the fields for the 'image' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'objImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    // defineField({
    //   name: 'caption',
    //   title: 'Billede tekst',
    //   description: 'Kort ekstra beskrivelse til billedet, men ikke en decideret beskrivelse af billedets indhold',
    //   type: 'string',
    //   options: {
    //     isHighlighted: true,
    //   },
    // }),
    // defineField({
    //   name: 'alt',
    //   type: 'string',
    //   title: 'Alternativ tekst',
    //   description: 'Vigtig ift. SEO og tilgængelighed (skal beskrive indholdet af billedet). Efterlad tom hvis billedet er dekorativt',
    //   options: {
    //     isHighlighted: true,
    //   },
    // }),
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
    },
  },
});