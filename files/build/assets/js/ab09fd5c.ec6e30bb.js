"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[1245],{74862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var s=r(87462),o=(r(67294),r(3905)),n=r(26389),i=r(94891),a=(r(74933),r(47507)),p=r(24310),l=r(63303),c=(r(75035),r(85162));const d={id:"subscribe-to-the-store-events",title:"Subscribe to the Store events",description:"Add subscription for a store events",sidebar_label:"Subscribe to the Store events",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"Add subscription for a store events",requestBody:{content:{"application/json":{schema:{type:"object",properties:{callbackUrl:{type:"string",format:"uri",description:"This URL will be called by the server when the desired event will occur",example:"https://myserver.com/send/callback/here"},eventName:{type:"string",description:"Event name for the subscription",enum:["orderInProgress","orderShipped","orderDelivered"],example:"orderInProgress"}},required:["callbackUrl","eventName"]}}}},responses:{201:{description:"Subscription added",content:{"application/json":{schema:{type:"object",properties:{subscriptionId:{type:"string",example:"AAA-123-BBB-456"}}}}}}},callbacks:{orderInProgress:{"{$request.body#/callbackUrl}?event={$request.body#/eventName}":{servers:[{url:"//callback-url.path-level/v1",description:"Path level server 1"},{url:"//callback-url.path-level/v2",description:"Path level server 2"}],post:{summary:"Order in Progress (Summary)",description:'A callback triggered every time an Order is updated status to "inProgress" (Description)',externalDocs:{description:"Find out more",url:"https://more-details.com/demo"},requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"},status:{type:"string",example:"inProgress"}}}},"application/xml":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"}}},example:'<?xml version="1.0" encoding="UTF-8"?>\n<root>\n  <orderId>123</orderId>\n  <status>inProgress</status>\n  <timestamp>2018-10-19T16:46:45Z</timestamp>\n</root>\n'}}},responses:{200:{description:"Callback successfully processed and no retries will be performed",content:{"application/json":{schema:{type:"object",properties:{someProp:{type:"string",example:"123"}}}}}},299:{description:"Response for cancelling subscription"},500:{description:"Callback processing failed and retries will be performed"}},"x-codeSamples":[{lang:"C#",source:'PetStore.v1.Pet pet = new PetStore.v1.Pet();\npet.setApiKey("your api key");\npet.petType = PetStore.v1.Pet.TYPE_DOG;\npet.name = "Rex";\n// set other fields\nPetStoreResponse response = pet.create();\nif (response.statusCode == HttpStatusCode.Created)\n{\n  // Successfully created\n}\nelse\n{\n  // Something wrong -- check response for errors\n  Console.WriteLine(response.getRawResponse());\n}\n'},{lang:"PHP",source:'$form = new PetStoreEntitiesPet();\n$form->setPetType("Dog");\n$form->setName("Rex");\n// set other fields\ntry {\n    $pet = $client->pets()->create($form);\n} catch (UnprocessableEntityException $e) {\n    var_dump($e->getErrors());\n}\n'}]},put:{description:"Order in Progress (Only Description)",servers:[{url:"//callback-url.operation-level/v1",description:"Operation level server 1 (Operation override)"},{url:"//callback-url.operation-level/v2",description:"Operation level server 2 (Operation override)"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"},status:{type:"string",example:"inProgress"}}}},"application/xml":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"}}},example:'<?xml version="1.0" encoding="UTF-8"?>\n<root>\n  <orderId>123</orderId>\n  <status>inProgress</status>\n  <timestamp>2018-10-19T16:46:45Z</timestamp>\n</root>\n'}}},responses:{200:{description:"Callback successfully processed and no retries will be performed",content:{"application/json":{schema:{type:"object",properties:{someProp:{type:"string",example:"123"}}}}}}}}}},orderShipped:{"{$request.body#/callbackUrl}?event={$request.body#/eventName}":{post:{description:"A callback triggered every time an Order is shipped to the recipient",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"},estimatedDeliveryDate:{type:"string",format:"date-time",example:"2018-11-11T16:00:00Z"}}}}}},responses:{200:{description:"Callback successfully processed and no retries will be performed"}}}}},orderDelivered:{"http://notificationServer.com?url={$request.body#/callbackUrl}&event={$request.body#/eventName}":{post:{deprecated:!0,summary:"Order delivered",description:"A callback triggered every time an Order is delivered to the recipient",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"}}}}}},responses:{200:{description:"Callback successfully processed and no retries will be performed"}}}}}},method:"post",path:"/store/subscribe",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{callbackUrl:"https://myserver.com/send/callback/here",eventName:"orderInProgress"},info:{description:"# ADD SOME MORE UPDATES\n# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN\n# ADDED A NEW LINE | ADDED A NEW LINE AGAIN\n# I ALSO EDITED THIS LINE\n# ADD MORE LINES!!!!!\n# This should not conflicting\nThis is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Subscribe to the Store events",description:{content:"Add subscription for a store events",type:"text/plain"},url:{path:["store","subscribe"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"petstore_versioned/swagger-petstore-yaml"},m=void 0,u={unversionedId:"petstore_versioned/subscribe-to-the-store-events",id:"petstore_versioned/subscribe-to-the-store-events",title:"Subscribe to the Store events",description:"Add subscription for a store events",source:"@site/docs/petstore_versioned/subscribe-to-the-store-events.api.mdx",sourceDirName:"petstore_versioned",slug:"/petstore_versioned/subscribe-to-the-store-events",permalink:"/petstore_versioned/subscribe-to-the-store-events",draft:!1,tags:[],version:"current",frontMatter:{id:"subscribe-to-the-store-events",title:"Subscribe to the Store events",description:"Add subscription for a store events",sidebar_label:"Subscribe to the Store events",hide_title:!0,hide_table_of_contents:!0,api:{tags:["store"],description:"Add subscription for a store events",requestBody:{content:{"application/json":{schema:{type:"object",properties:{callbackUrl:{type:"string",format:"uri",description:"This URL will be called by the server when the desired event will occur",example:"https://myserver.com/send/callback/here"},eventName:{type:"string",description:"Event name for the subscription",enum:["orderInProgress","orderShipped","orderDelivered"],example:"orderInProgress"}},required:["callbackUrl","eventName"]}}}},responses:{201:{description:"Subscription added",content:{"application/json":{schema:{type:"object",properties:{subscriptionId:{type:"string",example:"AAA-123-BBB-456"}}}}}}},callbacks:{orderInProgress:{"{$request.body#/callbackUrl}?event={$request.body#/eventName}":{servers:[{url:"//callback-url.path-level/v1",description:"Path level server 1"},{url:"//callback-url.path-level/v2",description:"Path level server 2"}],post:{summary:"Order in Progress (Summary)",description:'A callback triggered every time an Order is updated status to "inProgress" (Description)',externalDocs:{description:"Find out more",url:"https://more-details.com/demo"},requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"},status:{type:"string",example:"inProgress"}}}},"application/xml":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"}}},example:'<?xml version="1.0" encoding="UTF-8"?>\n<root>\n  <orderId>123</orderId>\n  <status>inProgress</status>\n  <timestamp>2018-10-19T16:46:45Z</timestamp>\n</root>\n'}}},responses:{200:{description:"Callback successfully processed and no retries will be performed",content:{"application/json":{schema:{type:"object",properties:{someProp:{type:"string",example:"123"}}}}}},299:{description:"Response for cancelling subscription"},500:{description:"Callback processing failed and retries will be performed"}},"x-codeSamples":[{lang:"C#",source:'PetStore.v1.Pet pet = new PetStore.v1.Pet();\npet.setApiKey("your api key");\npet.petType = PetStore.v1.Pet.TYPE_DOG;\npet.name = "Rex";\n// set other fields\nPetStoreResponse response = pet.create();\nif (response.statusCode == HttpStatusCode.Created)\n{\n  // Successfully created\n}\nelse\n{\n  // Something wrong -- check response for errors\n  Console.WriteLine(response.getRawResponse());\n}\n'},{lang:"PHP",source:'$form = new \\PetStore\\Entities\\Pet();\n$form->setPetType("Dog");\n$form->setName("Rex");\n// set other fields\ntry {\n    $pet = $client->pets()->create($form);\n} catch (UnprocessableEntityException $e) {\n    var_dump($e->getErrors());\n}\n'}]},put:{description:"Order in Progress (Only Description)",servers:[{url:"//callback-url.operation-level/v1",description:"Operation level server 1 (Operation override)"},{url:"//callback-url.operation-level/v2",description:"Operation level server 2 (Operation override)"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"},status:{type:"string",example:"inProgress"}}}},"application/xml":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"}}},example:'<?xml version="1.0" encoding="UTF-8"?>\n<root>\n  <orderId>123</orderId>\n  <status>inProgress</status>\n  <timestamp>2018-10-19T16:46:45Z</timestamp>\n</root>\n'}}},responses:{200:{description:"Callback successfully processed and no retries will be performed",content:{"application/json":{schema:{type:"object",properties:{someProp:{type:"string",example:"123"}}}}}}}}}},orderShipped:{"{$request.body#/callbackUrl}?event={$request.body#/eventName}":{post:{description:"A callback triggered every time an Order is shipped to the recipient",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"},estimatedDeliveryDate:{type:"string",format:"date-time",example:"2018-11-11T16:00:00Z"}}}}}},responses:{200:{description:"Callback successfully processed and no retries will be performed"}}}}},orderDelivered:{"http://notificationServer.com?url={$request.body#/callbackUrl}&event={$request.body#/eventName}":{post:{deprecated:!0,summary:"Order delivered",description:"A callback triggered every time an Order is delivered to the recipient",requestBody:{content:{"application/json":{schema:{type:"object",properties:{orderId:{type:"string",example:"123"},timestamp:{type:"string",format:"date-time",example:"2018-10-19T16:46:45Z"}}}}}},responses:{200:{description:"Callback successfully processed and no retries will be performed"}}}}}},method:"post",path:"/store/subscribe",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"},{url:"http://127.0.0.1:4010",description:"Prism Mock API (local)"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{callbackUrl:"https://myserver.com/send/callback/here",eventName:"orderInProgress"},info:{description:"# ADD SOME MORE UPDATES\n# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN\n# ADDED A NEW LINE | ADDED A NEW LINE AGAIN\n# I ALSO EDITED THIS LINE\n# ADD MORE LINES!!!!!\n# This should not conflicting\nThis is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Subscribe to the Store events",description:{content:"Add subscription for a store events",type:"text/plain"},url:{path:["store","subscribe"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"petstore_versioned/swagger-petstore-yaml"},sidebar:"petstore-2.0.0",previous:{title:"Delete purchase order by ID",permalink:"/petstore_versioned/delete-order"},next:{title:"Users",permalink:"/petstore_versioned/user"}},h={},g=[{value:"Subscribe to the Store events",id:"subscribe-to-the-store-events",level:2}],b={toc:g};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"subscribe-to-the-store-events"},"Subscribe to the Store events"),(0,o.kt)("p",null,"Add subscription for a store events"),(0,o.kt)(i.Z,{mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"callbackUrl",required:!0,schemaDescription:"This URL will be called by the server when the desired event will occur",schemaName:"uri",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(p.Z,{collapsible:!1,name:"eventName",required:!0,schemaDescription:"Event name for the subscription",schemaName:"string",qualifierMessage:"**Possible values:** [`orderInProgress`, `orderShipped`, `orderDelivered`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,o.kt)("div",null,(0,o.kt)(n.Z,{mdxType:"ApiTabs"},(0,o.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Subscription added")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"SchemaTabs"},(0,o.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(p.Z,{collapsible:!1,name:"subscriptionId",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(a.Z,{responseExample:'{\n  "subscriptionId": "AAA-123-BBB-456"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);