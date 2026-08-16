import {defineField, defineType} from 'sanity'

export const badgeType = defineType({
  name: 'badge',
  title: 'Compliance Badge',
  type: 'object',

  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: ['green', 'blue', 'yellow', 'purple'],
      },
    }),
  ],
})
