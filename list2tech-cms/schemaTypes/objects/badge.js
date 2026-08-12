export default {

name:"badge",

title:"Compliance Badge",

type:"object",

fields:[

{
name:"icon",
title:"Icon",
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
type:"string"
},


{
name:"color",

title:"Color",

type:"string",

options:{
list:[
"green",
"blue",
"yellow",
"purple"
]
}

}

]

}