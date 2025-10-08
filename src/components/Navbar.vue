<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/sylvanianlogo.jpg" alt="Logo TeLoVendo" />
      <h1>TeLoVendo</h1>
    </div>
    <div class="links">
      <router-link to="/">🏠 Inicio</router-link>
      <router-link to="/cart">🛒 Carrito</router-link>
      <router-link v-if="!user" to="/login">🔐 Login</router-link>
      <span v-else>👤 {{ user.name }}</span>
      <button v-if="user" @click="logout">Cerrar sesión</button>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
const user = userStore.user

function logout() {
  userStore.logout()
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #ffdee9, #b5fffc);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  height: 40px;
  width: auto;
  border-radius: 8px;
}

.logo h1 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

router-link, span, button {
  font-weight: bold;
  color: #333;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

router-link:hover, button:hover {
  color: #007bff;
}
</style>
