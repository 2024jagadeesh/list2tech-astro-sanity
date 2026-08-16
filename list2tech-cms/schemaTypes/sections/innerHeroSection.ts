import {defineField, defineType} from 'sanity'

export const innerHeroSectionType = defineType({
  name: 'innerHeroSection',
  title: 'Inner Page Hero',
  type: 'object',

  fields: [
    defineField({
      name: 'breadcrumbCurrent',
      title: 'Current Page Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),

    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'highlightText',
      title: 'Highlighted Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
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
      ],
    }),

    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
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
      ],
    }),

    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
    }),

    defineField({
      name: 'imageBadge',
      title: 'Image Badge',
      type: 'string',
    }),

    defineField({
      name: 'statNumber',
      title: 'Stat Number',
      type: 'string',
    }),

    defineField({
      name: 'statLabel',
      title: 'Stat Label',
      type: 'string',
    }),

    defineField({
      name: 'imageLabel',
      title: 'Image Bottom Label',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'breadcrumbCurrent',
      media: 'image',
    },

    prepare({title, subtitle, media}) {
      return {
        title: 'Inner Page Hero',
        subtitle: `${subtitle || ''} - ${title || ''}`,
        media,
      }
    },
  },
})
