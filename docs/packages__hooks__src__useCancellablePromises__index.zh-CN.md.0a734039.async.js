(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{ZRzD:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=n("dEAq"),c=n("0zqC"),m=n("ZpkN"),i=l.a.memo(n("JjdP").default["usecancellablepromises-basic"].component);a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usecancellablepromises"},l.a.createElement(r["AnchorLink"],{to:"#usecancellablepromises","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"useCancellablePromises"),l.a.createElement("p",null,"useCancellablePromises \u5728\u5185\u90e8\u7ef4\u6301\u4e00\u4e2a\u53ef\u4ee5\u53d6\u6d88\u7684 promise \u6570\u7ec4\uff0c\u652f\u6301\u6dfb\u52a0\u3001\u5220\u9664\u548c\u6e05\u9664\u7684 API\u3002"),l.a.createElement("h2",{id:"examples"},l.a.createElement(r["AnchorLink"],{to:"#examples","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Examples")),l.a.createElement(c["default"],{sources:{_:{tsx:"import React from 'react';\nimport { useCancellablePromises } from 'xy-hooks';\n\nexport default () => {\n  // TODO \n  return <div>template</div>;\n};\n"}},dependencies:{react:{version:"16.14.0"}},title:"Basic Usage",description:"","title_zh-CN":"\u57fa\u7840\u7528\u6cd5","description_zh-CN":"",identifier:"usecancellablepromises-basic"},l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"API"),l.a.createElement(m["a"],{code:"import {useCancellablePromises} from 'xy-hooks';\nconst {\n  clearPendingPromises,\n  appendPendingPromise,\n  removePendingPromise,\n} = useCancellablePromises();\n",lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Params"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u63cf\u8ff0"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"clearPendingPromises"),l.a.createElement("td",null,"clear pending promises"),l.a.createElement("td",null,"() => void"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"appendPendingPromise"),l.a.createElement("td",null,"append pending promise"),l.a.createElement("td",null,"(promise) => pendingPromises"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"removePendingPromise"),l.a.createElement("td",null,"remove pending promise"),l.a.createElement("td",null,"(promise) => void"),l.a.createElement("td",null)))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Result"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u63cf\u8ff0"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"promise"),l.a.createElement("td",null,"a cancelable promise"),l.a.createElement("td",null,"Promise")),l.a.createElement("tr",null,l.a.createElement("td",null,"cancel"),l.a.createElement("td",null,"cancel the pending promise"),l.a.createElement("td",null,"() => boolean")))),l.a.createElement("h3",{id:"types"},l.a.createElement(r["AnchorLink"],{to:"#types","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Types"),l.a.createElement(m["a"],{code:"interface IPromise {\n  promise: Promise<unknown>;\n  cancel: () => boolean;\n}\n",lang:"ts"}))))}}}]);