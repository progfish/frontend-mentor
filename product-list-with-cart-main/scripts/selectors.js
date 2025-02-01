const selectors = {}
selectors.dessertsContainer = () => document.querySelector('#desserts-container')
selectors.dessertImg = (dessertId) => document.querySelector(`[data-img-dessert-id="${dessertId}"]`)
selectors.addDessertBtn = (dessertId) => document.querySelector(`[data-add-dessert-id="${dessertId}"]`)
selectors.updateDessertBtn = (dessertId) => document.querySelector(`[data-update-dessert-id="${dessertId}"]`)
selectors.updateDessertBtnQty = (dessertId) => document.querySelector(`[data-qty-dessert-id="${dessertId}"]`)
selectors.cartDessertItem = (dessertId) => document.querySelector(`[data-cart-dessert-id="${dessertId}"]`)
selectors.cartDessertQty = (dessertId) => document.querySelector(`[data-cart-qty-dessert-id="${dessertId}"]`)
selectors.cartDessertTotalPrice = (dessertId) => document.querySelector(`[data-cart-price-total-dessert-id="${dessertId}"]`)
selectors.cartRemoveDessertBtn = (dessertId) => document.querySelector(`[data-remove-id="${dessertId}"]`)
selectors.cartList = () => document.querySelector('#cart-list')
selectors.cartQty = () => document.querySelector('#cart-qty')
selectors.orderTotal = () => document.querySelector('#order-total')
selectors.orderTotal = () => document.querySelector('#order-total')
selectors.cartOrderContainer = () => document.querySelector('#cart-order-container')
selectors.emptyCartContainer = () => document.querySelector('#empty-cart-container')

export default selectors