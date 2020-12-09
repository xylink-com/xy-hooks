(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"8hcE":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("0zqC"),i=n("ZpkN"),m=l.a.memo(n("JjdP").default["userafinterval-basic"].component),u=l.a.memo(n("JjdP").default["userafinterval-raf"].component);t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"userafinterval"},l.a.createElement(r["AnchorLink"],{to:"#userafinterval","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"useRafInterval"),l.a.createElement("p",null,"Common interval implements by setInterval and requestAnimationFrame, support start interval immediately and usage of setInterval\u3001 reset interval and clear interval."),l.a.createElement("h2",{id:"examples"},l.a.createElement(r["AnchorLink"],{to:"#examples","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Examples")),l.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { useRafInterval } from 'xy-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n  const [interval, counts, { setInterval, reset, clear }] = useRafInterval(\n    () => {\n      setCount(count + 2);\n    },\n    1000,\n    { immediate: true, raf: false },\n  );\n  return (\n    <div>\n      <p>\n        \u5f53\u524d\u503c\uff1a{count} \u6267\u884c\u6b21\u6570\uff1a{counts} internal: {interval}\n      </p>\n      <div\n        style={{\n          cursor: 'pointer',\n        }}\n      >\n        <button onClick={() => setInterval(5000)}>Set interval 5000</button>\n        <button onClick={reset} style={{ marginLeft: 8 }}>\n          Reset\n        </button>\n        <button onClick={clear} style={{ marginLeft: 8 }}>\n          Clear\n        </button>\n      </div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Basic Usage",description:'<div class="markdown"><p>Set interval, reset interval and clear interval via setInterval.</p></div>',"title_zh-CN":"\u57fa\u7840\u7528\u6cd5","description_zh-CN":'<div class="markdown"><p>\u901a\u8fc7 setInterval \u5b9e\u73b0\u7684setInterval, Reset \u548c Clear \u5b9a\u65f6\u5668\u7684\u7528\u6cd5\u3002</p></div>',identifier:"userafinterval-basic"},l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"}),l.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useState } from 'react';\nimport { useRafInterval } from 'xy-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n  const [interval, counts, { setInterval, reset, clear }] = useRafInterval(\n    () => {\n      setCount(count + 2);\n    },\n    1000,\n    { immediate: true, raf: true },\n  );\n  return (\n    <div>\n      <p>\n        \u5f53\u524d\u503c\uff1a{count} \u6267\u884c\u6b21\u6570\uff1a{counts} internal: {interval}\n      </p>\n      <div\n        style={{\n          cursor: 'pointer',\n        }}\n      >\n        <button onClick={() => setInterval(5000)}>Set interval 5000</button>\n        <button onClick={reset} style={{ marginLeft: 8 }}>\n          Reset\n        </button>\n        <button onClick={clear} style={{ marginLeft: 8 }}>\n          Clear\n        </button>\n      </div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Timer via raf",description:'<div class="markdown"><p>Set interval, reset interval and clear interval via raf(requestAnimationFrame).</p></div>',"title_zh-CN":"Raf \u5b9a\u65f6\u5668","description_zh-CN":'<div class="markdown"><p>\u901a\u8fc7 raf(requestAnimationFrame) \u5b9e\u73b0\u7684setInterval, Reset \u548c Clear \u5b9a\u65f6\u5668\u7684\u7528\u6cd5\u3002</p></div>',identifier:"userafinterval-raf"},l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"API"),l.a.createElement(i["a"],{code:"import { useRafInterval } from 'xy-hooks';\nconst [interval, counts, { setInterval, reset, clear }] = useRafInterval(\n  () => {\n    setCount(count + 2);\n  },\n  1000,\n  { immediate: true, raf: true },\n);\n",lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Params"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"fn"),l.a.createElement("td",null,"run with interval ticks"),l.a.createElement("td",null,"() => void"),l.a.createElement("td",null,"NOOP")),l.a.createElement("tr",null,l.a.createElement("td",null,"delay"),l.a.createElement("td",null,"delay for interval"),l.a.createElement("td",null,"TDelay: number(ms) / null / undefined"),l.a.createElement("td",null,"undefined")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"options for interval"),l.a.createElement("td",null,"IOptions"),l.a.createElement("td",null)))),l.a.createElement("h3",{id:"options"},l.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Options"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"immediate"),l.a.createElement("td",null,"immediately run or wait a tick"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"false")),l.a.createElement("tr",null,l.a.createElement("td",null,"raf"),l.a.createElement("td",null,"use raf or not"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"false")))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Result"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"interval"),l.a.createElement("td",null,"current interval"),l.a.createElement("td",null,"number(ms)")),l.a.createElement("tr",null,l.a.createElement("td",null,"counts"),l.a.createElement("td",null,"counts for run times"),l.a.createElement("td",null,"number")),l.a.createElement("tr",null,l.a.createElement("td",null,"setInterval"),l.a.createElement("td",null,"update interval for timer"),l.a.createElement("td",null,"(interval: number) => void")),l.a.createElement("tr",null,l.a.createElement("td",null,"reset"),l.a.createElement("td",null,"reset interval"),l.a.createElement("td",null,"() => void")),l.a.createElement("tr",null,l.a.createElement("td",null,"clear"),l.a.createElement("td",null,"clear interval(stop interval)"),l.a.createElement("td",null,"() => void")))),l.a.createElement("h3",{id:"types"},l.a.createElement(r["AnchorLink"],{to:"#types","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Types"),l.a.createElement(i["a"],{code:"type TDelay = number | null | undefined;\n\ninterface IOptions{\n  immediate?: boolean;\n  raf?: boolean;\n}\n\nconst NOOP = () => {}\n",lang:"ts"}))))}}}]);