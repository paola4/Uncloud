"use strict";(self.webpackChunkjupiter_jumpers=self.webpackChunkjupiter_jumpers||[]).push([[950],{"./node_modules/@phosphor-icons/react/dist/lib/IconBase.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>b});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const context_o=(0,react.createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var y=Object.defineProperty,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(t,o,e)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,l=(t,o)=>{for(var e in o||(o={}))f.call(o,e)&&d(t,e,o[e]);if(c)for(var e of c(o))g.call(o,e)&&d(t,e,o[e]);return t},a=(t,o)=>{var e={};for(var r in t)f.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&c)for(var r of c(t))o.indexOf(r)<0&&g.call(t,r)&&(e[r]=t[r]);return e};const h=(0,react.forwardRef)(((t,o)=>{const m=t,{alt:e,color:r,size:n,weight:s,mirrored:p,children:u,weights:C}=m,v=a(m,["alt","color","size","weight","mirrored","children","weights"]),x=(0,react.useContext)(context_o),{color:B="currentColor",size:i,weight:I="regular",mirrored:E=!1}=x,R=a(x,["color","size","weight","mirrored"]);return react.createElement("svg",l(l({ref:o,xmlns:"http://www.w3.org/2000/svg",width:null!=n?n:i,height:null!=n?n:i,fill:null!=r?r:B,viewBox:"0 0 256 256",transform:p||E?"scale(-1, 1)":void 0},R),v),!!e&&react.createElement("title",null,e),u,C.get(null!=s?s:I))}));h.displayName="IconBase";const b=h},"./stories/customInput.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Email:()=>Email,Name:()=>Name,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Name_parameters,_Name_parameters_docs,_Name_parameters1,_Email_parameters,_Email_parameters_docs,_Email_parameters1,_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Input",component:__webpack_require__("./stories/customInput.tsx").A,tags:["autodocs"],parameters:{layout:"padded"},args:{name:"input",value:"",placeholder:"placeholder",label:"label",type:"text",handleChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),error:""},argTypes:{type:{control:"select",options:["text","email","password"]}}},Name={args:{type:"text",placeholder:"Please type your preferred name.",label:"What should we call you?",name:"name"}},Email={args:{type:"email",placeholder:"Please type your email.",label:"What's your email?",name:"emailAddress"}};Name.parameters={...Name.parameters,docs:{...null===(_Name_parameters=Name.parameters)||void 0===_Name_parameters?void 0:_Name_parameters.docs,source:{originalSource:"{\n  args: {\n    type: 'text',\n    placeholder: 'Please type your preferred name.',\n    label: 'What should we call you?',\n    name: 'name'\n  }\n}",...null===(_Name_parameters1=Name.parameters)||void 0===_Name_parameters1||null===(_Name_parameters_docs=_Name_parameters1.docs)||void 0===_Name_parameters_docs?void 0:_Name_parameters_docs.source}}},Email.parameters={...Email.parameters,docs:{...null===(_Email_parameters=Email.parameters)||void 0===_Email_parameters?void 0:_Email_parameters.docs,source:{originalSource:"{\n  args: {\n    type: 'email',\n    placeholder: 'Please type your email.',\n    label: \"What's your email?\",\n    name: 'emailAddress'\n  }\n}",...null===(_Email_parameters1=Email.parameters)||void 0===_Email_parameters1||null===(_Email_parameters_docs=_Email_parameters1.docs)||void 0===_Email_parameters_docs?void 0:_Email_parameters_docs.source}}};const __namedExportsOrder=["Name","Email"]},"./stories/customInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>stories_customInput});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),IconBase=__webpack_require__("./node_modules/@phosphor-icons/react/dist/lib/IconBase.mjs");const t=new Map([["bold",react.createElement(react.Fragment,null,react.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",react.createElement(react.Fragment,null,react.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),react.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",react.createElement(react.Fragment,null,react.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",react.createElement(react.Fragment,null,react.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",react.createElement(react.Fragment,null,react.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",react.createElement(react.Fragment,null,react.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]);var i=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,X_t=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,m=(o,e,r)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;const R=(0,react.forwardRef)(((o,e)=>react.createElement(IconBase.A,((o,e)=>p(o,s(e)))(((o,e)=>{for(var r in e||(e={}))c.call(e,r)&&m(o,r,e[r]);if(X_t)for(var r of X_t(e))n.call(e,r)&&m(o,r,e[r]);return o})({ref:e},o),{weights:t}))));R.displayName="X";__webpack_require__("./stories/customInput.css");const CustomInput=param=>{let{name,value,placeholder,label,type,handleChange,error}=param;return(0,jsx_runtime.jsxs)("div",{className:"w-full space-y-1.5",children:[(0,jsx_runtime.jsx)("label",{className:"text-sm font-bold",htmlFor:name,children:label}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("input",{type,placeholder,name,id:name,value:value||"",onChange:handleChange,className:[error?"border-red-500":"border-[#D9D9D9]",error?"focus:ring-0":"focus:ring-[#D9D9D9]",error?"focus:outline-red-500":"focus:outline-[#706f6f]",error?"focus:border-red-500":"focus:border-[#706f6f]","block","w-full","rounded-md","border","border-[#D9D9D9]","bg-transparent","p-2","pl-3","pr-10","text-base","font-medium","hover:border-[#706f6f]","focus:border-[#706f6f]","focus:outline-0","focus:outline-[#706f6f]","focus:ring","focus:ring-[#D9D9D9]"].join(" ")}),error&&(0,jsx_runtime.jsx)("div",{className:"absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3",onClick:()=>{handleChange({target:{name,value:""}})},children:(0,jsx_runtime.jsx)(R,{size:"1rem",weight:"light",color:"#EF4444"})})]}),error&&"Incorrect email or password."!==error&&(0,jsx_runtime.jsx)("p",{className:"text-sm font-semibold text-red-600",children:error})]})},stories_customInput=CustomInput;CustomInput.__docgenInfo={description:"",methods:[],displayName:"CustomInput",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/customInput.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"::placeholder {\n\tcolor: #d9d9d9 !important;\n}\n","",{version:3,sources:["webpack://./stories/customInput.css"],names:[],mappings:"AAAA;CACC,yBAAyB;AAC1B",sourcesContent:["::placeholder {\n\tcolor: #d9d9d9 !important;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function p(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&"key"!==b&&"ref"!==b&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=p,exports.jsxs=p},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")},"./stories/customInput.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_customInput_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/customInput.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_customInput_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_customInput_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_customInput_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_customInput_css__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);