# Sun-Nuxt-Admin 后台管理系统

## 描述

- 基于 Nuxtjs + Element-ui 实现的中后台管理系统模板

## 安装

- npx create-nuxt-app <项目名>
- 需要选择一些项目配置，可根据自己的需求添加或不加

## 配置 Element-ui

- 下载：npm install element-ui -S
- 引入：使用插件的形式引入

  1. 在 plugins 目录下创建一个 element.js 文件

  ```javascript
  import Vue from "vue";

  import { Button } from "element-ui";

  // 自定义主题时引入的文件
  import "@/assets/css/element-variables.scss";

  Vue.use(Button);
  ```

  2. 在 nuxt.config.js 的 plugins 中添加如下代码

  ```javascript
    export default {
      ...
      plugins: [
        {
          src: '~plugins/element.js',
          ssr: true
        }
      ]
      ...
    }
  ```

  3. 配置按需加载，下载 babel-plugin-component 插件 npm install babel-plugin-component -D
  4. 在 nuxt.config.js 的 build 中添加如下代码

  ```javascript
   export default {
     ...
     build: {
       analyze: {
         analyzerMode: 'static'
       },
       // 按需引入element-ui
       babel: {
         plugins: [
           [ "component",
             {
             "libraryName": "element-ui",
             "styleLibraryName": "theme-chalk"
             }
           ]
         ]
       }
     }
     ...
   }
  ```

  5. 自定义主题，在 assets 文件夹下创建一个 element-variables.scss 文件

  ```css
  /* 改变主题色变量 */
  $--color-primary: #30c7b4;

  /* 改变 icon 字体路径变量，必需 */
  $--font-path: "~element-ui/lib/theme-chalk/fonts";

  @import "~element-ui/packages/theme-chalk/src/index";
  ```

  6. 最后在 plugins/element.js 中引入这个文件即可

  ```javascript
  // 自定义主题时引入的文件
  import "@/assets/css/element-variables.scss";
  ```
