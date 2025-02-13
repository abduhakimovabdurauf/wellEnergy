<template>
    <div class="footer-container">
      <nav class="footer-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
        </ul>
      </nav>

      <div class="footer-info">
        <h3>About Company</h3>
        <p>Afiyat Energy is a leading supplier of oil products and fertilizers in Uzbekistan. We offer a wide range of solutions for industry and private sector.</p>
      </div>

      <div class="footer-contacts">
        <h3>Contacts</h3>
        <p>100 Mirzo-Ulugbek St., Tashkent</p>
        <p>+998 99 999 99 99</p>
        <p><a href="mailto:info@afiyat-energy.uz">info@afiyat-energy.uz</a></p>
      </div>

      <div class="footer-social">
        <a href="#"><i class='bx bxl-instagram' ></i></a>
        <a href="#"><i class='bx bxl-telegram' ></i></a>
        <a href="#"><i class='bx bxl-facebook-circle' ></i></a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Afiyat Energy. All rights reserved.</p>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  background-color: #222;
  color: #fff;
  height: 600px;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
}

.footer-nav ul li {
  margin: 5px 0;
}

.footer-nav ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-info, .footer-contacts {
  max-width: 300px;
}

.footer-social {
  margin-top: 10px;
}

.footer-social a {
  margin: 0 10px;
  display: inline-block;
}

.footer-social img {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  margin-top: 20px;
  border-top: 1px solid #444;
  padding-top: 10px;
}

</style>