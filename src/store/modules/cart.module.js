import { useToast } from 'vue-toastification';



import img1 from "@/assets/products/fertilizers/1.png";
import img2 from "@/assets/products/fertilizers/2.png";
import img3 from "@/assets/products/fertilizers/3.png";
import img4 from "@/assets/products/fertilizers/4.png";
import img5 from "@/assets/products/fertilizers/5.png";
import img6 from "@/assets/products/fertilizers/6.png";
import img7 from "@/assets/products/fertilizers/7.png";
import img8 from "@/assets/products/fertilizers/8.png";
import img9 from "@/assets/products/fertilizers/9.png";
import img10 from "@/assets/products/fertilizers/10.png";
import img11 from "@/assets/products/fertilizers/11.png";
import img12 from "@/assets/products/fertilizers/12.png";

import ai92 from "@/assets/products/petroleum/ai92.png";
import ai95 from "@/assets/products/petroleum/ai95.png";
import dizel from "@/assets/products/petroleum/dizel.png";

const productImages = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
    7: img7,
    8: img8,
    9: img9,
    10: img10,
    11: img11,
    12: img12,
    92: ai92,
    95: ai95,
    96: dizel,
};

const toast = useToast();

export default {
    namespaced: true,
    state: {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    },
    mutations: {
        ADD_TO_CART(state, product) {
            console.log(product)
            const item = state.cart.find((p) => p.id === product.id);
            toast.success(`Mahsulot savatchaga qo‘shildi!`, {
                position: "top-right",
                timeout: 3000,
            });
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter((item) => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        INCREASE_QUANTITY(state, productId) {
            const item = state.cart.find((p) => p.id === productId);
            if (item) {
                item.quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        DECREASE_QUANTITY(state, productId) {
            const item = state.cart.find((p) => p.id === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit("ADD_TO_CART", product);
        },
        removeFromCart({ commit }, productId) {
            commit("REMOVE_FROM_CART", productId);
        },
        increaseQuantity({ commit }, productId) {
            commit("INCREASE_QUANTITY", productId);
        },
        decreaseQuantity({ commit }, productId) {
            commit("DECREASE_QUANTITY", productId);
        }
    },

    getters: {
        cartItems: (state) =>
            state.cart.map((item) => ({
                ...item,
                image: productImages[item.id] ?? item.image,
            })),
        cartTotal: (state) =>
            state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    }


};
