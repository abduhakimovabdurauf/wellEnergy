<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  background-color: #f8f8f8;
  padding: 20px;
}

img {
  width: 300px;
  max-width: 100%;
  margin-bottom: 20px;
}

h1 {
  font-size: 60px;
  color: red;
  margin: 0;
}

p {
  font-size: 20px;
  color: #555;
  margin: 10px 0;
}

a {
  display: inline-block;
  padding: 10px 20px;
  background: blue;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

a:hover {
  background: darkblue;
}
</style>
