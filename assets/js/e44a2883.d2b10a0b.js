"use strict";(self.webpackChunktry_docusaurus_fullset=self.webpackChunktry_docusaurus_fullset||[]).push([[6755],{80740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const o={sidebar_position:2,tags:["test"]},r="Translate your site",s={unversionedId:"tutorial-extras/translate-your-site",id:"tutorial-extras/translate-your-site",title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/tutorial-extras/translate-your-site.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/translate-your-site",permalink:"/try-docusaurus-fullset/tutorial-extras/translate-your-site",draft:!1,tags:[{label:"test",permalink:"/try-docusaurus-fullset/tags/test"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["test"]}},i={},u=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"translate-your-site"},"Translate your site"),(0,l.kt)("p",null,"Let's translate ",(0,l.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,l.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,l.kt)("p",null,"Modify ",(0,l.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,l.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,l.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,l.kt)("p",null,"Copy the ",(0,l.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,l.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,l.kt)("p",null,"Translate ",(0,l.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,l.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,l.kt)("p",null,"Start your site on the French locale:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,l.kt)("p",null,"Your localized site is accessible at ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,l.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,l.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,l.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Locale Dropdown",src:a(12254).Z,width:"418",height:"344"})),(0,l.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,l.kt)("p",null,"Build your site for a specific locale:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,l.kt)("p",null,"Or build your site to include all the locales at once:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}c.isMDXComponent=!0},12254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"}}]);