<template>
  <section>
    <form @submit.prevent="applyFilter" class="search-form">
      <input v-model="search" placeholder="Escribir producto" />
      <button type="submit">Buscar</button>
    </form>

    <div v-if="filtered.length">
      <div v-for="product in filtered" :key="product.id" class="card">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p><strong>${{ product.price }}</strong></p>
        <input type="number" v-model.number="quantities[product.id]" min="1" />
        <button @click="add(product)">Agregar al carrito</button>
      </div>
    </div>
    <p v-else>No hay productos disponibles.</p>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Products } from '../services/products'
import { useCartStore } from '../stores/cart'

const products = ref([])
const search = ref('')
const quantities = ref({})
const cart = useCartStore()

onMounted(async () => {
  products.value = await Products.all()
  products.value.forEach(p => quantities.value[p.id] = 1)
})

const filtered = computed(() =>
  products.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase()) && p.stock > 0
  )
)

function applyFilter() {
  // Ya está, con v-model + computed
}

function add(product) {
  cart.addToCart(product, quantities.value[product.id])
}
</script>

<style scoped>
.search-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.card {
  background: white;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  text-align: center;
}
.card img {
  max-width: 100%;
  border-radius: 8px;
}
</style>
