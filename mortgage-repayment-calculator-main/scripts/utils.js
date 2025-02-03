export const handleErrors = (selector, value) => {
    if (!value) {
      selector.parentElement.classList.add('error')
    } else {
      selector.parentElement.classList.remove('error')
    }
  }

  export const calculateMonthlyRepayments = (amount, rate, term) => {
    const interest = rate / 100 / 12
    const months = term * 12
    const interestWeight = Math.pow((1 + interest), months)
    return amount * (( interest * interestWeight) / (interestWeight - 1))
}

export const calculateMonthlyInterest = (amount, rate, term) => {
    return rate / 100 / 365 * 30 * amount
}

export const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
