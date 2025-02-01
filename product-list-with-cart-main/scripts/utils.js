
export function sumCartTotal() {
    const total = CART.reduce((total, item) => total + (item.price * item.qty), 0);
    return formatPrice(total)
  }

export function sumDessertPrice(dessert) {
    return formatPrice(dessert.qty * dessert.price)
}

export function formatPrice(price) {
    const priceStr = price.toString()
    let [dollar, cents] = priceStr.split('.')

    if (cents === undefined) {
        cents = '00'
    } else if (cents.length === 1) {
        cents = cents + '0'
    }

    return `$${dollar}.${cents}`
}

export function getImageProp() {
    if (window.innerWidth <= 768) {
        return 'mobile'
    } else if (window.innerWidth <= 968) {
        return 'tablet'
    } else {
        return 'desktop'
    }
}