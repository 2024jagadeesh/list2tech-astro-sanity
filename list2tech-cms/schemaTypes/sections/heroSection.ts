import {defineField, defineType} from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',

  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    }),

    defineField({
      name: 'highlightText',
      title: 'Highlighted Text',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Button Label',
              type: 'string',
            }),

            defineField({
              name: 'url',
              title: 'Button URL',
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
        },
      ],
    }),

    // RIGHT SIDE PANEL

    defineField({
      name: 'panelTitle',
      title: 'Right Panel Title',
      type: 'string',
    }),

    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
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
        },
      ],
    }),

    // BADGES

    defineField({
      name: 'badges',
      title: 'Compliance Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Emoji',
              type: 'string',
            }),

            defineField({
              name: 'title',
              title: 'Badge Title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              title: 'Badge Description',
              type: 'string',
            }),

            defineField({
              name: 'color',
              title: 'Badge Color',
              type: 'string',
              options: {
                list: ['green', 'blue', 'yellow', 'purple'],
              },
            }),
          ],
        },
      ],
    }),

    // RATING

    defineField({
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
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },

    prepare({title, subtitle}) {
      return {
        title: 'Hero Section',
        subtitle: `${subtitle} - ${title}`,
      }
    },
  },
})
