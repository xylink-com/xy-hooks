/**
 * title: Basic Usage
 * desc: scroll down and images will load lazily.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 向下滚动图片将懒加载。
 */
import React from 'react';
import { useLazyLoad } from 'xy-hooks';
import './basic.scss';

export default () => {
  useLazyLoad();
  return (
    <div className="img-wrapper">
      <img data-src="https://img-blog.csdnimg.cn/20190524171929234.gif" alt="" srcSet="" />
      <img
        data-src="https://img-blog.csdnimg.cn/20190524163828967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"
        alt=""
        srcSet=""
      />
      <img
        data-src="https://img-blog.csdnimg.cn/20190524164645631.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"
        alt=""
        srcSet=""
      />
      <img
        data-src="https://img-blog.csdnimg.cn/20190524171459728.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"
        alt=""
        srcSet=""
      />
      <img
        data-src="https://img-blog.csdnimg.cn/20190524171649103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70"
        alt=""
        srcSet=""
      />
      <img data-src="https://img-blog.csdnimg.cn/20190524171800631.gif" alt="" srcSet="" />
      <img
        data-src="https://pic1.zhimg.com/v2-9e04e40bcc26d65ca6e5c1e0dacf3759_1440w.jpg?source=172ae18b"
        alt=""
        srcSet=""
      />
      <img
        data-src="https://pic3.zhimg.com/80/v2-ed3501641e343f3e67929f7ee13f359e_1440w.jpg"
        alt=""
        srcSet=""
      />
      <img
        data-src="https://pic1.zhimg.com/80/v2-af1ab0c5f34e468e8647135c1f9f51e4_1440w.jpg"
        alt=""
        srcSet=""
      />
      <img
        data-src="https://pic1.zhimg.com/80/v2-641fabfd753a1fa5f4749cc8d72d61b0_1440w.jpg"
        alt=""
        srcSet=""
      />
      {/* <img data-src="" alt="" srcSet=""/>
    <img data-src="" alt="" srcSet=""/>
    <img data-src="" alt="" srcSet=""/>
    <img data-src="" alt="" srcSet=""/> */}
    </div>
  );
};
