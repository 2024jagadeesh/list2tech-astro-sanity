import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',

      of: [
        {type: 'heroSection'},
        {type: 'trustBarSection'},
        {type: 'whySection'},
        {type: 'listsSection'},
        {type: 'stepsSection'},
        {type: 'testimonialSection'},
        {type: 'ctaSection'},
      ],
    }),
  ],
})
