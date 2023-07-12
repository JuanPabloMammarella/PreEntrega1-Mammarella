const products = [
    {
        id: 'cubiertos',
        name: 'Set de cubiertos',
        price: 10000,
        category: 'cocina',
        img: './src/images/cubiertos.png',
        stock: 8,
        description: 'Set de cuchillos importados desde Japón',
    },

    {
        id: 'delantal',
        name: 'Delantal',
        price: 2500,
        category: 'ropa',
        img: './src/images/delantal.jpg',
        stock: 20,
        description: 'Delantal de 60x100 cm',
    },

    {
        id: 'olla',
        name: 'Olla',
        price: 80000,
        category: 'cocina',
        img: './src/images/olla.jpg',
        stock: 5,
        description: 'Olla profunda de teflón',
    },

    {
        id: 'remera',
        name: 'Remera',
        price: 6000,
        category: 'ropa',
        img: './src/images/remera.jpg',
        stock: 10,
        description: 'Remera lisa color negro con logo de la página',
    },

    {
        id: 'repasador',
        name: 'Repasador',
        price: 1200,
        category: 'cocina',
        img: './src/images/repasador.jpg',
        stock: 30,
        description: 'Repasador de 60x50 cm con logo bordado',
    },

    {
        id: 'tabla',
        name: 'Tabla para cortar',
        price: 3500,
        category: 'cocina',
        img: './src/images/tabla.jpg',
        stock: 15,
        description: 'Excelente tabla de madera para cortar todo tipo de frutas, vegetales y hasta carnes',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productsCategory))
        }, 500)
    })
}