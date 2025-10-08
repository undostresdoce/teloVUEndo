<template>
  <div class="overlay" @click.self="close">
    <div class="popup">
      <h3>Detalle del carrito</h3>
      <slot />
      <button @click="close">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['close'])
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
}
</style>
