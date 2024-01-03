export const validateClientContact = (contactType, contactInput) => {
  const writeValue = document.getElementById('writeName')
  const onlyNumbers = /[^0-9]+$/g
  const onlyEmail = /[^a-zA-Z0-9|@|.]+$/g

  const onInputValue = input => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--light-grey)'
      writeValue.textContent = ''
    })

    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--light-grey)'
      writeValue.textContent = ''
    }
  }

  const showErrorMessege = (message, block, input) => {
    block.textContent = message
    input.style.borderColor = 'var(--red)'
  }

  onInputValue(contactInput)

  if (!contactInput.value) {
    showErrorMessege('Заполните все поля контактов!', writeValue, contactInput)
    return false
  }

  switch (contactType.innerHTML) {
    case 'Телефон':
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessege('Введите цифры!', writeValue, contactInput)
        return false
      } else if (contactInput.value.length !== 11) {
        showErrorMessege('Введие 11 цифр!', writeValue, contactInput)
        return false
      }
      return true
    case 'Email':
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessege('Некорректный emali!', writeValue, contactInput)
        return false
      }
      return true
    default:
      return true
  }
}
