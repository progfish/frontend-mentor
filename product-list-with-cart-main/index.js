
/**
 * {
    "image": {
        "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
        "mobile": "./assets/images/image-waffle-mobile.jpg",
        "tablet": "./assets/images/image-waffle-tablet.jpg",
        "desktop": "./assets/images/image-waffle-desktop.jpg"
    },
    "name": "Waffle with Berries",
    "category": "Waffle",
    "price": 6.5
}
 */
const GLOBAL_CART = []

class DessertBuilder {
    constructor(
        dessert
    ) {
        this.dessert = dessert
    }

    #dessertImg = undefined
    #dessertCategory = undefined
    #dessertName = undefined
    #dessertPrice = undefined

    #makeDessertContainer() {
        const div = document.createElement('div')
        div.classList.add('dessert')
        return div
    }

    dessertImg() {
        const div = document.createElement('div')
        div.classList.add('dessert-img')

        const img = document.createElement('img')
        img.src = this.dessert.image.mobile
        img.alt = this.dessert.name

        const button = this.makeAddToCartButton()

        div.appendChild(img)
        div.appendChild(button)

        this.#dessertImg = div

        return this
    }

    dessertCategory() {
        const div = document.createElement('div')
        div.classList.add('category')
        div.textContent = this.dessert.category

        this.#dessertCategory = div

        return this
    }

    dessertName() {
        const div = document.createElement('div')
        div.classList.add('name')
        div.textContent = this.dessert.name

        this.#dessertName = div

        return this
    }

    dessertPrice() {
        const price = this.dessert.price.toString()
        let [dollar, cents] = price.split('.')

        if (cents === undefined) {
            cents = '00'
        } else if (cents.length === 1) {
            cents = cents + '0'
        }
        const formattedPrice = `${dollar}.${cents}`

        const div = document.createElement('div')
        div.classList.add('price')
        div.textContent = `$${formattedPrice}`

        this.#dessertPrice = div

        return this
    }

    build() {
        const dessertContainer = this.#makeDessertContainer()

        dessertContainer.appendChild(this.#dessertImg)
        dessertContainer.appendChild(this.#dessertCategory)
        dessertContainer.appendChild(this.#dessertName)
        dessertContainer.appendChild(this.#dessertPrice)

        document.querySelector('.desserts').appendChild(
            dessertContainer
        )
    }

    makeAddToCartButton() {
        const button = document.createElement('button')
        button.classList.add('add-to-cart-button', 'add-to-cart')

        const image = document.createElement('img')
        image.src = "../assets/images/icon-add-to-cart.svg"
        image.alt = "Add to Cart"

        button.appendChild(image)
        button.append("Add to Cart")

        button.addEventListener('click', (event) => {
            // update GLOBAL CART
            GLOBAL_CART.push(this.dessert)

            // Show Select Qty Button
            this.showSelectQtyButton(event.target.parentElement)

            // Show Cart with order total

        })
        return button
    }

    makeSelectQuantityButton() {
        const button = document.createElement('button')
        button.classList.add('add-to-cart-button', 'select-quantity')

        const decBtn = document.createElement('div')
        decBtn.classList.add("qty-container")
        const image1 = document.createElement('img')
        image1.src = "../assets/images/icon-decrement-quantity.svg"
        image1.alt = "Decrement quantity"
        decBtn.appendChild(image1)

        decBtn.addEventListener('click', () => {
            // update qty text with new value
            this.dessert.quantity -= 1
            qty.textContent = this.dessert.quantity
            // update qty on Cart

            // if 0, remove from Cart
        })

        const qty = document.createElement('div')
        qty.id = "item-qty"
        qty.textContent = 1

        const incBtn = document.createElement('div')
        incBtn.classList.add("qty-container")
        const image2 = document.createElement('img')
        image2.src = "../assets/images/icon-increment-quantity.svg"
        image2.alt = "Increment quantity"
        incBtn.appendChild(image2)

        button.appendChild(decBtn)
        button.appendChild(qty)
        button.appendChild(incBtn)

        return button
    }

    showSelectQtyButton(parentElement) {
        parentElement.querySelector('button')?.remove()
        parentElement.appendChild(this.makeSelectQuantityButton())
        // parentElement.querySelector('#decrement').addEventListener(e => {

        //     if (this.dessert.quantity !== 0) {
        //         quantity -= 1
        //         console.log(quantity)
        //         document.querySelector('#item-quantity').textContent = quantity.toString()
        //     }
        // })
    }
}



async function initialize() {
    const response = await fetch('./data.json')
    const json = await response.json()

    console.log(json)

    for (const item of json) {
        const dessert = {quantity: 0, ...item}
        const dessertBuilder = new DessertBuilder(dessert)

        dessertBuilder
            .dessertImg()
            .dessertCategory()
            .dessertName()
            .dessertPrice()
            .build()
    }

    if (GLOBAL_CART.length === 0) {
        makeEmptyCart()
    }
}


function makeEmptyCart() {
    const cart = document.querySelector('.your-cart')

    while (cart.firstChild) {
        cart.removeChild(cart.firstChild)
    }

    cart.innerHTML = `
        <h1>Your Cart (${GLOBAL_CART.length})</h1>
        <img src="./assets/images/illustration-empty-cart.svg" alt="Empty Cart">
        <p>Your added items will appear here</p>
    `
}





await initialize()

