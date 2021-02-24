export const state = () => ({
  counter: 0,
  theme: {
    navBg: '#03152A',
    navItemBg: '#30c7b4'
  },
  routeList:[]
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  M_UPDATA_ROUTELIST(state,payload) {
    state.routeList = payload
  }
}

export const actions = {
  A_UPDATA_ROUTELIST(state,payload) {
    console.log(state)
    state.routeList = payload
  }
}
