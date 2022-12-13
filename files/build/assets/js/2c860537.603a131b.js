"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[3279],{72944:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=s(87462),a=(s(67294),s(3905)),o=s(26389),n=(s(94891),s(74933)),r=(s(47507),s(24310),s(63303),s(75035),s(85162));const c={id:"list-buckets",title:"List buckets",description:"A `GET` request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.",sidebar_label:"List buckets",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Bucket operations"],description:"A `GET` request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).",parameters:[{in:"query",name:"extended",description:"Provides `LocationConstraint` metadata in the listing.",required:!1,schema:{type:"boolean"},allowEmptyValue:!0},{name:"ibm-service-instance-id",in:"header",description:"List buckets that were created in this service instance.",required:!0,schema:{type:"string"}}],security:[{BearerAuth:[]},{BearerAuth:[],BasicAuth:[]}],responses:{200:{description:"ok"}},method:"get",path:"/",servers:[{url:"https://s3.{region}.cloud-object-storage.appdomain.cloud",variables:{region:{enum:["us","eu","ap","us-south","us-east","eu-gb","eu-de","au-syd","jp-tok","ams03","che01","hkg02","mex01","mil01","mon01","osl01","par01","sjc04","sao01","seo01","sng01","tor01"],default:"us"}}}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},info:{title:"Cloud Object Storage",version:"1.0.1"},postman:{name:"List buckets",description:{content:"A `GET` request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).",type:"text/plain"},url:{path:[""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Provides `LocationConstraint` metadata in the listing.",type:"text/plain"},key:"extended",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) List buckets that were created in this service instance.",type:"text/plain"},key:"ibm-service-instance-id",value:""}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"cos/cloud-object-storage"},d=void 0,u={unversionedId:"cos/list-buckets",id:"cos/list-buckets",title:"List buckets",description:"A `GET` request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.",source:"@site/docs/cos/list-buckets.api.mdx",sourceDirName:"cos",slug:"/cos/list-buckets",permalink:"/cos/list-buckets",draft:!1,tags:[],version:"current",frontMatter:{id:"list-buckets",title:"List buckets",description:"A `GET` request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.",sidebar_label:"List buckets",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Bucket operations"],description:"A `GET` request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).",parameters:[{in:"query",name:"extended",description:"Provides `LocationConstraint` metadata in the listing.",required:!1,schema:{type:"boolean"},allowEmptyValue:!0},{name:"ibm-service-instance-id",in:"header",description:"List buckets that were created in this service instance.",required:!0,schema:{type:"string"}}],security:[{BearerAuth:[]},{BearerAuth:[],BasicAuth:[]}],responses:{200:{description:"ok"}},method:"get",path:"/",servers:[{url:"https://s3.{region}.cloud-object-storage.appdomain.cloud",variables:{region:{enum:["us","eu","ap","us-south","us-east","eu-gb","eu-de","au-syd","jp-tok","ams03","che01","hkg02","mex01","mil01","mon01","osl01","par01","sjc04","sao01","seo01","sng01","tor01"],default:"us"}}}],securitySchemes:{BearerAuth:{type:"http",scheme:"bearer"},BasicAuth:{type:"http",scheme:"basic"}},info:{title:"Cloud Object Storage",version:"1.0.1"},postman:{name:"List buckets",description:{content:"A `GET` request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.\nFor more information about endpoints, see [Endpoints and storage locations](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints).",type:"text/plain"},url:{path:[""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Provides `LocationConstraint` metadata in the listing.",type:"text/plain"},key:"extended",value:""}],variable:[]},header:[{disabled:!1,description:{content:"(Required) List buckets that were created in this service instance.",type:"text/plain"},key:"ibm-service-instance-id",value:""}],method:"GET",auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"get api-method",info_path:"cos/cloud-object-storage"},sidebar:"petstore",previous:{title:"Bucket operations",permalink:"/category/cos/bucket-operations"},next:{title:"Create a bucket",permalink:"/cos/create-a-bucket"}},l={},p=[{value:"List buckets",id:"list-buckets",level:2}],m={toc:p};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"list-buckets"},"List buckets"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request sent to the endpoint root returns a list of buckets that are associated with the specified service instance.\nFor more information about endpoints, see ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-endpoints#endpoints"},"Endpoints and storage locations"),"."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"extended",description:"Provides `LocationConstraint` metadata in the listing.",required:!1,schema:{type:"boolean"},allowEmptyValue:!0},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Header Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"ibm-service-instance-id",in:"header",description:"List buckets that were created in this service instance.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"ok")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);