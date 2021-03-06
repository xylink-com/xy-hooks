(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{qNC5:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),a=t.n(i),l=t("dEAq"),r=t("0zqC"),s=t("ZpkN"),o=a.a.memo(t("JjdP").default["usescrollplus-basicscroll"].component),c=a.a.memo(t("JjdP").default["usescrollplus-documentscroll"].component),u=a.a.memo(t("JjdP").default["usescrollplus-controlledscroll"].component);n["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"usescrollplus"},a.a.createElement(l["AnchorLink"],{to:"#usescrollplus","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"useScrollPlus"),a.a.createElement("p",null,"\u83b7\u53d6\u5143\u7d20\u6eda\u52a8\u7684\u4f4d\u7f6e\u4fe1\u606f\uff0c\u5305\u62ec\u5df2\u7ecf\u6eda\u52a8\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3001\u6eda\u52a8\u5bb9\u5668\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3001\u5269\u4f59\u672a\u6eda\u52a8\u90e8\u5206\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002 \u57fa\u4e8e ahooks \u4e2d\u7684useScroll\u3002"),a.a.createElement("h2",{id:"examples"},a.a.createElement(l["AnchorLink"],{to:"#examples","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"Examples")),a.a.createElement(r["default"],{sources:{_:{tsx:"import React, { useRef } from 'react';\nimport { useScrollPlus } from 'xy-hooks';\n\nexport default () => {\n  const ref = useRef(null);\n  const scroll = useScrollPlus(ref.current);\n\n  return (\n    <>\n      <div>{JSON.stringify(scroll)}</div>\n      <div\n        style={{\n          height: '160px',\n          width: '160px',\n          border: 'solid 1px #000',\n          overflow: 'scroll',\n          whiteSpace: 'nowrap',\n          fontSize: '32px',\n        }}\n        ref={ref}\n      >\n        <div>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex\n          excepturi explicabo iste iure labore molestiae neque optio perspiciatis\n        </div>\n        <div>\n          Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda\n          consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt\n        </div>\n        <div>\n          Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus\n          magni modi mollitia nihil nisi provident\n        </div>\n        <div>\n          Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,\n          quia quisquam repellendus reprehenderit.\n        </div>\n        <div>\n          Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,\n          consectetur corporis cum deserunt distinctio dolore eius est exercitationem\n        </div>\n        <div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>\n        <div>\n          Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore\n          earum, eum expedita facilis\n        </div>\n        <div>\n          Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque\n          dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi\n        </div>\n      </div>\n    </>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Basic Usage",description:'<div class="markdown"><p>Try to scroll the box below.</p></div>',"title_zh-CN":"\u57fa\u7840\u7528\u6cd5","description_zh-CN":'<div class="markdown"><p>\u5c1d\u8bd5\u6eda\u52a8\u4e00\u4e0b\u6587\u5b57\u5185\u5bb9\u3002</p></div>',identifier:"usescrollplus-basicscroll"},a.a.createElement(o,null)),a.a.createElement("div",{className:"markdown"}),a.a.createElement(r["default"],{sources:{_:{tsx:"import React from 'react';\nimport {useScrollPlus} from 'xy-hooks';\n\nexport default () => {\n  const scroll = useScrollPlus(document);\n  return (\n    <div>\n      <div>{JSON.stringify(scroll)}</div>\n    </div>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Detect Whole Page Scroll",description:'<div class="markdown"><p>Try to scroll this webpage.</p></div>',"title_zh-CN":"\u76d1\u6d4b\u6574\u9875\u7684\u6eda\u52a8","description_zh-CN":'<div class="markdown"><p>\u5c1d\u8bd5\u6eda\u52a8\u4e00\u4e0b\u9875\u9762\u3002</p></div>',identifier:"usescrollplus-documentscroll"},a.a.createElement(c,null)),a.a.createElement("div",{className:"markdown"}),a.a.createElement(r["default"],{sources:{_:{tsx:"import React, { useRef } from 'react';\nimport {useScrollPlus} from 'xy-hooks';\n\nexport default () => {\n  const ref = useRef(null);\n\n  const scroll = useScrollPlus(ref.current, (val) => val.top > 100 && val.top < 200);\n\n  return (\n    <>\n      <div>{JSON.stringify(scroll)}</div>\n      <div\n        className={'main'}\n        style={{\n          height: '160px',\n          width: '160px',\n          border: 'solid 1px #000',\n          overflow: 'scroll',\n          whiteSpace: 'nowrap',\n          fontSize: '36px',\n        }}\n        ref={ref}\n      >\n        <div>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex\n          excepturi explicabo iste iure labore molestiae neque optio perspiciatis\n        </div>\n        <div>\n          Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda\n          consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt\n        </div>\n        <div>\n          Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus\n          magni modi mollitia nihil nisi provident\n        </div>\n        <div>\n          Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,\n          quia quisquam repellendus reprehenderit.\n        </div>\n        <div>\n          Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,\n          consectetur corporis cum deserunt distinctio dolore eius est exercitationem\n        </div>\n        <div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>\n        <div>\n          Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore\n          earum, eum expedita facilis\n        </div>\n        <div>\n          Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque\n          dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi\n        </div>\n      </div>\n    </>\n  );\n};\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Control listen on scroll status",description:'<div class="markdown"><p>listen on scroll event between 100px ~ 200px in vertical direction</p></div>',"title_zh-CN":"\u63a7\u5236\u6eda\u52a8\u72b6\u6001\u7684\u76d1\u542c","description_zh-CN":'<div class="markdown"><p>\u5728\u5782\u76f4\u65b9\u5411 100px \u5230 200px \u7684\u6eda\u52a8\u8303\u56f4\u5185\u76d1\u542c</p></div>',identifier:"usescrollplus-controlledscroll"},a.a.createElement(u,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"API"),a.a.createElement(s["a"],{code:"const position = useScrollPlus(target, shouldUpdate);\n",lang:"ts"}),a.a.createElement("h3",{id:"params"},a.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"Params"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u63cf\u8ff0"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"target"),a.a.createElement("td",null,"DOM \u8282\u70b9\u6216\u8005 Ref \u5bf9\u8c61"),a.a.createElement("td",null,"HTMLElement | (() => HTMLElement) | Document | React. MutableRefObject"),a.a.createElement("td",null,a.a.createElement("code",null,"Document"))),a.a.createElement("tr",null,a.a.createElement("td",null,"shouldUpdate"),a.a.createElement("td",null,"\u63a7\u5236\u662f\u5426\u66f4\u65b0\u6eda\u52a8\u4fe1\u606f"),a.a.createElement("td",null,"`(","{"," top: number, left: number","}",") => boolean"),a.a.createElement("td",null,"(","{"," top: number, left: number","}",") => true`")))),a.a.createElement("h3",{id:"result"},a.a.createElement(l["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"Result"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u63cf\u8ff0"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"position"),a.a.createElement("td",null,"\u6eda\u52a8\u5bb9\u5668\u7684\u6eda\u52a8\u4f4d\u7f6e\u4fe1\u606f."),a.a.createElement("td",null,a.a.createElement("code",null,"{"," top: number, left: number, width: number, height: number, leftWidth: number, leftHeight: number","}"))))),a.a.createElement("h3",{id:"position"},a.a.createElement(l["AnchorLink"],{to:"#position","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"position"),a.a.createElement("ul",null,a.a.createElement("li",null,"top: \u6eda\u52a8\u5bb9\u5668\u5df2\u7ecf\u6eda\u52a8\u7684\u9ad8\u5ea6\u3002"),a.a.createElement("li",null,"left: \u6eda\u52a8\u5bb9\u5668\u5df2\u7ecf\u6eda\u52a8\u7684\u5bbd\u5ea6\u3002"),a.a.createElement("li",null,"width: \u6eda\u52a8\u5bb9\u5668\u7684\u5bbd\u5ea6\u3002"),a.a.createElement("li",null,"height: \u6eda\u52a8\u5bb9\u5668\u7684\u9ad8\u5ea6\u3002"),a.a.createElement("li",null,"leftWidth: \u6eda\u52a8\u5bb9\u5668\u5269\u4f59\u672a\u6eda\u52a8\u7684\u5bbd\u5ea6\u3002"),a.a.createElement("li",null,"leftHeight: \u6eda\u52a8\u5bb9\u5668\u5269\u4f59\u672a\u6eda\u52a8\u7684\u9ad8\u5ea6\u3002")))))}}}]);