(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[4844],{65488:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var a=o(87462),n=o(67294),r=o(86010),s=o(72389),i=o(67392),l=o(7094),p=o(12466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:o,block:s,defaultValue:u,values:m,groupId:h,className:g}=e,w=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??w.map((e=>{let{props:{value:t,label:o,attributes:a}}=e;return{value:t,label:o,attributes:a}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??w[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,l.U)(),[A,I]=(0,n.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:N}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==A&&f.some((t=>t.value===e))&&I(e)}const R=e=>{const t=e.currentTarget,o=P.indexOf(t),a=f[o].value;a!==A&&(N(t),I(a),null!=h&&k(h,String(a)))},O=e=>{var t;let o=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;o=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;o=P[t]??P[P.length-1];break}}null==(t=o)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},f.map((e=>{let{value:t,label:o,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>P.push(e),onKeyDown:O,onClick:R},s,{className:(0,r.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":A===t})}),o??t)}))),o?(0,n.cloneElement)(w.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,s.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},44765:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var a=o(67294),n=o(93162),r=o.n(n);const s=function(e){let{url:t,proxy:o}=e;return a.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.createElement("ul",{className:"export-dropdown dropdown__menu"},a.createElement("li",null,a.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r().saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},92272:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(67294),n=o(92949);function r(e){const{colorMode:t}=(0,n.I)(),{logo:o,darkLogo:r}=e;return o?a.createElement("img",{alt:"dark"===t&&r?r.altText:o.altText,src:"dark"===t&&r?r.url:o.url,width:"250px"}):a.createElement("div",null)}},20301:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=o(87462),n=(o(67294),o(3905)),r=o(92272),s=o(65488),i=o(85162),l=o(44765);const p={id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN # ADDED A NEW LINE This is a sample server Petstore server. CHANGES You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.\n## Introduction This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n## OpenAPI Specification This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n## Cross-Origin Resource Sharing This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/). And that allows cross-domain communication from the browser. All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n## Authentication\nPetstore offers two forms of authentication: - API Key - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. ",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/new?labels=documentation&template=documentation_problem.md&title=[Documentation] Requesting changes to 'Swagger Petstore YAML' (swagger-petstore-yaml)"},d=void 0,c={unversionedId:"petstore/swagger-petstore-yaml",id:"petstore/swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN # ADDED A NEW LINE This is a sample server Petstore server. CHANGES You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.\n## Introduction This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n## OpenAPI Specification This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n## Cross-Origin Resource Sharing This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/). And that allows cross-domain communication from the browser. All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n## Authentication\nPetstore offers two forms of authentication: - API Key - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. ",source:"@site/docs/petstore/swagger-petstore-yaml.info.mdx",sourceDirName:"petstore",slug:"/petstore/swagger-petstore-yaml",permalink:"/petstore/swagger-petstore-yaml",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/new?labels=documentation&template=documentation_problem.md&title=[Documentation] Requesting changes to 'Swagger Petstore YAML' (swagger-petstore-yaml)",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"# CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN # ADDED A NEW LINE This is a sample server Petstore server. CHANGES You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.\n## Introduction This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n## OpenAPI Specification This API is documented in **OpenAPI format** and is based on [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team. It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo) tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n## Cross-Origin Resource Sharing This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/). And that allows cross-domain communication from the browser. All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n## Authentication\nPetstore offers two forms of authentication: - API Key - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. ",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/issues/new?labels=documentation&template=documentation_problem.md&title=[Documentation] Requesting changes to 'Swagger Petstore YAML' (swagger-petstore-yaml)"},sidebar:"petstore",previous:{title:"Petstore",permalink:"/category/petstore-api"},next:{title:"Pets",permalink:"/petstore/pet"}},u={},m=[{value:"Introduction",id:"introduction",level:2},{value:"OpenAPI Specification",id:"openapi-specification",level:2},{value:"Cross-Origin Resource Sharing",id:"cross-origin-resource-sharing",level:2},{value:"Authentication",id:"authentication",level:2}],h={toc:m};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0.0"),(0,n.kt)(l.Z,{url:"https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-openapi-docs/main/demo/examples/petstore.yaml",proxy:void 0,mdxType:"Export"}),(0,n.kt)("h1",{id:"swagger-petstore-yaml"},"Swagger Petstore YAML"),(0,n.kt)(r.Z,{logo:{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},darkLogo:void 0,mdxType:"ApiLogo"}),(0,n.kt)("h1",{id:"changes-in-openapi-folder--modify-again-and-again"},"CHANGES IN OPENAPI FOLDER | MODIFY AGAIN AND AGAIN"),(0,n.kt)("h1",{id:"added-a-new-line"},"ADDED A NEW LINE"),(0,n.kt)("p",null,"This is a sample server Petstore server. CHANGES\nYou can find out more about Swagger at\n",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io"},"http://swagger.io")," or on ",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io/irc/"},"irc.freenode.net, #swagger"),".\nFor this sample, you can use the api key ",(0,n.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This API is documented in ",(0,n.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,n.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,n.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,n.kt)("h2",{id:"openapi-specification"},"OpenAPI Specification"),(0,n.kt)("p",null,"This API is documented in ",(0,n.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,n.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,n.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,n.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,n.kt)("h2",{id:"cross-origin-resource-sharing"},"Cross-Origin Resource Sharing"),(0,n.kt)("p",null,"This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/cors/"},"W3C spec"),".\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site."),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"Petstore offers two forms of authentication:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API Key"),(0,n.kt)("li",{parentName:"ul"},"OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.")),(0,n.kt)("div",{style:{marginBottom:"2rem"}},(0,n.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{label:"Petstore Auth",value:"petstore_auth",mdxType:"TabItem"},(0,n.kt)("p",null,"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access."),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Security Scheme Type:"),(0,n.kt)("td",null,"oauth2")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"implicit OAuth Flow:"),(0,n.kt)("td",null,(0,n.kt)("p",null,"Authorization URL: http://petstore.swagger.io/api/oauth/dialog"),(0,n.kt)("span",null,"Scopes:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"write:pets: modify pets in your account"),(0,n.kt)("li",null,"read:pets: read your pets")))))))),(0,n.kt)(i.Z,{label:"API Key",value:"api_key",mdxType:"TabItem"},(0,n.kt)("p",null,"For this sample, you can use the api key ",(0,n.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Security Scheme Type:"),(0,n.kt)("td",null,"apiKey")),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Header parameter name:"),(0,n.kt)("td",null,"api_key")))))))),(0,n.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,n.kt)("span",null,"API Support: ",(0,n.kt)("a",{href:"mailto:apiteam@swagger.io"},"apiteam@swagger.io")),(0,n.kt)("span",null,"URL: ",(0,n.kt)("a",{href:"https://github.com/Redocly/redoc"},"https://github.com/Redocly/redoc"))),(0,n.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.kt)("h3",{style:{marginBottom:"0.25rem"}},"Terms of Service"),(0,n.kt)("a",{href:"http://swagger.io/terms/"},"http://swagger.io/terms/")),(0,n.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.kt)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,n.kt)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache 2.0")))}g.isMDXComponent=!0},93162:function(e,t,o){var a,n,r;n=[],a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,o){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){l(a.response,t,o)},a.onerror=function(){console.error("could not download file")},a.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,o){var i=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):n(l.href)?a(e,t,o):r(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,s){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),o);else if(n(e))a(e,o,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,o);var r="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,p=/CriOS\/[\d]+/.test(navigator.userAgent);if((p||r&&l||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=p?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var c=s.URL||s.webkitURL,u=c.createObjectURL(e);n?n.location=u:location.href=u,n=null,setTimeout((function(){c.revokeObjectURL(u)}),4e4)}});s.saveAs=l.saveAs=l,e.exports=l},void 0===(r="function"==typeof a?a.apply(t,n):a)||(e.exports=r)}}]);