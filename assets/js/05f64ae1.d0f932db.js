"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[8845],{52991:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),s=r(86010),i=r(53438),c=r(39960),o=r(13919),a=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:i},r," ",i),c&&n.createElement("p",{className:(0,s.Z)("text--truncate",d),title:c},c))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==s?void 0:s.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},79564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),s=(r(67294),r(3905)),i=r(52991),c=r(53438);const o={id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},a=void 0,l={unversionedId:"petstore/pet",id:"petstore/pet",title:"Pets",description:"Pets",source:"@site/docs/petstore/pet.tag.mdx",sourceDirName:"petstore",slug:"/petstore/pet",permalink:"/try-docusaurus-fullset/petstore/pet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},sidebar:"petstore",previous:{title:"Introduction",permalink:"/try-docusaurus-fullset/petstore/swagger-petstore-yaml"},next:{title:"Add a new pet to the store",permalink:"/try-docusaurus-fullset/petstore/add-pet"}},u={},d=[],m={toc:d};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Everything about your Pets"),(0,s.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);