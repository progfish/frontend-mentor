// import {cart} from "./cart.service.js"


// function makeAddToCartButton() {
//     const button = document.createElement('button')
//     button.classList.add('add-to-cart-button', 'add-to-cart')

//     const innerHtml = `
//         <img src="../assets/images/icon-add-to-cart.svg" alt="Add to Cart">
//         Add to Cart
//     `

//     button.innerHTML = innerHtml
//     button.addEventListener('click', (event) => {
//         showSelectQtyButton(event.target.parentElement)
//         cart.a = 'a'
//         console.log(cart)
//     })
//     return button
// }

// function makeSelectQuantityButton() {
//     const button = document.createElement('button')
//     button.classList.add('add-to-cart-button', 'select-quantity')

//     const innerHtml = `<div class="quantity-container">
//         <img src="../assets/images/icon-decrement-quantity.svg" alt="Decrement quantity">
//     </div>
//     <div>1</div>
//     <div class="quantity-container">
//         <img src="../assets/images/icon-increment-quantity.svg" alt="Increment quantity">
//     </div>`

//     button.innerHTML = innerHtml
//     button.addEventListener('click', (event) => {
//         showSelectQtyButton(event.target.parentElement)

//         console.log(event.target)
//     })

//     return button
// }

// function showSelectQtyButton(parentElement) {
//     parentElement.querySelector('button')?.remove()
//     parentElement.appendChild(makeSelectQuantityButton())
// }

// export { makeAddToCartButton, makeSelectQuantityButton, showSelectQtyButton }