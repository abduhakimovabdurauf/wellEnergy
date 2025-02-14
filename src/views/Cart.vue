<template>
  <div class="cart-container">
    <h1>{{ t("cartDetails.title") }}</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-image" />
        <div class="item-details">
          <h3>{{ item?.name?.[locale] ?? t("cartDetails.unknown") }}</h3>
          <p class="price">{{ t("cartDetails.price") }}: ${{ item?.price?.[locale] ?? 0 }}</p>

          <div class="quantity-controls">
            <button @click="decreaseQuantity(item.id)" class="quantity-btn">-</button>
            <span class="quantity">{{ t("cartDetails.quantity") }}: {{ item?.quantity?.[locale] ?? 0 }}</span>
            <button @click="increaseQuantity(item.id)" class="quantity-btn">+</button>
          </div>
          <button @click="removeFromCart(item.id)" class="remove-btn">{{ t("cartDetails.remove") }}</button>
        </div>
      </div>
      <h2 class="total">{{ t("cartDetails.total") }}: ${{ cartTotal }}</h2>
    </div>
    <p v-else class="empty-message">{{ t("cartDetails.emptyMessage") }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const store = useStore();
const cartItems = computed(() => store.getters["cart/cartItems"]);
const cartTotal = computed(() => store.getters["cart/cartTotal"]);

const removeFromCart = (productId) => {
  store.dispatch("cart/removeFromCart", productId);
};

const increaseQuantity = (productId) => {
  store.dispatch("cart/increaseQuantity", productId);
};

const decreaseQuantity = (productId) => {
  store.dispatch("cart/decreaseQuantity", productId);
};
</script>

<style scoped>
.cart-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #222;
  font-weight: bold;
}

.cart-item {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}

.cart-item:hover {
  transform: translateY(-3px);
}

.cart-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
  border: 2px solid #ddd;
}

.item-details {
  flex: 1;
}

h3 {
  margin: 0;
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.price {
  margin: 5px 0;
  color: #444;
  font-size: 16px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 10px;
}

.quantity {
  font-size: 18px;
  font-weight: bold;
  color: #222;
}

.quantity-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 14px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  transition: background 0.3s;
}

.quantity-btn:hover {
  background: #0056b3;
}

.remove-btn {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.3s;
  margin-top: 10px;
}

.remove-btn:hover {
  background: #cc0000;
}

.total {
  text-align: right;
  font-size: 22px;
  color: #222;
  font-weight: bold;
  margin-top: 20px;
}

.empty-message {
  text-align: center;
  color: #888;
  font-size: 18px;
  margin-top: 20px;
  font-style: italic;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }

  .cart-image {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  .quantity-controls {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .cart-container {
    padding: 15px;
  }

  h1 {
    font-size: 22px;
  }

  .cart-item {
    padding: 10px;
  }

  .cart-image {
    width: 80px;
    height: 80px;
  }

  .quantity-controls {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
