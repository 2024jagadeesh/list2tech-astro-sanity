import {defineField, defineType} from 'sanity'

export const trustBarSectionType = defineType({
  name: 'trustBarSection',
  title: 'Trust Bar Section',
  type: 'object',

  fields: [
    defineField({
      name: 'items',
      title: 'Trust Items',
      type: 'array',
      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
            }),

            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'SVG icon name or emoji',
            }),
          ],

          preview: {
            select: {
              title: 'text',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      items: 'items',
    },

    prepare({items}) {
      return {
        title: 'Trust Bar Section',
        subtitle: items?.length ? `${items.length} trust items` : 'No trust items added',
      }
    },
  },
})
