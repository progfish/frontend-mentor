document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input')
    const errorText = document.querySelector('.btn-container p')
    const errorIcon =document.querySelector('.error-icon')
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (regex.test(input.value)) {
      errorText.classList.add('hide')
      errorIcon.classList.add('hide')
    } else {
      errorText.classList.remove('hide')
      errorIcon.classList.remove('hide')
    }
  })