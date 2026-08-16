import {defineField, defineType} from 'sanity'

export const testimonialSectionType = defineType({
  name: 'testimonialSection',
  title: 'Testimonials Section',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'testimonial',
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
        title: 'Testimonials Section',
        subtitle: `${subtitle} - ${title}`,
      }
    },
  },
})
