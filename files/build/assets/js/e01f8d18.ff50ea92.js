"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[4974],{21048:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=o(87462),n=(o(67294),o(3905)),r=o(26389),i=(o(94891),o(74933),o(47507),o(24310),o(63303),o(75035),o(85162));const a={id:"logout-user",title:"Logs out current logged in user session",description:"",sidebar_label:"Logs out current logged in user session",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"logoutUser",responses:{default:{description:"successful operation"}},method:"get",path:"/user/logout",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"# ADD SOME MORE UPDATES\n# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN\n# ADDED A NEW LINE | ADDED A NEW LINE AGAIN\n# I ALSO EDITED THIS LINE\n# ADD MORE LINES!!!!!\n# This should not conflicting\nThis is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Logs out current logged in user session",description:{content:"",type:"text/plain"},url:{path:["user","logout"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"petstore_versioned/swagger-petstore-yaml"},p=void 0,d={unversionedId:"petstore_versioned/logout-user",id:"petstore_versioned/logout-user",title:"Logs out current logged in user session",description:"",source:"@site/docs/petstore_versioned/logout-user.api.mdx",sourceDirName:"petstore_versioned",slug:"/petstore_versioned/logout-user",permalink:"/petstore_versioned/logout-user",draft:!1,tags:[],version:"current",frontMatter:{id:"logout-user",title:"Logs out current logged in user session",description:"",sidebar_label:"Logs out current logged in user session",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"logoutUser",responses:{default:{description:"successful operation"}},method:"get",path:"/user/logout",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"# ADD SOME MORE UPDATES\n# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN\n# ADDED A NEW LINE | ADDED A NEW LINE AGAIN\n# I ALSO EDITED THIS LINE\n# ADD MORE LINES!!!!!\n# This should not conflicting\nThis is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Logs out current logged in user session",description:{content:"",type:"text/plain"},url:{path:["user","logout"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},sidebar_class_name:"get api-method",info_path:"petstore_versioned/swagger-petstore-yaml"},sidebar:"petstore-2.0.0",previous:{title:"Logs user into the system",permalink:"/petstore_versioned/login-user"}},c={},l=[{value:"Logs out current logged in user session",id:"logs-out-current-logged-in-user-session",level:2}],u={toc:l};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"logs-out-current-logged-in-user-session"},"Logs out current logged in user session"),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(i.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null)))))}g.isMDXComponent=!0}}]);