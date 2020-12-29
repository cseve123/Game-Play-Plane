import createApp from './src/runtime-canvas/index'
import App from './src/App'
import RootContainer from './src/Game'

// 需要根组件App, 需要根容器
createApp(App).mount(RootContainer())