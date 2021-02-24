// element-ui 配置文件
import Vue from 'vue'
import {Button,ButtonGroup,Input,Message} from 'element-ui'
// 自定义主题文件
import '@/assets/css/element-variables.scss'
// 安装组件
Vue.use(Button)
Vue.use(Input)
Vue.use(ButtonGroup)
Vue.prototype.$message = Message