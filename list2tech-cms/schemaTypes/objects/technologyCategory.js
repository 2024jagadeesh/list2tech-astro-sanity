export default {

name:"technologyCategory",

title:"Technology Category",

type:"object",


fields:[


{
name:"tabName",
title:"Tab Name",
type:"string"
},


{
name:"panelTitle",
title:"Panel Title",
type:"string"
},


{
name:"description",
title:"Description",
type:"text"
},


{
name:"technologies",
title:"Technologies",
type:"array",

of:[
{
type:"string"
}
]

}


],



preview:{

select:{

title:"tabName",

subtitle:"panelTitle"

},


prepare({title,subtitle}){

return {

title:title,

subtitle:subtitle

}

}

}


}