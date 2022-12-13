"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[4343],{11384:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var s=o(87462),n=(o(67294),o(3905)),r=o(26389),a=(o(94891),o(74933)),i=(o(47507),o(24310),o(63303),o(75035),o(85162));const d={id:"delete-user",title:"Delete user",description:"This can only be done by the logged in user.",sidebar_label:"Delete user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"This can only be done by the logged in user.",operationId:"deleteUser",parameters:[{name:"username",in:"path",description:"The name that needs to be deleted",required:!0,schema:{type:"string"}}],responses:{400:{description:"Invalid username supplied"},404:{description:"User not found"}},method:"delete",path:"/user/{username}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN\n# ADDED A NEW LINE | ADDED A NEW LINE AGAIN\nThis is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Delete user",description:{content:"This can only be done by the logged in user.",type:"text/plain"},url:{path:["user",":username"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The name that needs to be deleted",type:"text/plain"},type:"any",value:"",key:"username"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"petstore/swagger-petstore-yaml",custom_edit_url:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/new?labels=documentation&template=documentation_problem.md&title=[Documentation] Requesting changes to 'Delete user' (delete-user)"},l=void 0,p={unversionedId:"petstore/delete-user",id:"petstore/delete-user",title:"Delete user",description:"This can only be done by the logged in user.",source:"@site/docs/petstore/delete-user.api.mdx",sourceDirName:"petstore",slug:"/petstore/delete-user",permalink:"/petstore/delete-user",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/new?labels=documentation&template=documentation_problem.md&title=[Documentation] Requesting changes to 'Delete user' (delete-user)",tags:[],version:"current",frontMatter:{id:"delete-user",title:"Delete user",description:"This can only be done by the logged in user.",sidebar_label:"Delete user",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"This can only be done by the logged in user.",operationId:"deleteUser",parameters:[{name:"username",in:"path",description:"The name that needs to be deleted",required:!0,schema:{type:"string"}}],responses:{400:{description:"Invalid username supplied"},404:{description:"User not found"}},method:"delete",path:"/user/{username}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN\n# ADDED A NEW LINE | ADDED A NEW LINE AGAIN\nThis is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Delete user",description:{content:"This can only be done by the logged in user.",type:"text/plain"},url:{path:["user",":username"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The name that needs to be deleted",type:"text/plain"},type:"any",value:"",key:"username"}]},method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"petstore/swagger-petstore-yaml",custom_edit_url:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/new?labels=documentation&template=documentation_problem.md&title=[Documentation] Requesting changes to 'Delete user' (delete-user)"},sidebar:"petstore",previous:{title:"Updated user",permalink:"/petstore/update-user"},next:{title:"Creates list of users with given input array",permalink:"/petstore/create-users-with-array-input"}},u={},c=[{value:"Delete user",id:"delete-user",level:2}],h={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"delete-user"},"Delete user"),(0,n.kt)("p",null,"This can only be done by the logged in user."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(a.Z,{className:"paramsItem",param:{name:"username",in:"path",description:"The name that needs to be deleted",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(i.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Invalid username supplied")),(0,n.kt)("div",null)),(0,n.kt)(i.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"User not found")),(0,n.kt)("div",null)))))}m.isMDXComponent=!0}}]);