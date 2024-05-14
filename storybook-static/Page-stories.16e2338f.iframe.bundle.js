"use strict";(self.webpackChunkjupiter_jumpers=self.webpackChunkjupiter_jumpers||[]).push([[226],{"./stories/Page.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Page_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Header=__webpack_require__("./stories/Header.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),page=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/page.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(page.A,options);page.A&&page.A.locals&&page.A.locals;const Page=()=>{const[user,setUser]=react.useState();return(0,jsx_runtime.jsxs)("article",{children:[(0,jsx_runtime.jsx)(Header.Y,{user,onLogin:()=>setUser({name:"Jane Doe"}),onLogout:()=>setUser(void 0),onCreateAccount:()=>setUser({name:"Jane Doe"})}),(0,jsx_runtime.jsxs)("section",{className:"page",children:[(0,jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),(0,jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",(0,jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:(0,jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),(0,jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),(0,jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),(0,jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",(0,jsx_runtime.jsx)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",(0,jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),(0,jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",(0,jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};var _LoggedOut_parameters,_LoggedOut_parameters_docs,_LoggedOut_parameters1,_LoggedIn_parameters,_LoggedIn_parameters_docs,_LoggedIn_parameters1;Page.__docgenInfo={description:"",methods:[],displayName:"Page"};const Page_stories={title:"Page",component:Page,parameters:{layout:"fullscreen"}},LoggedOut={},LoggedIn={play:async param=>{let{canvasElement}=param;const canvas=(0,dist.ux)(canvasElement),loginButton=canvas.getByRole("button",{name:/Log in/i});await(0,dist.E3)(loginButton).toBeInTheDocument(),await dist.Q4.click(loginButton),await(0,dist.E3)(loginButton).not.toBeInTheDocument();const logoutButton=canvas.getByRole("button",{name:/Log out/i});await(0,dist.E3)(logoutButton).toBeInTheDocument()}};LoggedOut.parameters={...LoggedOut.parameters,docs:{...(null===(_LoggedOut_parameters=LoggedOut.parameters)||void 0===_LoggedOut_parameters ? void 0 : _LoggedOut_parameters.docs),source:{originalSource:"{}",...(null===(_LoggedOut_parameters1=LoggedOut.parameters)||void 0===_LoggedOut_parameters1||null===(_LoggedOut_parameters_docs=_LoggedOut_parameters1.docs)||void 0===_LoggedOut_parameters_docs ? void 0 : _LoggedOut_parameters_docs.source)}}},LoggedIn.parameters={...LoggedIn.parameters,docs:{...(null===(_LoggedIn_parameters=LoggedIn.parameters)||void 0===_LoggedIn_parameters ? void 0 : _LoggedIn_parameters.docs),source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",...(null===(_LoggedIn_parameters1=LoggedIn.parameters)||void 0===_LoggedIn_parameters1||null===(_LoggedIn_parameters_docs=_LoggedIn_parameters1.docs)||void 0===_LoggedIn_parameters_docs ? void 0 : _LoggedIn_parameters_docs.source)}}};const __namedExportsOrder=["LoggedOut","LoggedIn"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/page.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".page {\n\tfont-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tpadding: 48px 20px;\n\tmargin: 0 auto;\n\tmax-width: 600px;\n\tcolor: #333;\n}\n\n.page h2 {\n\tline-height: 1;\n\tmargin: 0 0 4px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n.page p {\n\tmargin: 1em 0;\n}\n\n.page a {\n\ttext-decoration: none;\n\tcolor: #1ea7fd;\n}\n\n.page ul {\n\tpadding-left: 30px;\n\tmargin: 1em 0;\n}\n\n.page li {\n\tmargin-bottom: 8px;\n}\n\n.page .tip {\n\tdisplay: inline-block;\n\tborder-radius: 1em;\n\tfont-size: 11px;\n\tline-height: 12px;\n\tfont-weight: 700;\n\tbackground: #e7fdd8;\n\tcolor: #66bf3c;\n\tpadding: 4px 12px;\n\tmargin-right: 10px;\n\tvertical-align: top;\n}\n\n.page .tip-wrapper {\n\tfont-size: 13px;\n\tline-height: 20px;\n\tmargin-top: 40px;\n\tmargin-bottom: 40px;\n}\n\n.page .tip-wrapper svg {\n\tdisplay: inline-block;\n\theight: 12px;\n\twidth: 12px;\n\tmargin-right: 4px;\n\tvertical-align: top;\n\tmargin-top: 3px;\n}\n\n.page .tip-wrapper svg path {\n\tfill: #1ea7fd;\n}\n","",{version:3,sources:["webpack://./stories/page.css"],names:[],mappings:"AAAA;CACC,0EAA0E;CAC1E,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,cAAc;CACd,gBAAgB;CAChB,WAAW;AACZ;;AAEA;CACC,cAAc;CACd,eAAe;CACf,qBAAqB;CACrB,mBAAmB;AACpB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,qBAAqB;CACrB,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;CACnB,cAAc;CACd,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,YAAY;CACZ,WAAW;CACX,iBAAiB;CACjB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,aAAa;AACd",sourcesContent:[".page {\n\tfont-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tpadding: 48px 20px;\n\tmargin: 0 auto;\n\tmax-width: 600px;\n\tcolor: #333;\n}\n\n.page h2 {\n\tline-height: 1;\n\tmargin: 0 0 4px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n.page p {\n\tmargin: 1em 0;\n}\n\n.page a {\n\ttext-decoration: none;\n\tcolor: #1ea7fd;\n}\n\n.page ul {\n\tpadding-left: 30px;\n\tmargin: 1em 0;\n}\n\n.page li {\n\tmargin-bottom: 8px;\n}\n\n.page .tip {\n\tdisplay: inline-block;\n\tborder-radius: 1em;\n\tfont-size: 11px;\n\tline-height: 12px;\n\tfont-weight: 700;\n\tbackground: #e7fdd8;\n\tcolor: #66bf3c;\n\tpadding: 4px 12px;\n\tmargin-right: 10px;\n\tvertical-align: top;\n}\n\n.page .tip-wrapper {\n\tfont-size: 13px;\n\tline-height: 20px;\n\tmargin-top: 40px;\n\tmargin-bottom: 40px;\n}\n\n.page .tip-wrapper svg {\n\tdisplay: inline-block;\n\theight: 12px;\n\twidth: 12px;\n\tmargin-right: 4px;\n\tvertical-align: top;\n\tmargin-top: 3px;\n}\n\n.page .tip-wrapper svg path {\n\tfill: #1ea7fd;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);