<template>
  <main>
    <h2>Productos disponibles</h2>
    <input v-model="search" placeholder="Buscar producto" class="search" />

    <section v-if="filteredProducts.length">
      <div v-for="product in filteredProducts" :key="product.id" class="card">
        <img :src="product.image" :alt="product.name" class="product-img" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p><strong>${{ product.price }}</strong></p>
        <input type="number" v-model.number="quantities[product.id]" min="1" />
        <button @click="add(product)">Agregar al carrito</button>
      </div>
    </section>

    <p v-else>No hay productos disponibles.</p>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getProducts } from '../services/api'
import { useCartStore } from '../stores/cart'

const products = ref([])
const search = ref('')
const quantities = ref({})
const cart = useCartStore()

onMounted(async () => {
  products.value = await getProducts()
  products.value.forEach(p => quantities.value[p.id] = 1)
})

const filteredProducts = computed(() =>
  products.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase()) && p.stock > 0
  )
)

function add(product) {
  cart.addToCart(product, quantities.value[product.id])
}
</script>

<style scoped>
main {
  padding: 2rem;
}

.search {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-align: center;
}

.product-img {
  max-width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}
</style>
