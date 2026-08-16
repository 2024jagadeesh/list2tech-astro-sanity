import {defineField, defineType} from 'sanity'

export const stepsSectionType = defineType({
  name: 'stepsSection',
  title: 'How It Works Section',
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
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'step',
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
        title: 'How It Works Section',
        subtitle: `${subtitle} - ${title}`,
      }
    },
  },
})
