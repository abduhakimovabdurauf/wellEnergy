<template>
  <div class="container">
    <div class="about-text">
      <h2>About Afiyat Energy</h2>
      <p>We specialize in supplying high-quality oil products and fertilizers for industrial enterprises and agriculture.</p>
      <div class="info">
        <div>10+ Years of Experience</div>
        <div>1000+ Clients</div>
        <div>500+ Projects</div>
      </div>
    </div>
    <div class="image-container">
      <img src="https://picsum.photos/400/250" alt="Image 1" class="img-1">
      <img src="https://picsum.photos/400/250" alt="Image 2" class="img-2">
      <img src="https://picsum.photos/400/250" alt="Image 3" class="img-3">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 50px auto;
  padding: 20px;
}
.about-text {
  width: 50%;
}
.about-text h2 {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
}

.about-text p {
  font-size: 19px;
  font-weight: 500;
  color: #969191;
}
.info {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
.info div {
  background: #f5f5f5;
  padding: 15px 20px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.image-container {
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
}
.img-1 {
  top: 0;
  left: 20px;
  z-index: 1;
}
.img-2 {
  top: 30px;
  left: 40px;
  z-index: 2;
}
.img-3 {
  top: 60px;
  left: 60px;
  z-index: 3;
}
</style>