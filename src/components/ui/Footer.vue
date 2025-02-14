<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>About Company</h3>
        <p>
          Afiyat <span class="highlight">Energy</span> is a leading supplier of oil products and
          fertilizers in Uzbekistan. We offer a wide range of solutions for industry and private sector.
        </p>
      </div>

      <div class="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/catalog">Catalog</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contacts</h3>
        <p><i class='bx bx-map'></i> 100 Mirzo-Ulugbek St., Tashkent</p>
        <p><i class='bx bx-phone'></i> +998 99 999 99 99</p>
        <p><i class='bx bx-envelope'></i> <a href="mailto:info@afiyat-energy.uz">info@afiyat-energy.uz</a></p>
        <div class="social-icons">
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-telegram'></i></a>
          <a href="#"><i class='bx bxl-instagram'></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Afiyat Energy. All rights reserved.</p>
      <p class="developed">Developed with ❤️ by Afiyat Energy team</p>
    </div>
  </footer>
</template>

<script>
export default {};
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

.highlight {
  color: #ffcc00;
  font-weight: bold;
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
  margin-top: 20px;
  display: flex;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
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
