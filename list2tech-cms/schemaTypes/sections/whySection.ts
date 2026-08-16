import {defineField, defineType} from 'sanity'

export const whySectionType = defineType({
  name: 'whySection',
  title: 'Why Section',
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
      title: 'Section Description',
      type: 'text',
    }),

    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'featureCard',
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
        title: 'Why Section',
        subtitle: `${subtitle} - ${title}`,
      }
    },
  },
})
