export default {


name:"stepsSection",

title:"How It Works Section",

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
name:"steps",

title:"Steps",

type:"array",

of:[

{
type:"step"
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

title:"How It Works Section",

subtitle:`${subtitle} - ${title}`

}

}

}


}