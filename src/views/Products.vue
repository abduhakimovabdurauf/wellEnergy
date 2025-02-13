<template>
  <div class="container">
    <h2 class="title">Our Products</h2>

    <div class="main-layout">
      <!-- Filter Section -->
      <div class="filters">
        <button class="toggle-filter" @click="toggleFilters">
          <i class="bx bx-filter"></i> Filters
        </button>

        <transition name="fade">
          <div v-if="showFilters" class="filter-panel">
            <h3>Categories</h3>
            <div class="category-grid">
              <div
                  v-for="(label, category) in categories"
                  :key="category"
                  @click="selectedCategory = category"
                  :class="{ active: selectedCategory === category }"
                  class="category-card"
              >
                {{ label }}
              </div>
            </div>

            <!-- Price Range Filter -->
            <!-- Price Range Filter -->
            <h3>Price Range</h3>
            <div class="price-filter">
              <input type="range" :min="minPrice" :max="maxPrice" v-model="selectedPrice" />
              <span>${{ selectedPrice }}</span>
            </div>

          </div>
        </transition>
      </div>

      <!-- Product Grid -->
      <div class="product-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div class="card-content">
            <router-link :to="name='/productdetails/' + product.id">{{ product.name }}</router-link>
<!--            <p class="product-description">{{ product.description }}</p>-->
<!--            <p class="price">${{ product.price }}</p>-->
            <button class="add-to-cart" @click="addToCart(product)">
              Add to Cart <i class='bx bxs-cart-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const showFilters = ref(true);
const selectedCategory = ref("");

const products = computed(() => store.getters["products/allProducts"]);

console.log(products.value)
const minPrice = computed(() => {
  return products.value.length > 0 ? Math.min(...products.value.map(p => p.price)) : 0;
});
const addToCart = (product) => {
  store.dispatch("cart/addToCart", product);
};
const maxPrice = computed(() => Math.max(...products.value.map(p => p.price), 0));

const selectedPrice = ref(maxPrice.value);

const categories = computed(() => Object.keys(store.state.products.categories));


const filteredProducts = computed(() => {
  return products.value.filter(product => {
    console.log("Filtrlash uchun mahsulot:", product); // Ma'lumotlar kelayotganini tekshirish

    const categoryMatch = !selectedCategory.value || product.category === selectedCategory.value;
    const priceMatch = product.price === null || product.price <= selectedPrice.value;

    console.log("categoryMatch:", categoryMatch, "priceMatch:", priceMatch);

    return categoryMatch && priceMatch;
  });
});


console.log("Filterlangan mahsulotlar:", filteredProducts.value);

const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};
</script>


<style scoped>
/* Global Dark Mode */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  color: #fff;
  min-height: 100vh;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* Layout */
.main-layout {
  display: flex;
  gap: 30px;
}

/* Filter Section */
.filters {
  width: 270px;
}

.toggle-filter {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background: #0e374b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.toggle-filter:hover {
  background: #0c2c3d;
}

.filter-panel {
  background: #0e374b;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  margin-top: 15px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
}

/* Category Grid */
.category-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category-card {
  padding: 12px;
  font-size: 16px;
  background: #003566;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
}

.category-card:hover,
.category-card.active {
  background: #1d5a82;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

/* Price Filter */
.price-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-filter input {
  width: 100%;
  cursor: pointer;
  accent-color: #ffc300;
}

.add-to-cart {
  background: #ffc300;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  margin-top: 10px;
}

.price-filter span {
  font-size: 16px;
  font-weight: bold;
  color: #ffc300;
}

/* Product Grid */
.product-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Product Card */
.product-card {
  background: #1d5a82;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(255, 255, 255, 0.15);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

h3 {
  font-size: 18px;
  margin: 10px 0;
  color: #fff;
}

.product-description {
  font-size: 14px;
  color: #ccc;
}

.price {
  font-size: 16px;
  font-weight: bold;
  color: #ffc300;
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
    align-items: center;
  }

  .filters {
    width: 100%;
  }
}
</style>
