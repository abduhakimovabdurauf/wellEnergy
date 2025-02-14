<template>
  <div class="full">
    <section class="about">
      <h2 class="title">About Afiyat Energy</h2>
      <p class="subtitle">Your Reliable Partner in Oil Products and Fertilizers</p>
      <p class="description">
        We specialize in supplying high-quality oil products and fertilizers for industrial enterprises and agriculture.
      </p>
      <div class="features">
        <div class="feature">
          <i class='bx bx-certification'></i>
          <h3>Quality</h3>
          <p>Only certified products from leading manufacturers</p>
        </div>
        <div class="feature">
          <i class='bx bx-truck'></i>
          <h3>Delivery</h3>
          <p>Fast delivery throughout Uzbekistan and CIS countries</p>
        </div>
        <div class="feature">
          <i class='bx bx-support'></i>
          <h3>Support</h3>
          <p>Professional consultation and technical support</p>
        </div>
        <div class="feature">
          <i class='bx bx-shield'></i>
          <h3>Warranty</h3>
          <p>Warranty and post-warranty service</p>
        </div>
      </div>
      <div class="stats" ref="aboutSection">
        <div class="stat">
          <h3>{{ experience }}+</h3>
          <p>Years of Experience</p>
        </div>
        <div class="stat">
          <h3>{{ clients }}+</h3>
          <p>Clients</p>
        </div>
        <div class="stat">
          <h3>{{ projects }}+</h3>
          <p>Projects</p>
        </div>
      </div>
    </section>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const experience = ref(0);
const clients = ref(0);
const projects = ref(0);
const aboutSection = ref(null);

const animateStats = (target, value) => {
  let count = 0;
  const speed = Math.ceil(value / 50);
  const interval = setInterval(() => {
    count += speed;
    if (count >= value) {
      count = value;
      clearInterval(interval);
    }
    target.value = count;
  }, 10);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateStats(experience, 10);
      animateStats(clients, 1000);
      animateStats(projects, 500);
      observer.disconnect();
    }
  }, { threshold: 1 });

  if (aboutSection.value) {
    observer.observe(aboutSection.value);
  }
});
</script>

<style scoped>
.full {
  width: 100%;
  height: auto;
  background: #f0f4f8;
}

.about {
  text-align: center;
  padding: 100px 20px;
  max-width: 1200px;
  margin: auto;
  border-radius: 12px;
}
.title {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}
.subtitle {
  font-size: 24px;
  color: #555;
  margin-bottom: 20px;
}
.description {
  margin: 30px 0;
  color: #666;
  font-size: 18px;
  line-height: 1.8;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}
.feature {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}
.feature i {
  font-size: 42px;
  color: #007bff;
  margin-bottom: 15px;
}
.feature h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #222;
}
.stats {
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.stat h3 {
  font-size: 32px;
  color: #007bff;
  font-weight: bold;
}
.stat p {
  color: #555;
  font-size: 16px;
}
</style>
