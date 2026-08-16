import {defineField, defineType} from 'sanity'

export const statType = defineType({
  name: 'stat',
  title: 'Statistics',
  type: 'object',

  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
    }),

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
  ],
})
