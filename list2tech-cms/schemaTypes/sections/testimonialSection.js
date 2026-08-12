export default {


name:"testimonialSection",

title:"Testimonials Section",

type:"object",



fields:[


{
name:"eyebrow",

title:"Eyebrow",

type:"string"

},


{
name:"title",

title:"Section Title",

type:"string"

},



{
name:"testimonials",

title:"Testimonials",

type:"array",

of:[

{
type:"testimonial"
}

]

}


],



preview: {

select: {

title:"title",

subtitle:"eyebrow"

},


prepare({title, subtitle}) {

return {

title:"Testimonials Section",

subtitle:`${subtitle} - ${title}`

}

}

}


}