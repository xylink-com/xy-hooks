/**
 *
 * @param element 监听事件的元素
 * @param event 事件的类型
 * @param handler 事件处理方法
 * @param useCapture 事件在捕获(true)或冒泡(false)阶段执行
 * @兼容性：
 * addEventListener： chrome，firefox，IE9;
 * attachEvent：IE8 及IE8以下
 */
export function addEventListener(element, event, handler, useCapture: boolean = false) {
  if (element.addEventListener) {
    element.addEventListener(event, handler, useCapture);
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, handler, useCapture);
  } else {
    element['on' + event] = null;
  }
}

/**
 *
 * @param element 解除监听事件的元素
 * @param event 解除事件的类型
 * @param handler 解除事件处理方法
 * @param useCapture 解除事件在捕获(true)或冒泡(false)阶段执行
 * @兼容性：
 * addEventListener： chrome，firefox，IE9;
 * attachEvent：IE8 及IE8以下
 */
export function removeEventListener(element, event, handler, useCapture: boolean = false) {
  if (element.addEventListener) {
    element.removeEventListener(event, handler, useCapture);
  } else if (element.attachEvent) {
    element.detachEvent('on' + event, handler, useCapture);
  } else {
    element['on' + event] = null;
  }
}