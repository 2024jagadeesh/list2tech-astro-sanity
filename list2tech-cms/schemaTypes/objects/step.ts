import {defineField, defineType} from 'sanity'

export const stepType = defineType({
  name: 'step',
  title: 'Step',
  type: 'object',

  fields: [
    defineField({
      name: 'number',
      title: 'Step Number',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Step Description',
      type: 'text',
    }),
  ],
})
