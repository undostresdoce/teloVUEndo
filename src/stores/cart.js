export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || []
  }),
  actions: {
    addToCart(product, quantity = 1) {
      const existing = this.items.find(p => p.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ ...product, quantity })
      }
      localStorage.setItem('cart', JSON.stringify(this.items))
    },
    removeFromCart(id) {
      this.items = this.items.filter(p => p.id !== id)
      localStorage.setItem('cart', JSON.stringify(this.items))
    },
    clearCart() {
      this.items = []
      localStorage.removeItem('cart')
    }
  }
})
