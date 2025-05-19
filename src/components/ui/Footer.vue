<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>{{ t('footer.aboutCompany') }}</h3>
        <p>{{ t('footer.aboutText') }}</p>
      </div>

      <div class="footer-section">
        <h3>{{ t('footer.navigation') }}</h3>
        <ul>
          <li><router-link to="/about">{{ t('footer.aboutUs') }}</router-link></li>
          <li><router-link to="/products">{{ t('footer.catalog') }}</router-link></li>
          <li><router-link to="/contact">{{ t('footer.contacts') }}</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>{{ t('footer.contactTitle') }}</h3>
        <p><i class='bx bx-map'></i> {{ t('footer.address') }}</p>
        <p><i class='bx bx-phone'></i> {{ t('footer.phone') }}</p>
        <p><i class='bx bx-envelope'></i> <a href="mailto:luenfatbusiness@gmail.com">luenfatbusiness@gmail.com</a></p>
        <div class="social-icons">
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-telegram'></i></a>
          <a href="#"><i class='bx bxl-instagram'></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>{{ t('footer.rights') }}</p>
      <p class="developed">{{ t('footer.developed') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>


<style scoped>
.footer {
  background-color: #111;
  color: #f1f1f1;
  padding: 30px 20px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: auto;
}

.footer-section {
  flex: 1;
  margin: 15px;
  min-width: 250px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section ul li a {
  color: #f1f1f1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ffcc00;
}

.footer-section p i {
  margin-right: 8px;
}

.footer-section a {
  color: #f1f1f1;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.social-icons {
  margin-top: 10px;
}

.social-icons a {
  margin: 0 8px;
  font-size: 22px;
  color: #f1f1f1;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #ffcc00;
}

.footer-bottom {
  display: flex;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: space-between;
  border-top: 1px solid #333;
  padding-top: 15px;
  font-size: 14px;
}

.developed {
  margin-top: 10px;
  font-size: 14px;
  color: #aaa;
}
</style>
