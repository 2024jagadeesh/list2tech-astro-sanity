export default {

name:"heroSection",

title:"Hero Section",

type:"object",

fields:[


{
name:"eyebrow",
title:"Eyebrow Text",
type:"string"
},


{
name:"heading",
title:"Main Heading",
type:"string"
},


{
name:"highlightText",
title:"Highlighted Text",
type:"string"
},


{
name:"description",
title:"Description",
type:"text"
},



{
name:"buttons",
title:"Buttons",

type:"array",

of:[

{
type:"object",

fields:[

{
name:"label",
title:"Button Label",
type:"string"
},


{
name:"url",
title:"Button URL",
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

]

}

]

},



// RIGHT SIDE PANEL

{
name:"panelTitle",
title:"Right Panel Title",
type:"string"
},



{
name:"stats",

title:"Statistics",

type:"array",

of:[

{
type:"object",

fields:[

{
name:"number",
title:"Number",
type:"string"
},


{
name:"label",
title:"Label",
type:"string"
}

]

}

]

},



// BADGES

{
name:"badges",

title:"Compliance Badges",

type:"array",

of:[

{
type:"object",

fields:[

{
name:"icon",
title:"Icon Emoji",
type:"string"
},


{
name:"title",
title:"Badge Title",
type:"string"
},


{
name:"description",
title:"Badge Description",
type:"string"
},


{
name:"color",
title:"Badge Color",
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

]

},



// RATING


{
name:"rating",

title:"Rating",

type:"object",

fields:[


{
name:"stars",
title:"Stars",
type:"string"
},


{
name:"reviewText",
title:"Review Text",
type:"string"
},


{
name:"score",
title:"Score",
type:"string"
},


{
name:"scoreLabel",
title:"Score Label",
type:"string"
}


]

    }


  ],


  preview: {

    select: {

      title: "heading",

      subtitle: "eyebrow"

    },


    prepare({title, subtitle}) {

      return {

        title: "Hero Section",

        subtitle: `${subtitle} - ${title}`

      }

    }

  }


}