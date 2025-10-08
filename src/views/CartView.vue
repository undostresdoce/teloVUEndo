<template>
  <section class="cart">
    <h2>Carrito de compra</h2>
    <div v-if="cart.items.length">
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <p>{{ item.name }} - Cantidad: {{ item.quantity }}</p>
        <button @click="cart.removeFromCart(item.id)">Eliminar</button>
      </div>
      <button class="clear" @click="cart.clearCart">Vaciar carrito</button>
    </div>
    <p v-else>El carrito está vacío.</p>
  </section>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
</script>

<style scoped>
.cart {
  padding: 2rem;
}
.cart-item {
  background: white;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
}
.clear {
  background-color: #dc3545;
  color: white;
  margin-top: 1rem;
}
</style>
