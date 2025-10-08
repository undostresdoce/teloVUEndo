<template>
  <section>
    <h2>Carrito de compra</h2>
    <div v-if="cart.items.length">
      <div v-for="item in cart.items" :key="item.id">
        <p>{{ item.name }} - Cantidad: {{ item.quantity }}</p>
        <button @click="cart.removeFromCart(item.id)">Eliminar</button>
      </div>
      <button @click="cart.clearCart">Vaciar carrito</button>
      <button @click="show = true">Ver detalle</button>
    </div>
    <p v-else>El carrito está vacío.</p>

    <CartDetail v-if="show" :close="() => show = false">
      <ul>
        <li v-for="item in cart.items" :key="item.id">
          {{ item.name }} x {{ item.quantity }}
        </li>
      </ul>
    </CartDetail>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import CartDetail from '../components/CartDetail.vue'

const cart = useCartStore()
const show = ref(false)
</script>
