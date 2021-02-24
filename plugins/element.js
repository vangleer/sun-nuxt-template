// element-ui 配置文件
import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Input,
  Message,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Col,
  Row,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tabs,
  TabPane
} from 'element-ui'
// 自定义主题文件
import '@/assets/css/element-variables.scss'
// 安装组件
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Button)
Vue.use(Input)
Vue.use(ButtonGroup)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.prototype.$message = Message