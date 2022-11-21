"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[6336],{7739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),o=a(94891),n=(a(74933),a(47507)),d=a(24310),p=a(63303),l=(a(75035),a(85162));const c={id:"place-order",title:"Place an order for a pet",description:"",sidebar_label:"Place an order for a pet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"",operationId:"placeOrder",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}},"application/xml":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}}}},400:{description:"Invalid Order",content:{"application/json":{example:{status:400,message:"Invalid Order"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}},examples:{OrderDelivered:{summary:"Order delivered",value:{quantity:4,shipDate:"2022-10-12",status:"delivered",requestId:"444-4444-444-4444"}},OrderPlaced:{summary:"Order placed",value:{quantity:10,shipDate:"2022-10-01",status:"placed",requestId:"111-222-333-444"}},OrderApproved:{summary:"Order approved",value:{quantity:1e3,shipDate:"2022-09-01",status:"approved",requestId:"000-111-222-333"}}}}},description:"order placed for purchasing the pet",required:!0},method:"post",path:"/store/order",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{quantity:1,shipDate:"2022-11-21",status:"placed",requestId:"string"},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Place an order for a pet",description:{content:"",type:"text/plain"},url:{path:["store","order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/petstore/swagger-petstore-yaml"},m=void 0,u={unversionedId:"petstore/place-order",id:"petstore/place-order",title:"Place an order for a pet",description:"",source:"@site/docs/petstore/place-order.api.mdx",sourceDirName:"petstore",slug:"/petstore/place-order",permalink:"/try-docusaurus-fullset/petstore/place-order",draft:!1,tags:[],version:"current",frontMatter:{id:"place-order",title:"Place an order for a pet",description:"",sidebar_label:"Place an order for a pet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"",operationId:"placeOrder",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}},"application/xml":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}}}}},400:{description:"Invalid Order",content:{"application/json":{example:{status:400,message:"Invalid Order"}}}}},requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{description:"Order ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},petId:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0}]},quantity:{type:"integer",format:"int32",minimum:1,default:1},shipDate:{description:"Estimated ship date",type:"string",format:"date-time"},status:{type:"string",description:"Order Status",enum:["placed","approved","delivered"]},complete:{description:"Indicates whenever order was completed or not",type:"boolean",default:!1,readOnly:!0},requestId:{description:"Unique Request Id",type:"string",writeOnly:!0}},xml:{name:"Order"}},examples:{OrderDelivered:{summary:"Order delivered",value:{quantity:4,shipDate:"2022-10-12",status:"delivered",requestId:"444-4444-444-4444"}},OrderPlaced:{summary:"Order placed",value:{quantity:10,shipDate:"2022-10-01",status:"placed",requestId:"111-222-333-444"}},OrderApproved:{summary:"Order approved",value:{quantity:1e3,shipDate:"2022-09-01",status:"approved",requestId:"000-111-222-333"}}}}},description:"order placed for purchasing the pet",required:!0},method:"post",path:"/store/order",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{quantity:1,shipDate:"2022-11-21",status:"placed",requestId:"string"},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Place an order for a pet",description:{content:"",type:"text/plain"},url:{path:["store","order"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/petstore/swagger-petstore-yaml"},sidebar:"petstore",previous:{title:"Returns pet inventories by status",permalink:"/try-docusaurus-fullset/petstore/get-inventory"},next:{title:"Find purchase order by ID",permalink:"/try-docusaurus-fullset/petstore/get-order-by-id"}},h={},y=[{value:"Place an order for a pet",id:"place-an-order-for-a-pet",level:2}],g={toc:y};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"place-an-order-for-a-pet"},"Place an order for a pet"),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"order placed for purchasing the pet"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"quantity",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shipDate",required:!1,schemaDescription:"Estimated ship date",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Order Status",schemaName:"string",qualifierMessage:"**Possible values:** [`placed`, `approved`, `delivered`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"requestId",required:!1,schemaDescription:"Unique Request Id",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"petId",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"quantity",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shipDate",required:!1,schemaDescription:"Estimated ship date",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Order Status",schemaName:"string",qualifierMessage:"**Possible values:** [`placed`, `approved`, `delivered`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"complete",required:!1,schemaDescription:"Indicates whenever order was completed or not",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "id": 0,\n  "petId": 0,\n  "quantity": 1,\n  "shipDate": "2022-11-21",\n  "status": "placed",\n  "complete": false\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(l.Z,{label:"application/xml",value:"application/xml",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"petId",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"quantity",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:1,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shipDate",required:!1,schemaDescription:"Estimated ship date",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"Order Status",schemaName:"string",qualifierMessage:"**Possible values:** [`placed`, `approved`, `delivered`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"complete",required:!1,schemaDescription:"Indicates whenever order was completed or not",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:"<root>\n  <id>0</id>\n  <petId>0</petId>\n  <quantity>1</quantity>\n  <shipDate>2022-11-21</shipDate>\n  <status>placed</status>\n  <complete>false</complete>\n</root>",language:"xml",mdxType:"ResponseSamples"}))))))),(0,i.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Invalid Order")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "status": 400,\n  "message": "Invalid Order"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);