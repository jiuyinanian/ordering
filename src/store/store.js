import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    shoppingCar: [],
    isLogin: false,
    users: null
  },
  mutations: {
    addgoods: (state, product) => {
      // state.products[product.id - 1].number ++;
      // console.log(state.products[product.id - 1].id, state.products[product.id - 1].number)
      if (state.shoppingCar.length > 0) {
        let res = state.shoppingCar.filter(item => {
          return item.id === product.id;
        })
        if (res != null && res.length > 0) {
          res[0].number++;
        } else {
          state.products[product.id - 1].number++;
          state.shoppingCar.push(product)
        }
      } else {
        state.products[product.id - 1].number++;
        state.shoppingCar.push(product)
      }
      // console.log(state.shoppingCar)
    },
    decreasegoods: (state, product) => {
      // console.log(state.shoppingCar)
      if (state.products[product.id - 1].number > 0) {
        state.products[product.id - 1].number--;
        if (state.products[product.id - 1].number == 0) {
          state.shoppingCar.splice(state.shoppingCar.indexOf(product), 1)
        }
      }
    },
    removegoods: (state, product) => {
      state.shoppingCar.splice(state.shoppingCar.indexOf(product), 1);
      state.products[product.id - 1].number = 0;
    },
    changeLogin: (state, bool) => {
      state.isLogin = bool;
    },
    changeUser: (state, name) => {
      state.users = name;
    }
  },
  actions: {
    add: (context, product) => {
      // console.log(id);
      context.commit("addgoods", product);
    },
    decrease: (context, product) => {
      // console.log(id);
      context.commit("decreasegoods", product);
    },
    remove: (context, product) => {
      context.commit("removegoods", product);
    },
    setLogin: (context, bool) => {
      context.commit("changeLogin", bool)
    },
    setUser: (context, name) => {
      context.commit("changeUser", name)
    }
  }
})

export default store
