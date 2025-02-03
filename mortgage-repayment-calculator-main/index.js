import { calculateMonthlyInterest, calculateMonthlyRepayments, handleErrors, formatter } from "./scripts/utils.js"

/**
 * Listeners
 */
radioInputs.forEach((input, index, radioInputs) => {
  input.addEventListener('click', () => {
    input.querySelector('input').checked = true

    radioInputs.forEach(input => {
      if (input.querySelector('input').checked) {
        input.classList.add('active-radio')
      } else {
        input.classList.remove('active-radio')
      }
    })
  })
})

document.querySelector('button').addEventListener('click', () => {
    // Check form for errors
    const amount = amountInput?.value
    handleErrors(amountInput, amount)

    const term = termInput?.value
    handleErrors(termInput, term)

    const rate = rateInput?.value
    handleErrors(rateInput, rate)

    //R or I
    const typeInputChecked = document.querySelector('input[type="radio"]:checked')
    const type = typeInputChecked?.value
    const radioInput = document.querySelector('.radio-input')

    handleErrors(radioInput, type)

    if (!amount || !term || !rate || !type) {
      return
    }

    // Get Mortgage Type ( repayment or interest)
    let monthlyAmount = 0
    if (type === 'R') {
      monthlyAmount = calculateMonthlyRepayments(
        amount,
        rate,
        term
      )
    } else if (type === 'I') {
      monthlyAmount = calculateMonthlyInterest(amount, rate, term)
    }

    const fMonthlyAmount = formatter.format(monthlyAmount)
    const fTotalAmount = formatter.format(monthlyAmount * term * 12)

    // Update results sections
    const results = document.querySelector('#results')
    if (results.classList.contains('empty')) {
      const resultsInnerHtml = `
        <h1>Your results</h1>
        <p>Your results are shown below based on the information you provided.
          To adjust the results, edit the form and click “calculate repayments” again.</p>

        <div class="repayments-container">
          <div class="repayments-header">Your monthly repayments</div>
          <div id="monthly-amount" class="monthly-amount">${fMonthlyAmount}</div>
          <hr>
          <div class="repayments-header">Total you'll repay over the term</div>
          <div id="total-amount" class="total-amount">${fTotalAmount}</div>
        </div>
      `

      results.classList.remove('empty')
      results.innerHTML = resultsInnerHtml
    } else {
      document.querySelector('#monthly-amount').textContent = fMonthlyAmount
      document.querySelector('#total-amount').textContent = fTotalAmount
    }
})

document.querySelector('#clear').addEventListener('click', () => {
    // reset values
    amountInput.value = ''
    termInput.value = ''
    rateInput.value = ''

    const typeInput = document.querySelector('input[type="radio"]:checked')
    typeInput && (typeInput.checked = false)

    const activeRadio = document.querySelector('.active-radio')
    activeRadio?.classList?.remove('active-radio')

    // remove error messages
    document.querySelectorAll('.error').forEach(err => {
      err.classList.remove('error')
    })

    // show empty results sections
    const results = document.querySelector('#results')
    if (!results.classList.contains('empty')) {
      const resultsInnerHtml = `
        <img src="./assets/images/illustration-empty.svg" alt="Empty results">
        <h1>Results shown here</h1>
        <p>Complete the form and click “calculate repayments” to see what
          your monthly repayments would be.</p>
      `
      results.classList.add('empty')
      results.innerHTML = resultsInnerHtml
    }
})