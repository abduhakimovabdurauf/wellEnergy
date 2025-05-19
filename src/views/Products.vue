<template>
  <div class="container">
    <h2 class="title">{{ t("products.title") }}</h2>

    <div class="main-layout">
      <!-- Filter Section -->
      <div class="filters">
        <button class="toggle-filter" @click="toggleFilters">
          <i class="bx bx-filter"></i> {{ t("products.filters") }}
        </button>

        <transition name="fade">
          <div v-if="showFilters" class="filter-panel">
            <h3>{{ t("products.categories") }}</h3>

            <div class="category-grid">
              <div
                  @click="selectedCategory = ''"
                  :class="{ active: selectedCategory === '' }"
                  class="category-card all-categories"
                  style="margin-top: 20px"
              >
                All
              </div>
            </div>

            <div class="category-grid">
              <div
                  @click="selectedCategory = 'fertilizers'"
                  :class="{ active: selectedCategory === 'fertilizers' }"
                  class="category-card"
                  style="margin-top: 20px"
              >
                fertilizers
              </div>
            </div>

            <div class="category-grid">
              <div
                  @click="selectedCategory = 'petroleum'"
                  :class="{ active: selectedCategory === 'petroleum' }"
                  class="category-card"
                  style="margin-top: 20px"
              >
                petroleum
              </div>
            </div>

            <div class="category-grid">
              <div
                  @click="selectedCategory = 'refiner'"
                  :class="{ active: selectedCategory === 'refiner' }"
                  class="category-card"
                  style="margin-top: 20px"
              >
                refiners
              </div>
            </div>

            <!-- Price Range Filter -->
            <h3>{{ t("products.priceRange") }}</h3>
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
            <router-link class="card_link" :to="'/productdetails/' + product.id">{{ product.name[locale] }}</router-link>
            <button class="add-to-cart" @click="addToCart(product)">
              {{ t("products.addToCart") }} <i class='bx bxs-cart-alt'></i>
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
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const store = useStore();
const showFilters = ref(true);
const selectedCategory = ref("");

const products = computed(() => store.getters["products/allProducts"]);

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
    const categoryMatch = !selectedCategory.value || product.category === selectedCategory.value;
    const priceMatch = product.price === null || product.price <= selectedPrice.value;
    return categoryMatch && priceMatch;
  });
});

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
  background: #fff;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 5px 5px rgba(0,0,0,0.3) ;

}

.filter-panel {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0,0,0,0.3) ;

  margin-top: 15px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: black !important;
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
  box-shadow: 0 5px 5px rgba(0,0,0,0.3) ;

}

.category-card:hover,
.category-card.active {
  background: #074a89;
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
  accent-color: #003566;
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
  transition: all .4s;
}

.add-to-cart:hover {
  transform: scale(.95);
}

.price-filter span {
  font-size: 16px;
  font-weight: bold;
  color: #003566;
}

/* Product Grid */
.product-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.card_link {
  text-decoration: none;
}
/* Product Card */
.product-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0,0,0,0.3) ;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-2px);
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

.price {
  font-size: 16px;
  font-weight: bold;
  color: #ffc300;
}

@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
    align-items: center;
  }

  .filters {
    width: 100%;
  }
}

.product-card {
  overflow: hidden;
}

.product-image {
  transition: transform 0.3s ease-in-out;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

</style>
