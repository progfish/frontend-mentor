import drawOrderConfirmedList from "./order-confirmed.js"
import selectors from "./selectors.js"
import {formatPrice, sumCartTotal, sumDessertPrice} from "./utils.js"

export function addToCartListUI(dessert) {
    const li = document.createElement('li')
    li.classList.add('item')
    li.setAttribute('data-cart-dessert-id', dessert.id)

    const liInnerHtml = `
        <div>
          <div class="item-name">${dessert.name}</div>
          <span class="item-qty" data-cart-qty-dessert-id="${dessert.id}">${dessert.qty}x</span>
          <span class="item-price">@ ${formatPrice(dessert.price)}</span>
          <span class="item-total" data-cart-price-total-dessert-id="${dessert.id}">${sumDessertPrice(dessert)}</span>
        </div>
        <div class="remove-button" data-remove-id="${dessert.id}">
          <div class="remove"></div>
        </div>
    `

    li.innerHTML = liInnerHtml

    selectors.cartList().appendChild(li)

    selectors.cartRemoveDessertBtn(dessert.id).addEventListener('click', (event) => {
      const index = CART.findIndex(c => c.id == dessert.id)
      CART.splice(index, 1)

      selectors.updateDessertBtnQty(dessert.id).textContent = 1

      selectors.cartDessertItem(dessert.id).remove()
      selectors.cartQty().textContent = CART.reduce((total, item) => total + item.qty, 0);
      selectors.orderTotal().textContent = sumCartTotal()

      selectors.addDessertBtn(dessert.id).classList.remove('hide')
      selectors.updateDessertBtn(dessert.id).classList.add('hide')

      if (CART.length === 0) {
        selectors.cartOrderContainer().classList.add('hide')
        selectors.emptyCartContainer().classList.remove('hide')
      }
    })

    // update UI
    selectors.cartList().appendChild(li)
    selectors.cartQty().textContent = CART.reduce((total, item) => total + item.qty, 0);
    selectors.orderTotal().textContent = sumCartTotal()
  }

  export function updateCartUI(dessert) {
    selectors.cartQty().textContent = CART.reduce((total, item) => total + item.qty, 0);
    selectors.orderTotal().textContent = sumCartTotal()
    selectors.cartDessertTotalPrice(dessert.id).textContent = sumDessertPrice(dessert)
    selectors.cartDessertQty(dessert.id).textContent = dessert.qty + 'x'
  }

  document.querySelector('#confirm-order-button').addEventListener('click', () => {
    window.scrollTo({top: 0})
    document.body.classList.add('no-scroll')
    selectors.overlay().classList.remove('hide')
    selectors.confirmedContainer().classList.remove('hide')

    CART.forEach(dessert => drawOrderConfirmedList(dessert))

    selectors.confirmedOrderTotal().textContent = selectors.orderTotal().textContent
  })