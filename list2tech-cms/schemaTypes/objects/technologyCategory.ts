import {defineField, defineType} from 'sanity'

export const technologyCategoryType = defineType({
  name: 'technologyCategory',
  title: 'Technology Category',
  type: 'object',

  fields: [
    defineField({
      name: 'tabName',
      title: 'Tab Name',
      type: 'string',
    }),

    defineField({
      name: 'panelTitle',
      title: 'Panel Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'tabName',
      subtitle: 'panelTitle',
    },

    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
})
