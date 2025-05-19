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
  max-width: 950px;
  margin: 40px auto;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  align-items: center;
  background: #ffffff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.cart-image {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 20px;
  border: 2px solid #ddd;
}

.item-details {
  flex: 1;
}

h3 {
  margin: 0;
  font-size: 22px;
  color: #333;
  font-weight: 600;
}

.price {
  margin: 8px 0;
  color: #666;
  font-size: 18px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 12px;
}

.quantity {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.quantity-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 12px;
  font-size: 18px;
  transition: background 0.3s, transform 0.2s;
}

.quantity-btn:hover {
  background: #0056b3;
  transform: scale(1.1);
}

.remove-btn {
  background: #e53e3e;
  color: white;
  border: none;
  padding: 12px 18px;
  cursor: pointer;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
  margin-top: 15px;
}

.remove-btn:hover {
  background: #c53030;
  transform: scale(1.05);
}

.total {
  text-align: right;
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-top: 30px;
}

.empty-message {
  text-align: center;
  color: #aaa;
  font-size: 20px;
  margin-top: 20px;
  font-style: italic;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    text-align: center;
    padding: 18px;
  }

  .cart-image {
    width: 110px;
    height: 110px;
    margin-bottom: 15px;
  }

  .quantity-controls {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .cart-container {
    padding: 20px;
  }

  h1 {
    font-size: 24px;
  }

  .cart-item {
    padding: 15px;
  }

  .cart-image {
    width: 90px;
    height: 90px;
  }

  .quantity-controls {
    flex-direction: column;
    gap: 8px;
  }

  .total {
    font-size: 20px;
  }
}
</style>
