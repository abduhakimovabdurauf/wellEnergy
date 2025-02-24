<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="">
        <p>
          Well Energy
          <span>Chem Oil Machinery Limited</span>
        </p>
      </router-link>

      <!-- Navbar -->
      <nav :class="['nav', { 'open': isOpen }]">
        <ul>
          <li><router-link to="/" class="animated-link">{{ t('home') }}</router-link></li>
          <li><router-link to="/products" class="animated-link">{{ t('product') }}</router-link></li>
          <li><router-link to="/contact" class="animated-link">{{ t('contact') }}</router-link></li>
          <li>
            <a class="animated-link phone_number" href="tel:+85235807372">
              <i class='bx bxs-phone'></i> {{ t('phone') }}
            </a>
          </li>
          <li>
            <button class="cart-btn">
              <select v-model="currentLocale">
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
              <router-link style="color: white;font-size: 28px" to="/cart">
                <i class="bx bx-cart"></i>
              </router-link>
            </button>
          </li>
        </ul>
      </nav>



      <button class="menu-btn" @click="toggleMenu">
        <i class="bx" :class="isOpen ? 'bx-x' : 'bx-menu'"></i>
      </button>
    </div>
  </header>

  <section class="mobile-menu" :class="{ 'open': isOpen }">
    <ul>
      <li><a href="#">{{ t('home') }}</a></li>
      <li><a href="#">{{ t('product') }}</a></li>
      <li><a href="#">{{ t('contact') }}</a></li>
      <li><a href="tel:+85235807372">{{ t('phone') }}</a></li>
      <li>
        <button class="cart-btn">
          <select v-model="currentLocale">
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
          <router-link style="color: white;font-size: 28px" to="/cart">
            <i class="bx bx-cart"></i>
          </router-link>
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useI18n} from 'vue-i18n';

const {t, locale} = useI18n();

const currentLocale = computed({
  get: () => locale.value,
  set: (lang) => {
    locale.value = lang;
  }
});

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value)
};
</script>


<style scoped>


* {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.header {
  background-color: #000814;
  padding: 15px 20px;
  color: #fff;
  position: sticky;
  z-index: 9999;
  top: 0;
  left: 0;
}


.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: start;

  color: #fff;
}

.logo p {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 30px;
  display: flex;
  flex-direction: column;
}

.logo img {
  width: 80px;
  height: 80px;
}

.logo span {
  font-size: .8rem;
}

.phone_number {
  margin-left: 100px;
}

.nav ul {
  list-style: none;
  gap: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  margin: 0;
}

.nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  transition: 0.3s;
}

.nav ul li a:hover {
  color: #ffc300;
}
.cart-btn {
  display: flex;
  align-items: center;
}

.cart-btn, .menu-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.cart-btn i {
  margin: 5px;
}

.menu-btn:hover {
  color: #ffc300;
}

.menu-btn {
  display: none;
}

.mobile-menu {
  display: none;
}

@media (max-width: 1100px) {
  .menu-btn {
    display: block;
  }

  .nav {
    display: none;
  }

  .mobile-menu {
    position: fixed;
    top: 60px;
    right: 0;
    width: 100%;
    z-index: 999999999999999999999999;
    background-color: #2C3E50;
    text-align: center;
    padding: 20px 0;
    display: block;
    transform: translateY(-150%);
    transition: transform 0.3s ease-in-out;
  }

  .mobile-menu.open {
    transform: translateY(40px);
  }

  .mobile-menu ul {
    list-style: none;
    padding: 0;
  }

  .mobile-menu ul li {
    margin: 10px 0;
  }

  .cart-btn {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .mobile-menu ul li a {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    transition: 0.3s;
  }

  .mobile-menu ul li a:hover {
    color: #ffc300;
  }
}

select {
  background-color: #000814; /* Fond rangi */
  color: white; /* Matn rangi */
  border: 2px solid #ffc300; /* Chegara rangi */
  padding: 8px 12px; /* Ichki joylashuv */
  border-radius: 8px; /* Burchaklarni yumaloqlash */
  font-size: 1rem; /* Matn o‘lchami */
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  margin-right: 5px;
}

select:hover {
  background-color: #111927;
}

select:focus {
  border-color: #ffcc00;
}

option {
  background-color: #000814; /* Options fond rangi */
  color: white; /* Options matn rangi */
}

</style>
