<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 TeLoVendo. VUE.</p>
      <p>Camila Collado - Daniel Paredes - Jesús Pérez</p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  position: sticky;
  top: 0;
  z-index: 10;
}

main {
  flex: 1;
  padding: 2rem;
  background-color: #f9f9f9;
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
