import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceList',
  title: 'Behandlinger',
  type: 'document',
  fields: [
    {
      name: 'intro',
      type: 'intro'
    },
    {
      title: 'Behandlinger',
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'service'
            }
          ]
        }
      ]
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'Seo information'
    }
  ],
  initialValue: {
    name: 'Behandlinger'
  }
});