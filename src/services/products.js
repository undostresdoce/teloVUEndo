export const Products = {
  all() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Sylvanian',
            stock: 5,
            description: 'Coleccionable 1',
            price: 10000,
            image: '/src/assets/sylvanian.png'
          },
          {
            id: 2,
            name: 'Casita Sylvanian',
            stock: 0,
            description: 'Hogar para tus Ternurines',
            price: 150000,
            image: '/src/assets/casita.png'
          },
          {
            id: 3,
            name: 'Mini Sylvanian',
            stock: 3,
            description: 'Coleccionable 2',
            price: 20000,
            image: '/src/assets/mini.png'
          }
        ])
      }, 500)
    })
  }
}
