<template>
  <div class="full">
    <section class="about">
      <h2 class="title">{{ t('about.title') }}</h2>
      <p class="subtitle">{{ t('about.subtitle') }}</p>
      <p class="description">{{ t('about.description') }}</p>

      <div class="features">
        <div class="feature" v-for="feature in features" :key="feature.key">
          <i :class="feature.icon"></i>
          <h3>{{ t(`about.features.${feature.key}.title`) }}</h3>
          <p>{{ t(`about.features.${feature.key}.description`) }}</p>
        </div>
      </div>

      <div class="stats" ref="aboutSection">
        <div class="stat">
          <h3>{{ experience }}+</h3>
          <p>{{ t('about.stats.experience') }}</p>
        </div>
        <div class="stat">
          <h3>{{ clients }}+</h3>
          <p>{{ t('about.stats.clients') }}</p>
        </div>
        <div class="stat">
          <h3>{{ projects }}+</h3>
          <p>{{ t('about.stats.projects') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const experience = ref(0);
const clients = ref(0);
const projects = ref(0);
const aboutSection = ref(null);

const features = [
  { key: 'quality', icon: 'bx bx-certification' },
  { key: 'delivery', icon: 'bx bx-truck' },
  { key: 'support', icon: 'bx bx-support' },
  { key: 'warranty', icon: 'bx bx-shield' }
];

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
