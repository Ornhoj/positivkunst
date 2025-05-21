export default {
  name: 'booking',
  type: 'document',
  title: 'Booking',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'iframe',
      type: 'text',
      title: 'Booking indlejrings kode',
      description: 'Indsæt kodestump du har modtaget af din booking leverandør her.'
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'Seo information'
    }
  ]
}
