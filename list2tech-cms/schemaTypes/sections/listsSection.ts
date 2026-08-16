import {defineField, defineType} from 'sanity'

export const listsSectionType = defineType({
  name: 'listsSection',
  title: 'Technology Lists Section',
  type: 'object',

  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'categories',
      title: 'Technology Categories',
      type: 'array',
      of: [
        {
          type: 'technologyCategory',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'eyebrow',
    },

    prepare({title, subtitle}) {
      return {
        title: 'Technology Lists Section',
        subtitle: `${subtitle} - ${title}`,
      }
    },
  },
})
