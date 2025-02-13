import { createStore } from 'vuex';
import products from "./modules/product.module.js";
import cart from "./modules/cart.module.js";
import popular from "@/store/modules/popular.module.js";
const store = createStore({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },

    modules: {
        products,
        cart,
        popular,
    },
});

export default store;
