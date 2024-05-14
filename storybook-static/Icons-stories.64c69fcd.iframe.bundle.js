"use strict";(self.webpackChunkjupiter_jumpers=self.webpackChunkjupiter_jumpers||[]).push([[135],{"./stories/Icons.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Sun_parameters,_Sun_parameters_docs,_Sun_parameters1,_Chart_parameters,_Chart_parameters_docs,_Chart_parameters1,_Bulb_parameters,_Bulb_parameters_docs,_Bulb_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bulb:()=>Bulb,Chart:()=>Chart,Sun:()=>Sun,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Icon",component:__webpack_require__("./stories/Icons.tsx").I,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"color"},size:{control:"select",options:["1rem","1.5rem","2rem","2.5rem","3rem","3rem","3.5rem","4rem","5rem","6rem"]},type:{control:"select",options:["cloud-sun","chart-line-up","lightbulb-filament","sun","lock-key","envelope-open","arrow-clockwise"]},weight:{control:"select",options:["thin","light","regular","bold","fill","duotone"]}},args:{}},Sun={args:{label:"Add",type:"sun",size:"2rem",weight:"regular"}},Chart={args:{label:"Add",type:"chart-line-up",size:"2rem",weight:"regular"}},Bulb={args:{label:"Add",type:"lightbulb-filament",size:"2rem",weight:"regular"}};Sun.parameters={...Sun.parameters,docs:{...(null===(_Sun_parameters=Sun.parameters)||void 0===_Sun_parameters ? void 0 : _Sun_parameters.docs),source:{originalSource:"{\n  args: {\n    label: 'Add',\n    type: 'sun',\n    size: '2rem',\n    weight: 'regular'\n  }\n}",...(null===(_Sun_parameters1=Sun.parameters)||void 0===_Sun_parameters1||null===(_Sun_parameters_docs=_Sun_parameters1.docs)||void 0===_Sun_parameters_docs ? void 0 : _Sun_parameters_docs.source)}}},Chart.parameters={...Chart.parameters,docs:{...(null===(_Chart_parameters=Chart.parameters)||void 0===_Chart_parameters ? void 0 : _Chart_parameters.docs),source:{originalSource:"{\n  args: {\n    label: 'Add',\n    type: 'chart-line-up',\n    size: '2rem',\n    weight: 'regular'\n  }\n}",...(null===(_Chart_parameters1=Chart.parameters)||void 0===_Chart_parameters1||null===(_Chart_parameters_docs=_Chart_parameters1.docs)||void 0===_Chart_parameters_docs ? void 0 : _Chart_parameters_docs.source)}}},Bulb.parameters={...Bulb.parameters,docs:{...(null===(_Bulb_parameters=Bulb.parameters)||void 0===_Bulb_parameters ? void 0 : _Bulb_parameters.docs),source:{originalSource:"{\n  args: {\n    label: 'Add',\n    type: 'lightbulb-filament',\n    size: '2rem',\n    weight: 'regular'\n  }\n}",...(null===(_Bulb_parameters1=Bulb.parameters)||void 0===_Bulb_parameters1||null===(_Bulb_parameters_docs=_Bulb_parameters1.docs)||void 0===_Bulb_parameters_docs ? void 0 : _Bulb_parameters_docs.source)}}};const __namedExportsOrder=["Sun","Chart","Bulb"]},"./stories/Icons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/ChartLineUp.mjs")),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/LightbulbFilament.mjs"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/Sun.mjs"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/CloudSun.mjs"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/LockKey.mjs"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/EnvelopeOpen.mjs"),_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@phosphor-icons/react/dist/csr/ArrowClockwise.mjs");const Icon=param=>{let{color,label,weight,type,size}=param,icon=null;switch(type){case"chart-line-up":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.k,{weight,size,color});break;case"lightbulb-filament":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__.A,{weight,size,color});break;case"sun":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__.b,{weight,size,color});break;case"cloud-sun":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_5__.S,{weight,size,color});break;case"lock-key":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_6__.j,{weight,size,color});break;case"envelope-open":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_7__.j,{weight,size,color});break;case"arrow-clockwise":icon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_8__.S,{weight,size,color})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:["icon"].join(" "),children:icon})};Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{color:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},weight:{required:!0,tsType:{name:"union",raw:"'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'",elements:[{name:"literal",value:"'thin'"},{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'duotone'"}]},description:""},type:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"string"},description:""}}}}}]);