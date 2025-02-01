import selectors from "./selectors.js"
import {addToCartListUI, updateCartUI} from "./cart.js"
import { formatPrice, getImageProp } from "./utils.js"

export default function drawDesserts(desserts) {
    console.log(desserts)
    const dessertsSelector = selectors.dessertsContainer()

    for(const dessert of desserts) {
      const divDessert = document.createElement('div')
      divDessert.classList.add('dessert')

      const dessertInnerHtml = `
        <div class="dessert-img">
          <img data-img-dessert-id=${dessert.id} src="${dessert.image[getImageProp()]}"
            alt="${dessert.name}">
          <button class="add-to-cart-button add-to-cart" data-add-dessert-id="${dessert.id}">
            <img src="../assets/images/icon-add-to-cart.svg" alt="Add to Cart">Add to Cart
          </button>
          <button data-update-dessert-id="${dessert.id}" class="add-to-cart-button hide select-quantity">
            <div class="qty-container" data-update-type="DECREMENT" >
              <img src="./assets/images/icon-decrement-quantity.svg" alt="Decrement quantity">
            </div>
            <div data-qty-dessert-id="${dessert.id}">1</div>
            <div class="qty-container" data-update-type="INCREMENT">
              <img src="./assets/images/icon-increment-quantity.svg" alt="Increment quantity">
            </div>
          </button>
        </div>
        <div class="category">${dessert.category}</div>
        <div class="name">${dessert.name}</div>
        <div class="price">${formatPrice(dessert.price)}</div>
      `

      divDessert.innerHTML = dessertInnerHtml
      dessertsSelector.appendChild(divDessert)

      selectors.addDessertBtn(dessert.id).addEventListener('click', (event) => {
        const target = event.target

        // update cart
        const dessertCopy = {...desserts.find(d => d.id == dessert.id)}
        ++dessertCopy.qty
        CART.push(dessertCopy)

        // toggle button
        target.classList.add('hide')
        selectors.updateDessertBtn(dessertCopy.id).classList.remove('hide')

        const cartOrderSection = selectors.cartOrderContainer()

        if (cartOrderSection.classList.contains('hide')) {
          cartOrderSection.classList.remove('hide')
          selectors.emptyCartContainer().classList.add('hide')
        }

        addToCartListUI(dessertCopy)
      })

      const updateButton = selectors.updateDessertBtn(dessert.id)
      const decButton = updateButton.querySelector('[data-update-type="DECREMENT"]')
      const incButton = updateButton.querySelector('[data-update-type="INCREMENT"]')

      const id = dessert.id

      decButton.addEventListener('click', (event) => {
        const dessert = CART.find(c => c.id == id)

        if (dessert.qty !== 1) {
          --dessert.qty
          selectors.updateDessertBtnQty(id).textContent = dessert.qty
          updateCartUI(dessert)
        }
      })

      incButton.addEventListener('click', (event) => {
        const dessert = CART.find(c => c.id == id)
        ++dessert.qty
        selectors.updateDessertBtnQty(id).textContent = dessert.qty
        updateCartUI(dessert)
      })

    }

  }