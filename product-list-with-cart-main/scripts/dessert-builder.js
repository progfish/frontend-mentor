// // import { makeAddToCartButton } from ".."


// class DessertBuilder {
//     constructor() {}

//     #dessertImg = undefined
//     #dessertCategory = undefined
//     #dessertName = undefined
//     #dessertPrice = undefined

//     #makeDessertContainer() {
//         const div = document.createElement('div')
//         div.classList.add('dessert')
//         return div
//     }

//     dessertImg(src, alt) {
//         const div = document.createElement('div')
//         div.classList.add('dessert-img')

//         const img = document.createElement('img')
//         img.src = src
//         img.alt = alt

//         const button = makeAddToCartButton()

//         div.appendChild(img)
//         div.appendChild(button)

//         this.#dessertImg = div

//         return this
//     }

//     dessertCategory(category) {
//         const div = document.createElement('div')
//         div.classList.add('category')
//         div.textContent = category

//         this.#dessertCategory = div

//         return this
//     }

//     dessertName(name) {
//         const div = document.createElement('div')
//         div.classList.add('name')
//         div.textContent = name

//         this.#dessertName = div

//         return this
//     }

//     dessertPrice(price) {
//         const div = document.createElement('div')
//         div.classList.add('price')
//         div.textContent = `$${price}`

//         this.#dessertPrice = div

//         return this
//     }

//     build() {
//         const dessertContainer = this.#makeDessertContainer()

//         dessertContainer.appendChild(this.#dessertImg)
//         dessertContainer.appendChild(this.#dessertCategory)
//         dessertContainer.appendChild(this.#dessertName)
//         dessertContainer.appendChild(this.#dessertPrice)

//         document.querySelector('.desserts').appendChild(
//             dessertContainer
//         )
//     }
// }

// export default DessertBuilder