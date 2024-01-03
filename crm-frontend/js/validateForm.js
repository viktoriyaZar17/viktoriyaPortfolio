export const validateClientsForm = () => {
  const userName = document.getElementById('floatingName')
  const userSurname = document.getElementById('floatingSurname')
  const userLastName = document.getElementById('floatingLastname')
  const unaccepttableLetter = document.getElementById('unaccepttableLetter')
  const writeName = document.getElementById('writeName')
  const writeSurname = document.getElementById('writeSurname')
  const writeLastName = document.getElementById('writeLastName')
  const reqValue = document.getElementById('reqValue')
  //const reqContacts = document.getElementById('reqContacts')
  const validateArray = [unaccepttableLetter, writeName, writeSurname, writeLastName, reqValue, reqContacts]

  const regexp = /[^а-яА-яёЁ]+$/g

  const onInputValue = input => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--light-grey)'
      for (const item of validateArray) {
        item.textContent = ''
      }
    })

    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--light-grey)'
      for (const item of validateArray) {
        item.textContent = ''
      }
    }

    input.onchange =  () => {
      input.style.borderColor = 'var(--light-grey)'
      if (userSurname.value && userName.value && userLastName.value){
        for (const item of validateArray) {
          item.textContent = ''
        }
      }
    }
  }

  onInputValue(userName)
  onInputValue(userSurname)
  onInputValue(userLastName)

  const cherReqName = (input, messege, name) => {
    if(!input.value) {
      input.style.borderColor = 'var(--red)'
      messege.textContent = `Введите ${name} клиента!`
      return false
    } else {
        messege.textContent = ''
    }
    return true
  }

  const chekRegexp = (input, regexp) => {
    if (regexp.test(input.value)) {
      input.style.borderColor = 'var(--red)'
      unaccepttableLetter.textContent = `Введите данные кириллицей!`
      return false
    }
    return true
  }

  if (!cherReqName(userSurname, writeSurname, 'фамилию')) return false
  if (!cherReqName(userName, writeName, 'имя')) return false
  if (!chekRegexp(userName, regexp)) return false
  if (!chekRegexp(userSurname, regexp)) return false
  if (!chekRegexp(userLastName, regexp)) return false

  return true
}
