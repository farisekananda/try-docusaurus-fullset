"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[5081],{21952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>l,toc:()=>y});var o=a(87462),s=(a(67294),a(3905)),n=a(26389),i=a(94891),r=(a(74933),a(47507),a(24310)),c=(a(63303),a(75035),a(85162));const u={id:"generating-an-iam-token",title:"Generating an IAM token",description:"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your [IAM API key](https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys) IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.",sidebar_label:"Generating an IAM token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Authentication"],description:"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your [IAM API key](https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys) IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.\nEach user who is calling the API must pass credentials for the API to authenticate.\n\nYou can generate an IAM token by using either your IBM Cloud API key or a service ID's API key.\nThe API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account.\nThis process is also used if you are developing an application that needs to work with other IBM Cloud services.\nYou must use a service ID API key to get an access token to be passed to each of the IBM Cloud services.\n\n:::note\nAn access token is a temporary credential that expires after 1 hour.\nAfter the acquired token expires, you must generate a new token to continue calling IBM Cloud or service APIs, and you can perform only actions that are allowed by your level of assigned access within all accounts.\n:::",requestBody:{content:{"application/x-www-form-urlencoded":{schema:{type:"object",properties:{grant_type:{type:"string",enum:["urn:ibm:params:oauth:grant-type:apikey"]},apikey:{type:"string"}},required:["grant_type","apikey"]}}},required:!0},security:[{"//":[]}],responses:{200:{description:"ok"}},method:"post",path:"/identity/token",servers:[{url:"https://s3.{region}.cloud-object-storage.appdomain.cloud",variables:{region:{enum:["us","eu","ap","us-south","us-east","eu-gb","eu-de","au-syd","jp-tok","ams03","che01","hkg02","mex01","mil01","mon01","osl01","par01","sjc04","sao01","seo01","sng01","tor01"],default:"us"}}}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},info:{title:"Cloud Object Storage",version:"1.0.1"},postman:{name:"Generating an IAM token",description:{content:"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your [IAM API key](https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys) IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.\nEach user who is calling the API must pass credentials for the API to authenticate.\n\nYou can generate an IAM token by using either your IBM Cloud API key or a service ID's API key.\nThe API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account.\nThis process is also used if you are developing an application that needs to work with other IBM Cloud services.\nYou must use a service ID API key to get an access token to be passed to each of the IBM Cloud services.\n\n:::note\nAn access token is a temporary credential that expires after 1 hour.\nAfter the acquired token expires, you must generate a new token to continue calling IBM Cloud or service APIs, and you can perform only actions that are allowed by your level of assigned access within all accounts.\n:::",type:"text/plain"},url:{path:["identity","token"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"POST",body:{mode:"urlencoded",urlencoded:[]}}},sidebar_class_name:"post api-method",info_path:"cos/cloud-object-storage"},d=void 0,l={unversionedId:"cos/generating-an-iam-token",id:"cos/generating-an-iam-token",title:"Generating an IAM token",description:"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your [IAM API key](https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys) IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.",source:"@site/docs/cos/generating-an-iam-token.api.mdx",sourceDirName:"cos",slug:"/cos/generating-an-iam-token",permalink:"/cos/generating-an-iam-token",draft:!1,tags:[],version:"current",frontMatter:{id:"generating-an-iam-token",title:"Generating an IAM token",description:"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your [IAM API key](https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys) IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.",sidebar_label:"Generating an IAM token",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Authentication"],description:"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your [IAM API key](https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys) IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.\nEach user who is calling the API must pass credentials for the API to authenticate.\n\nYou can generate an IAM token by using either your IBM Cloud API key or a service ID's API key.\nThe API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account.\nThis process is also used if you are developing an application that needs to work with other IBM Cloud services.\nYou must use a service ID API key to get an access token to be passed to each of the IBM Cloud services.\n\n:::note\nAn access token is a temporary credential that expires after 1 hour.\nAfter the acquired token expires, you must generate a new token to continue calling IBM Cloud or service APIs, and you can perform only actions that are allowed by your level of assigned access within all accounts.\n:::",requestBody:{content:{"application/x-www-form-urlencoded":{schema:{type:"object",properties:{grant_type:{type:"string",enum:["urn:ibm:params:oauth:grant-type:apikey"]},apikey:{type:"string"}},required:["grant_type","apikey"]}}},required:!0},security:[{"//":[]}],responses:{200:{description:"ok"}},method:"post",path:"/identity/token",servers:[{url:"https://s3.{region}.cloud-object-storage.appdomain.cloud",variables:{region:{enum:["us","eu","ap","us-south","us-east","eu-gb","eu-de","au-syd","jp-tok","ams03","che01","hkg02","mex01","mil01","mon01","osl01","par01","sjc04","sao01","seo01","sng01","tor01"],default:"us"}}}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},info:{title:"Cloud Object Storage",version:"1.0.1"},postman:{name:"Generating an IAM token",description:{content:"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your [IAM API key](https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey) or a [service ID's API key](https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys) IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.\nEach user who is calling the API must pass credentials for the API to authenticate.\n\nYou can generate an IAM token by using either your IBM Cloud API key or a service ID's API key.\nThe API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account.\nThis process is also used if you are developing an application that needs to work with other IBM Cloud services.\nYou must use a service ID API key to get an access token to be passed to each of the IBM Cloud services.\n\n:::note\nAn access token is a temporary credential that expires after 1 hour.\nAfter the acquired token expires, you must generate a new token to continue calling IBM Cloud or service APIs, and you can perform only actions that are allowed by your level of assigned access within all accounts.\n:::",type:"text/plain"},url:{path:["identity","token"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"POST",body:{mode:"urlencoded",urlencoded:[]}}},sidebar_class_name:"post api-method",info_path:"cos/cloud-object-storage"},sidebar:"petstore",previous:{title:"Authentication",permalink:"/category/cos/authentication"},next:{title:"Bucket operations",permalink:"/category/cos/bucket-operations"}},p={},y=[{value:"Generating an IAM token",id:"generating-an-iam-token",level:2}],h={toc:y};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"generating-an-iam-token"},"Generating an IAM token"),(0,s.kt)("p",null,"Generate an IBM Cloud\xae Identity and Access Management (IAM) token by using either your ",(0,s.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey#userapikey"},"IAM API key")," or a ",(0,s.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-serviceidapikeys#serviceidapikeys"},"service ID's API key")," IBM Cloud APIs can be accessed only by users who are authorized by an assigned IAM role.\nEach user who is calling the API must pass credentials for the API to authenticate."),(0,s.kt)("p",null,"You can generate an IAM token by using either your IBM Cloud API key or a service ID's API key.\nThe API key is a permanent credential that can be reused if you don't lose the API key value or delete the API key in the account.\nThis process is also used if you are developing an application that needs to work with other IBM Cloud services.\nYou must use a service ID API key to get an access token to be passed to each of the IBM Cloud services."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"An access token is a temporary credential that expires after 1 hour.\nAfter the acquired token expires, you must generate a new token to continue calling IBM Cloud or service APIs, and you can perform only actions that are allowed by your level of assigned access within all accounts.")),(0,s.kt)(i.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(r.Z,{collapsible:!1,name:"grant_type",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`urn:ibm:params:oauth:grant-type:apikey`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(r.Z,{collapsible:!1,name:"apikey",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"ok")),(0,s.kt)("div",null)))))}m.isMDXComponent=!0}}]);