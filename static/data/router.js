export default [
  {
    "id": 1,
    "title":"Dashboard",
    "path": "/dashboard",
    "icon":"el-icon-discount",
    "children": [
      {
        "id": 1,
        "path": "/dashboard/workplace",
        "title":"工作台",
        "icon":"el-icon-suitcase"
      }
    ]
  },
  {
    "id": 2,
    "title":"系统管理",
    "path": "/system",
    "icon":"el-icon-setting",
    "children": [
      {
        "id": 1,
        "path": "/system/user",
        "title":"用户管理",
        "icon":"el-icon-user"
      },
      {
        "id": 2,
        "path": "/system/role",
        "title":"角色管理",
        "icon":"el-icon-postcard"
      }
    ]
  },
  {
    "id": 3,
    "title":"表单页面",
    "path": "/form",
    "icon":"el-icon-tickets",
    "children": [
      {
        "id": 1,
        "path": "/form/basic",
        "title":"基础表单",
        "icon":"el-icon-document-copy"
      },
      {
        "id": 2,
        "path": "/form/advanced",
        "title":"复杂表单",
        "icon":"el-icon-collection"
      },
      {
        "id": 3,
        "path": "/form/step",
        "title":"分布表单",
        "icon":"el-icon-c-scale-to-original"
      }
    ]
  },
  {
    "id": 3,
    "title":"列表页面",
    "path": "/list",
    "icon":"el-icon-money",
    "children": [
      {
        "id": 1,
        "path": "/list/basic",
        "title":"基础列表",
        "icon":"el-icon-film"
      },
      {
        "id": 2,
        "path": "/list/advanced",
        "title":"复杂列表",
        "icon":"el-icon-notebook-2"
      },
      {
        "id": 3,
        "path": "/list/card",
        "title":"卡片列表",
        "icon":"el-icon-menu"
      }
    ]
  },
  {
    "id": 3,
    "title":"结果页面",
    "path": "/result",
    "icon":"el-icon-circle-check",
    "children": [
      {
        "id": 1,
        "path": "/result/success",
        "title":"成功页",
        "icon":"el-icon-circle-check"
      },
      {
        "id": 2,
        "path": "/result/fail",
        "title":"失败页",
        "icon":"el-icon-circle-close"
      }
    ]
  }
]