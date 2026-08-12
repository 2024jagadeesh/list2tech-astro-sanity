export default {

name:"ctaSection",

title:"CTA Section",

type:"object",


fields:[


{
name:"eyebrow",
title:"Eyebrow",
type:"string"
},


{
name:"title",
title:"Title",
type:"string"
},


{
name:"description",
title:"Description",
type:"text"
},


{
name:"phone",
title:"Phone Number",
type:"string"
},


{
name:"email",
title:"Email Address",
type:"string"
},


{
name:"buttons",
title:"CTA Buttons",

type:"array",

of:[
{
type:"button"
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

title:"CTA Section",

subtitle:`${subtitle} - ${title}`

}

}

}


}