(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{nDR9:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),l=n.n(i),a=n("dEAq"),r=n("0zqC"),s=n("ZpkN"),o=l.a.memo(n("JjdP").default["usescrollplus-basicscroll"].component),c=l.a.memo(n("JjdP").default["usescrollplus-documentscroll"].component),u=l.a.memo(n("JjdP").default["usescrollplus-controlledscroll"].component);t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usescrollplus"},l.a.createElement(a["AnchorLink"],{to:"#usescrollplus","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"useScrollPlus"),l.a.createElement("p",null,"Get the scroll position details of an element, include scrolled position, container size and scroll left size. Base on useScroll from ahooks."),l.a.createElement("h2",{id:"examples"},l.a.createElement(a["AnchorLink"],{to:"#examples","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Examples")),l.a.createElement(r["default"],{sources:{_:{tsx:"import React, { useRef } from 'react';\nimport { useScrollPlus } from 'xy-hooks';\n\nexport default () => {\n  const ref = useRef(null);\n  const scroll = useScrollPlus(ref.current);\n\n  return (\n    <>\n      <div>{JSON.stringify(scroll)}</div>\n      <div\n        style={{\n          height: '160px',\n          width: '160px',\n          border: 'solid 1px #000',\n          overflow: 'scroll',\n          whiteSpace: 'nowrap',\n          fontSize: '32px',\n        }}\n        ref={ref}\n      >\n        <div>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex\n          excepturi explicabo iste iure labore molestiae neque optio perspiciatis\n        </div>\n        <div>\n          Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda\n          consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt\n        </div>\n        <div>\n          Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus\n          magni modi mollitia nihil nisi provident\n        </div>\n        <div>\n          Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,\n          quia quisquam repellendus reprehenderit.\n        </div>\n        <div>\n          Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,\n          consectetur corporis cum deserunt distinctio dolore eius est exercitationem\n        </div>\n        <div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>\n        <div>\n          Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore\n          earum, eum expedita facilis\n        </div>\n        <div>\n          Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque\n          dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi\n        </div>\n      </div>\n    </>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Basic Usage",description:'<div class="markdown"><p>Try to scroll the box below.</p></div>',"title_zh-CN":"\u57fa\u7840\u7528\u6cd5","description_zh-CN":'<div class="markdown"><p>\u5c1d\u8bd5\u6eda\u52a8\u4e00\u4e0b\u6587\u5b57\u5185\u5bb9\u3002</p></div>',identifier:"usescrollplus-basicscroll"},l.a.createElement(o,null)),l.a.createElement("div",{className:"markdown"}),l.a.createElement(r["default"],{sources:{_:{tsx:"import React from 'react';\nimport {useScrollPlus} from 'xy-hooks';\n\nexport default () => {\n  const scroll = useScrollPlus(document);\n  return (\n    <div>\n      <div>{JSON.stringify(scroll)}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Detect Whole Page Scroll",description:'<div class="markdown"><p>Try to scroll this webpage.</p></div>',"title_zh-CN":"\u76d1\u6d4b\u6574\u9875\u7684\u6eda\u52a8","description_zh-CN":'<div class="markdown"><p>\u5c1d\u8bd5\u6eda\u52a8\u4e00\u4e0b\u9875\u9762\u3002</p></div>',identifier:"usescrollplus-documentscroll"},l.a.createElement(c,null)),l.a.createElement("div",{className:"markdown"}),l.a.createElement(r["default"],{sources:{_:{tsx:"import React, { useRef } from 'react';\nimport {useScrollPlus} from 'xy-hooks';\n\nexport default () => {\n  const ref = useRef(null);\n\n  const scroll = useScrollPlus(ref.current, (val) => val.top > 100 && val.top < 200);\n\n  return (\n    <>\n      <div>{JSON.stringify(scroll)}</div>\n      <div\n        className={'main'}\n        style={{\n          height: '160px',\n          width: '160px',\n          border: 'solid 1px #000',\n          overflow: 'scroll',\n          whiteSpace: 'nowrap',\n          fontSize: '36px',\n        }}\n        ref={ref}\n      >\n        <div>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex\n          excepturi explicabo iste iure labore molestiae neque optio perspiciatis\n        </div>\n        <div>\n          Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda\n          consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt\n        </div>\n        <div>\n          Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus\n          magni modi mollitia nihil nisi provident\n        </div>\n        <div>\n          Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,\n          quia quisquam repellendus reprehenderit.\n        </div>\n        <div>\n          Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,\n          consectetur corporis cum deserunt distinctio dolore eius est exercitationem\n        </div>\n        <div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>\n        <div>\n          Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore\n          earum, eum expedita facilis\n        </div>\n        <div>\n          Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque\n          dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi\n        </div>\n      </div>\n    </>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Control listen on scroll status",description:'<div class="markdown"><p>listen on scroll event between 100px ~ 200px in vertical direction</p></div>',"title_zh-CN":"\u63a7\u5236\u6eda\u52a8\u72b6\u6001\u7684\u76d1\u542c","description_zh-CN":'<div class="markdown"><p>\u5728\u5782\u76f4\u65b9\u5411 100px \u5230 200px \u7684\u6eda\u52a8\u8303\u56f4\u5185\u76d1\u542c</p></div>',identifier:"usescrollplus-controlledscroll"},l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(a["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"API"),l.a.createElement(s["a"],{code:"const position = useScrollPlus(target, shouldUpdate);\n",lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(a["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Params"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"target"),l.a.createElement("td",null,"DOM element or Ref object"),l.a.createElement("td",null,"HTMLElement | (() => HTMLElement) | Document | React. MutableRefObject"),l.a.createElement("td",null,l.a.createElement("code",null,"Document"))),l.a.createElement("tr",null,l.a.createElement("td",null,"shouldUpdate"),l.a.createElement("td",null,"controll weather update scroll status"),l.a.createElement("td",null,"(","{"," top: number, left: number","}",") => boolean"),l.a.createElement("td",null,l.a.createElement("code",null,"(","{"," top: number, left: number","}",") => true"))))),l.a.createElement("h3",{id:"result"},l.a.createElement(a["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Result"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"position"),l.a.createElement("td",null,"The current scroll position of the element."),l.a.createElement("td",null,l.a.createElement("code",null,"{"," top: number, left: number, width: number, height: number, leftWidth: number, leftHeight: number","}"))))),l.a.createElement("h3",{id:"position"},l.a.createElement(a["AnchorLink"],{to:"#position","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"position"),l.a.createElement("ul",null,l.a.createElement("li",null,"top: top height scrolled."),l.a.createElement("li",null,"left: left width scrolled."),l.a.createElement("li",null,"width: width of container or document."),l.a.createElement("li",null,"height: height of container or document."),l.a.createElement("li",null,"leftWidth: height scrolled left from bottom."),l.a.createElement("li",null,"leftHeight: width scrolled left from right.")))))}}}]);