export default {


name:"whySection",

title:"Why Section",

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
name:"description",

title:"Section Description",

type:"text"

},



{
name:"cards",

title:"Cards",

type:"array",

of:[

{
type:"featureCard"
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

title:"Why Section",

subtitle:`${subtitle} - ${title}`

}

}

}


}