export default {


name:"listsSection",

title:"Technology Lists Section",

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

title:"Description",

type:"text"

},



{
name:"categories",

title:"Technology Categories",

type:"array",

of:[

{
type:"technologyCategory"
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

title:"Technology Lists Section",

subtitle:`${subtitle} - ${title}`

}

}

}


}