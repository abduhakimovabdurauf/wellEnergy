<template>
  <div class="wrapper">
    <h2>{{ t("contacts.title") }}</h2>
    <p class="subtitle">{{ t("contacts.subtitle") }}</p>
    <div class="contact-info">
      <div class="card" v-for="(info, index) in contactDetails" :key="index">
        <i :class="info.icon"></i>
        <p><strong>{{ info.title }}</strong></p>
        <p>{{ info.detail }}</p>
      </div>
    </div>
  </div>

  <div class="contact-container">
    <form @submit.prevent="sendMessage">
      <div class="input-group" v-for="(field, index) in formFields" :key="index">
        <i :class="field.icon"></i>
        <input
            v-if="field.type !== 'textarea'"
            :type="field.type"
            v-model="form[field.model]"
            :placeholder="t(`contacts.fields.${field.model}`)"
            required
        />
        <textarea
            v-else
            v-model="form[field.model]"
            :placeholder="t(`contacts.fields.${field.model}`)"
            required
        ></textarea>
      </div>
      <button type="submit">{{ t("contacts.sendMessage") }}</button>
    </form>
  </div>
</template>


<script setup>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
});

const contactDetails = [
  { icon: 'bx bx-map', title: 'Address', detail: 'UNIT 1406A, 14/F, THE BELGIAN BANK BUILDING, NOS. 721 - 725 NATHAN ROAD, KOWLOON, HONG KONG' },
  { icon: 'bx bx-phone', title: 'Phone', detail: '+852 35807372' },
  { icon: 'bx bx-envelope', title: 'Email', detail: 'luenfatbusiness@gmail.com' }
];

const formFields = [
  { icon: 'bx bx-user', type: 'text', model: 'name', placeholder: 'Full Name' },
  { icon: 'bx bx-phone', type: 'tel', model: 'phone', placeholder: 'Phone Number' },
  { icon: 'bx bx-envelope', type: 'email', model: 'email', placeholder: 'Email' },
  { icon: 'bx bx-message-square-dots', type: 'textarea', model: 'message', placeholder: 'Your Message' }
];

const sendMessage = async () => {
  const botToken = '7241737717:AAEJ4QiPILVd-0Ox7HDoddv61nxo8w3l6Dw';
  const chatId = '-1002375788238';
  const text = `New Message:%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`);
    alert('Message sent successfully!');
  } catch (error) {
    alert('Failed to send message.');
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  margin: 50px auto;
  padding: 40px;
  background: linear-gradient(135deg, #f9f9f9, #e3f2fd);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
  color: #333;
}

.subtitle {
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.card i {
  font-size: 28px;
  color: #007BFF;
  margin-bottom: 10px;
}

.input-group {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 18px;
  transition: border-color 0.3s ease;
}

.input-group:focus-within {
  border-color: #007BFF;
}

.input-group i {
  margin-right: 12px;
  color: #888;
  font-size: 22px;
}

input, textarea {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #333;
  font-size: 18px;
  padding: 8px;
}

textarea {
  resize: none;
  height: 150px;
}

button {
  width: 100%;
  padding: 15px;
  background: #007BFF;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}
</style>