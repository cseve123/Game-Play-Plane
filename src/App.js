import { defineComponent, h } from '@vue/runtime-core'
import Circle from './components/Circle'

// 根组件
export default defineComponent({
    render () {
        // 创建vnode
        // 等价<rect x=100 y=100>文本内容！！！<circle>11</circle></rect>
        // const vnode = h('rect', {x: 100, y: 100}, '文本内容！！！')
        const vnode = h('rect', {x: 100, y: 100}, [
            '文本内容！！！',
            // h('circle', {x: 150, y: 150})
            h(Circle)
        ])
        return vnode
    }
})