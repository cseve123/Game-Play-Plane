import { createRenderer } from '@vue/runtime-core'
// createRender里有createApp insert patchProp
import { Graphics, Text } from 'pixi.js' // 这个库创建矩形

const rendderer = new createRenderer({
    createElement (type) {
        console.log(type)
        let element;
        if (type === 'rect') {
            element = new Graphics()
            element.beginFill(0xff0000)
            element.drawRect(0, 0, 500, 500)
            element.endFill()
        }
        if (type === 'circle') {
            element = new Graphics()
            element.beginFill(0x00ff00)
            element.drawCircle(0, 0, 50)
            element.endFill()
        }
        return element
    },
    insert(el, parent) {
        console.log(el, parent)
        parent.addChild(el)
    },
    // 处理属性的
    patchProp (el, key, preVal, nextVal) {
        el[key] = nextVal
    },
    // 处理文本的
    setElementText (node, text) {
        const cText = new Text(text)
        node.addChild(cText)
    },
    createText (text) {
        return new Text(text)
    }
})
// 模拟createApp(App).mount('#app')
export default function createApp (rootComponent) {
    return rendderer.createApp(rootComponent)
}