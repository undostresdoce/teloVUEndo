<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <h2>Iniciar sesión</h2>
    <input v-model="email" type="email" placeholder="Correo" required />
    <input v-model="password" type="password" placeholder="Contraseña" required />
    <button type="submit">Ingresar</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Auth } from '../services/api'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const userStore = useUserStore()
const router = useRouter()

async function handleLogin() {
  error.value = ''
  try {
    const user = await Auth.login({ email: email.value, password: password.value })
    userStore.login(user)
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.error {
  color: red;
  margin-top: 1rem;
}
</style>
