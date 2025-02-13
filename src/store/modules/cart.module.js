export default {
    namespaced: true,
    state: {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    },
    mutations: {
        ADD_TO_CART(state, product) {
            const item = state.cart.find((p) => p.id === product.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            alert('Muvaffaqiyatli qoshildi!');
        },
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter((item) => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit("ADD_TO_CART", product);
        },
        removeFromCart({ commit }, productId) {
            commit("REMOVE_FROM_CART", productId);
        },
    },
    getters: {
        cartItems: (state) => state.cart,
        cartTotal: (state) =>
            state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    },
};
