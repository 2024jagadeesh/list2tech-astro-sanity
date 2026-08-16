import {defineField, defineType} from 'sanity'

export const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',

  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),

    defineField({
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        list: ['Primary', 'Secondary'],
      },
    }),
  ],

  preview: {
    select: {
      title: 'label',
      subtitle: 'style',
    },
  },
})
