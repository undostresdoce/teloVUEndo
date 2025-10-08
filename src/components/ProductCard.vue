<template>
  <article>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p><strong>${{ product.price }}</strong></p>
    <button @click="$emit('show-popup')">Ver detalle</button>
    <button @click="$emit('add-to-cart', product)">Añadir al carrito</button>
  </article>
</template>

<script setup>
defineProps(['product'])
</script>
