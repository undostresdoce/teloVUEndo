<template>
  <dialog open>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Precio: ${{ product.price }}</p>
    <p>Stock: {{ product.stock }}</p>
    <button @click="$emit('close')">Cerrar</button>
  </dialog>
</template>

<script setup>
defineProps(['product'])
</script>
