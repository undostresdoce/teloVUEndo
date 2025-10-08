<template>
  <div id="app">
    <header>
      <h1>🛒 TeLoVendo</h1>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/cart">Carrito</router-link>
        <router-link v-if="!user" to="/login">Login</router-link>
        <button v-else @click="logout">Cerrar sesión</button>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 TeLoVendo - VUE</p>
      <p>Camila Collado - Daniel Paredes - Jesús Pérez</p>
    </footer>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/user'
const userStore = useUserStore()
const user = userStore.user

function logout() {
  userStore.logout()
}
</script>

<style scoped>
header {
  background-color: #222;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

router-link, button {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  font-weight: bold;
}

main {
  padding: 2rem;
  min-height: 70vh;
}

footer {
  background-color: #f0f0f0;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
  border-top: 1px solid #ddd;
}
</style>
