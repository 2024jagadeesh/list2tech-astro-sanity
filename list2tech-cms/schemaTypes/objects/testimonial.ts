import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',

  fields: [
    defineField({
      name: 'stars',
      title: 'Rating Stars',
      type: 'string',
    }),

    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
    }),

    defineField({
      name: 'avatar',
      title: 'Avatar Text',
      type: 'string',
      description: 'Example: M, J, R',
    }),

    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
    }),

    defineField({
      name: 'role',
      title: 'Author Role',
      type: 'string',
    }),
  ],
})
