export const state = () => ({
  counter: 0,
  theme: {
    navBg: '#03152A',
    navItemBg: '#30c7b4',
    navTextColor:'#fff'
  },
  routeList:[],
  isCollapse: true // 是否展开 menu
  
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  M_UPDATA_ROUTELIST(state,payload) {
    state.routeList = payload
  },
  M_UPDATE_IS_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
  }
}

export const actions = {
  A_UPDATA_ROUTELIST(state,payload) {
    console.log(state)
    state.routeList = payload
  }
}
