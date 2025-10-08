export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Sylvanian',
          stock: 5,
          description: 'Coleccionable 1',
          price: 10000,
          image: '/src/assets/ternurin1.png'
        },
        {
          id: 2,
          name: 'Casita Sylvanian',
          stock: 0,
          description: 'Hogar para tus Ternurines',
          price: 150000,
          image: '/src/assets/casa1.png'
        },
        {
          id: 3,
          name: 'Mini Sylvanian',
          stock: 3,
          description: 'Coleccionable 2',
          price: 20000,
          image: '/src/assets/ternurin2.png'
        }
      ])
    }, 500)
  })
}


export const Auth = {
  login({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'usuario1@mitienda.com' && password === 'password') {
          resolve({ name: 'Usuario 1', email })
        } else {
          reject(new Error('Credenciales inválidas'))
        }
      }, 500)
    })
  }
}
