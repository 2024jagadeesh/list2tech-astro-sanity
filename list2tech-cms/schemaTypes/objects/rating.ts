import {defineField, defineType} from 'sanity'

export const ratingType = defineType({
  name: 'rating',
  title: 'Rating',
  type: 'object',

  fields: [
    defineField({
      name: 'stars',
      title: 'Stars',
      type: 'string',
    }),

    defineField({
      name: 'reviewText',
      title: 'Review Text',
      type: 'string',
    }),

    defineField({
      name: 'score',
      title: 'Score',
      type: 'string',
    }),

    defineField({
      name: 'scoreLabel',
      title: 'Score Label',
      type: 'string',
    }),
  ],
})
