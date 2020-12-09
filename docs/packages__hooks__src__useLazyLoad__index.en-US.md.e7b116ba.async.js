(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{Rj1q:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),c=t("dEAq"),r=t("0zqC"),s=t("ZpkN"),i=l.a.memo(t("JjdP").default["uselazyload-basic"].component);a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"uselazyload"},l.a.createElement(c["AnchorLink"],{to:"#uselazyload","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"useLazyLoad"),l.a.createElement("p",null,"lazy load for images implements by IntersectionObserver, supporting default loading image."),l.a.createElement("h2",{id:"examples"},l.a.createElement(c["AnchorLink"],{to:"#examples","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Examples")),l.a.createElement(r["default"],{sources:{_:{tsx:'import React from \'react\';\nimport { useLazyLoad } from \'xy-hooks\';\nimport \'./basic.scss\';\n\nexport default () => {\n  useLazyLoad();\n  return (\n    <div className="img-wrapper">\n      <img data-src="https://img-blog.csdnimg.cn/20190524171929234.gif" alt="" srcSet="" />\n      <img\n        data-src="https://img-blog.csdnimg.cn/20190524163828967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"\n        alt=""\n        srcSet=""\n      />\n      <img\n        data-src="https://img-blog.csdnimg.cn/20190524164645631.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"\n        alt=""\n        srcSet=""\n      />\n      <img\n        data-src="https://img-blog.csdnimg.cn/20190524171459728.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"\n        alt=""\n        srcSet=""\n      />\n      <img\n        data-src="https://img-blog.csdnimg.cn/20190524171649103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"\n        alt=""\n        srcSet=""\n      />\n      <img data-src="https://img-blog.csdnimg.cn/20190524171800631.gif" alt="" srcSet="" />\n      <img\n        data-src="https://pic1.zhimg.com/v2-9e04e40bcc26d65ca6e5c1e0dacf3759_1440w.jpg?source=172ae18b"\n        alt=""\n        srcSet=""\n      />\n      <img\n        data-src="https://pic3.zhimg.com/80/v2-ed3501641e343f3e67929f7ee13f359e_1440w.jpg"\n        alt=""\n        srcSet=""\n      />\n      <img\n        data-src="https://pic1.zhimg.com/80/v2-af1ab0c5f34e468e8647135c1f9f51e4_1440w.jpg"\n        alt=""\n        srcSet=""\n      />\n      <img\n        data-src="https://pic1.zhimg.com/80/v2-641fabfd753a1fa5f4749cc8d72d61b0_1440w.jpg"\n        alt=""\n        srcSet=""\n      />\n      {/* <img data-src="" alt="" srcSet=""/>\n    <img data-src="" alt="" srcSet=""/>\n    <img data-src="" alt="" srcSet=""/>\n    <img data-src="" alt="" srcSet=""/> */}\n    </div>\n  );\n};\n'},"basic.scss":{import:"./basic.scss",content:".img-wrapper {\n  img {\n    width: 80%;\n    height: 200px;\n  }\n}\n"}},dependencies:{react:{version:"16.14.0"},"xy-hooks":{version:"1.0.0"}},title:"Basic Usage",description:'<div class="markdown"><p>scroll down and images will load lazily.</p></div>',"title_zh-CN":"\u57fa\u7840\u7528\u6cd5","description_zh-CN":'<div class="markdown"><p>\u5411\u4e0b\u6eda\u52a8\u56fe\u7247\u5c06\u61d2\u52a0\u8f7d\u3002</p></div>',identifier:"uselazyload-basic"},l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},"open chrome dev tools of network tab to see what happened.",l.a.createElement("h2",{id:"api"},l.a.createElement(c["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"API"),l.a.createElement(s["a"],{code:"import { useLazyLoad } from 'xy-hooks';\nuseLazyLoad();\n",lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(c["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Params"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"originSrc"),l.a.createElement("td",null,"origin tag attr to load source"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"'src'")),l.a.createElement("tr",null,l.a.createElement("td",null,"fakeSrc"),l.a.createElement("td",null,"fake tag dataset attr to load source"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"'src'(that would be 'data=src')")),l.a.createElement("tr",null,l.a.createElement("td",null,"loading"),l.a.createElement("td",null,"loading for lazy loaded images"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"defaultLoading")))))))}}}]);