(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[3368],{65488:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var a=o(87462),n=o(67294),r=o(86010),i=o(72389),s=o(67392),l=o(7094),u=o(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:o,block:i,defaultValue:d,values:m,groupId:h,className:g}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:o,attributes:a}}=e;return{value:t,label:o,attributes:a}})),k=(0,s.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,l.U)(),[A,N]=(0,n.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==A&&v.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,o=I.indexOf(t),a=v[o].value;a!==A&&(E(t),N(a),null!=h&&w(h,String(a)))},T=e=>{var t;let o=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;o=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;o=I[t]??I[I.length-1];break}}null==(t=o)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:o,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>I.push(e),onKeyDown:T,onClick:O},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":A===t})}),o??t)}))),o?(0,n.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,i.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},44765:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var a=o(67294),n=o(93162),r=o.n(n);const i=function(e){let{url:t,proxy:o}=e;return a.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.createElement("ul",{className:"export-dropdown dropdown__menu"},a.createElement("li",null,a.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r().saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},92272:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(67294),n=o(92949);function r(e){const{colorMode:t}=(0,n.I)(),{logo:o,darkLogo:r}=e;return o?a.createElement("img",{alt:"dark"===t&&r?r.altText:o.altText,src:"dark"===t&&r?r.url:o.url,width:"250px"}):a.createElement("div",null)}},95344:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=o(87462),n=(o(67294),o(3905)),r=o(92272),i=o(65488),s=o(85162);o(44765);const l={id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},u=void 0,p={unversionedId:"petstore_versioned/swagger-petstore-yaml",id:"petstore_versioned/swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN",source:"@site/docs/petstore_versioned/swagger-petstore-yaml.info.mdx",sourceDirName:"petstore_versioned",slug:"/petstore_versioned/swagger-petstore-yaml",permalink:"/petstore_versioned/swagger-petstore-yaml",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0},sidebar:"petstore-2.0.0",previous:{title:"Petstore",permalink:"/category/petstore-versioned-api"},next:{title:"Pets",permalink:"/petstore_versioned/pet"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"OpenAPI Specification",id:"openapi-specification",level:2},{value:"Cross-Origin Resource Sharing",id:"cross-origin-resource-sharing",level:2},{value:"Authentication",id:"authentication",level:2}],m={toc:d};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0.0"),(0,n.kt)("h1",{id:"swagger-petstore-yaml"},"Swagger Petstore YAML"),(0,n.kt)(r.Z,{logo:{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},darkLogo:void 0,mdxType:"ApiLogo"}),(0,n.kt)("h1",{id:"changes-in-openapi-folder--modify-again-and-again"},"CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN"),(0,n.kt)("p",null,"This is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io"},"http://swagger.io")," or on ",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io/irc/"},"irc.freenode.net, #swagger"),".\nFor this sample, you can use the api key ",(0,n.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This API is documented in ",(0,n.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,n.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,n.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,n.kt)("h2",{id:"openapi-specification"},"OpenAPI Specification"),(0,n.kt)("p",null,"This API is documented in ",(0,n.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,n.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,n.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,n.kt)("h2",{id:"cross-origin-resource-sharing"},"Cross-Origin Resource Sharing"),(0,n.kt)("p",null,"This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/cors/"},"W3C spec"),".\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site."),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"Petstore offers two forms of authentication:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API Key"),(0,n.kt)("li",{parentName:"ul"},"OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.")),(0,n.kt)("div",{style:{marginBottom:"2rem"}},(0,n.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{label:"Petstore Auth",value:"petstore_auth",mdxType:"TabItem"},(0,n.kt)("p",null,"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access."),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Security Scheme Type:"),(0,n.kt)("td",null,"oauth2")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"implicit OAuth Flow:"),(0,n.kt)("td",null,(0,n.kt)("p",null,"Authorization URL: http://petstore.swagger.io/api/oauth/dialog"),(0,n.kt)("span",null,"Scopes:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"write:pets: modify pets in your account"),(0,n.kt)("li",null,"read:pets: read your pets")))))))),(0,n.kt)(s.Z,{label:"API Key",value:"api_key",mdxType:"TabItem"},(0,n.kt)("p",null,"For this sample, you can use the api key ",(0,n.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Security Scheme Type:"),(0,n.kt)("td",null,"apiKey")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Header parameter name:"),(0,n.kt)("td",null,"api_key")))))))),(0,n.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,n.kt)("span",null,"API Support: ",(0,n.kt)("a",{href:"mailto:apiteam@swagger.io"},"apiteam@swagger.io")),(0,n.kt)("span",null,"URL: ",(0,n.kt)("a",{href:"https://github.com/Redocly/redoc"},"https://github.com/Redocly/redoc"))),(0,n.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.kt)("h3",{style:{marginBottom:"0.25rem"}},"Terms of Service"),(0,n.kt)("a",{href:"http://swagger.io/terms/"},"http://swagger.io/terms/")),(0,n.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.kt)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,n.kt)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache 2.0")))}h.isMDXComponent=!0},93162:function(e,t,o){var a,n,r;n=[],a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,o){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){l(a.response,t,o)},a.onerror=function(){console.error("could not download file")},a.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,o){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):n(l.href)?a(e,t,o):r(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(n(e))a(e,o,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,o);var r="application/octet-stream"===e.type,l=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||r&&l||s)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var e=p.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},p.readAsDataURL(e)}else{var c=i.URL||i.webkitURL,d=c.createObjectURL(e);n?n.location=d:location.href=d,n=null,setTimeout((function(){c.revokeObjectURL(d)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l},void 0===(r="function"==typeof a?a.apply(t,n):a)||(e.exports=r)}}]);