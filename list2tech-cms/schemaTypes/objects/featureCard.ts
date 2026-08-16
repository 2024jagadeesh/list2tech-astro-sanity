import {defineField, defineType} from 'sanity'

export const featureCardType = defineType({
  name: 'featureCard',
  title: 'Feature Card',
  type: 'object',

  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Card Description',
      type: 'text',
    }),
  ],
})
