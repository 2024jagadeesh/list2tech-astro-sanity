import {defineType, defineField} from 'sanity'


export default defineType({

  name:'siteSettings',

  title:'Site Settings',

  type:'document',


  fields:[


    defineField({

      name:'siteName',

      title:'Site Name',

      type:'string',

    }),



    defineField({

      name:'logo',

      title:'Logo',

      type:'image',

      options:{
        hotspot:true
      }

    }),



    defineField({

      name:'headerMenu',

      title:'Header Menu',

      type:'array',

      of:[

        {

          type:'object',

          fields:[

            {

              name:'label',

              title:'Label',

              type:'string'

            },


            {

              name:'url',

              title:'URL',

              type:'string'

            }

          ]

        }

      ]

    }),



    defineField({

      name:'headerButton',

      title:'Header CTA Button',

      type:'object',

      fields:[


        {

          name:'label',

          title:'Label',

          type:'string'

        },


        {

          name:'url',

          title:'URL',

          type:'string'

        }


      ]

    }),





    // FOOTER


    defineField({

      name:'footerDescription',

      title:'Footer Description',

      type:'text'

    }),




    defineField({

      name:'footerColumns',

      title:'Footer Columns',

      type:'array',

      of:[

        {

          type:'object',

          fields:[


            {

              name:'title',

              title:'Column Title',

              type:'string'

            },



            {

              name:'links',

              title:'Links',

              type:'array',

              of:[

                {

                  type:'object',

                  fields:[


                    {

                      name:'label',

                      title:'Label',

                      type:'string'

                    },


                    {

                      name:'url',

                      title:'URL',

                      type:'string'

                    }


                  ]

                }

              ]

            }


          ]

        }

      ]

    }),




    defineField({

      name:'copyright',

      title:'Copyright Text',

      type:'string'

    })



  ]

})