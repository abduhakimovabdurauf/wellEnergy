<template>
  <section class="about">
    <div class="container">
      <h1 class="title">{{ $t("aboutPage.title") }}</h1>
      <p class="description">{{ $t("aboutPage.description") }}</p>

      <div class="features">
        <div class="feature">
          <h2>🌱 {{ $t("aboutPage.fertilizers.title") }}</h2>
          <p>{{ $t("aboutPage.fertilizers.text") }}</p>
        </div>
        <div class="feature">
          <h2>⛽ {{ $t("aboutPage.fuels.title") }}</h2>
          <p>{{ $t("aboutPage.fuels.text") }}</p>
        </div>
        <div class="feature">
          <h2>⚙️ {{ $t("aboutPage.machines.title") }}</h2>
          <p>{{ $t("aboutPage.machines.text") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about {
  padding: 50px 20px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  color: #333;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  color: #222;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.feature {
  background: white;
  padding: 20px;
  border-left: 5px solid #007b5e;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  border-radius: 6px;
}

.feature h2 {
  margin-bottom: 10px;
  font-size: 22px;
  color: #007b5e;
}

.feature p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
