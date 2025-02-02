import selectors from "./selectors.js"
import { formatPrice } from "./utils.js"

export default function drawOrderConfirmedList(dessert) {
    const li = document.createElement('li')
    li.classList.add('item')

    const total = selectors.cartDessertTotalPrice(dessert.id)
    const liInnerHtml = `
        <img src="${dessert.image.thumbnail}" alt="${dessert.name}">
            <div>
              <div class="item-name">${dessert.name}</div>
              <span class="item-qty" >${dessert.qty}x</span>
              <span class="item-price">@ ${formatPrice(dessert.price)}</span>
            </div>
            <span class="item-total" >${total.textContent}</span>
    `

    li.innerHTML = liInnerHtml

    selectors.confirmedCartList().appendChild(li)
}

selectors.startNewOrderBtn().addEventListener('click', () => {
    document.body.classList.remove('no-scroll')
    selectors.overlay().classList.add('hide')
    selectors.confirmedContainer().classList.add('hide')

    selectors.cartQty().innerHTML = '0'
    selectors.cartOrderContainer().classList.add('hide')
    selectors.cartList().innerHTML = ''
    selectors.confirmedCartList().innerHTML = ''
    selectors.orderTotal().innerHTML = ''
    selectors.emptyCartContainer().classList.remove('hide')

    desserts.forEach(dessert => {
        selectors.updateDessertBtn(dessert.id).classList.add('hide')
        selectors.updateDessertBtnQty(dessert.id).textContent = '1'
        selectors.addDessertBtn(dessert.id).classList.remove('hide')
    })
    CART.length = 0
})