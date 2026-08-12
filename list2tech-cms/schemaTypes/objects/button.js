export default {

name:"button",

title:"Button",

type:"object",


fields:[

{
name:"label",
title:"Button Label",
type:"string"
},


{
name:"url",
title:"URL",
type:"string"
},


{
name:"style",
title:"Button Style",

type:"string",

options:{
list:[
"Primary",
"Secondary"
]
}

}

],


preview:{

select:{
title:"label",
subtitle:"style"
}

}

}