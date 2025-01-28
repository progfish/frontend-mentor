export function makeEmptyCart() {
    const cart = document.querySelector('.your-cart')

    while (cart.firstChild) {
        cart.removeChild(cart.firstChild)
    }

    cart.innerHTML = `
        <h1>Your Cart (0)</h1>
        <img src="./assets/images/illustration-empty-cart.svg" alt="Empty Cart">
        <p>Your added items will appear here</p>
    `
}