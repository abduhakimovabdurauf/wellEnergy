<template>
  <div class="product-details" v-if="product">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="price">${{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
      <div class="btn-group">
        <button class="buy-btn">Add to Cart <i class='bx bxs-cart-alt'></i></button>
        <router-link to="/products" class="back-btn">Back to Products <i class='bx bx-arrow-back'></i></router-link>
      </div>


    </div>
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const productId = computed(() => route.params.id);
const product = computed(() =>
    store.getters["products/allProducts"].find(p => p.id === Number(productId.value))
);
</script>

<style scoped>
.product-details {
  display: flex;
  gap: 30px;
  max-width: 1000px;
  margin: 50px auto;
  padding: 30px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: #333;
}

.product-image img {
  width: 450px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
}

.price {
  font-size: 26px;
  font-weight: bold;
  color: #ff6600;
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.btn-group {
  display: flex;
  width: 100%;
}

.buy-btn {
  padding: 12px 25px;
  max-width: 200px;
  font-size: 18px;
  font-weight: bold;
  background: #ff6600;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 10px;
}

.buy-btn:hover {
  background: #e05500;
}

.buy-btn i {
  font-size: 22px;
}

.back-btn {
  width: 200px;
  border: none;
  background-color: #074a89;
  color: white;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all .4s;
  text-decoration: none;
}

.back-btn:hover {
  background-color: #001d3d;
}
</style>
