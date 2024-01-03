import { createContactItem } from "./createContact.js"
import { svgContactDef, svgSpinner } from "./svg.js"

export const createClientsForm = () => {
  const modalTitle = document.createElement('h2')
  const modalClose = document.createElement('button')
  const form = document.createElement('form')
  const inputName = document.createElement('input')
  const labelName = document.createElement('label')
  const inputSurname = document.createElement('input')
  const labelSurname = document.createElement('label')
  const inputLastname = document.createElement('input')
  const labelLastname = document.createElement('label')
  const reqName = document.createElement('span')
  const reqSurname = document.createElement('span')
  const addContactBtn = document.createElement('button')
  const contactBtnSvgDefault = document.createElement('span')
  const saveSpinner = document.createElement('span')

  const saveBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')
  const contactsBlock = document.createElement('div')
  const formFloatingName = document.createElement('div')
  const formFloatingSurname = document.createElement('div')
  const formFloatingLastname = document.createElement('div')

  const errorBlock = document.createElement('p')
  const unaccepttableLetter = document.createElement('span')
  const writeName = document.createElement('span')
  const writeSurname = document.createElement('span')
  const writeLastName = document.createElement('span')
  const reqValue = document.createElement('span')
  const reqContacts = document.createElement('span')

  modalTitle.classList.add('modal__title')
  modalClose.classList.add('modal__close', 'btn-reset')
  form.classList.add('modal__form')

  formFloatingName.classList.add('form-floating')
  formFloatingSurname.classList.add('form-floating')
  formFloatingLastname.classList.add('form-floating')

  inputName.classList.add('modal__input')
  inputSurname.classList.add('modal__input')
  inputLastname.classList.add('modal__input')
  inputName.id = 'floatingName'
  inputSurname.id = 'floatingSurname'
  inputLastname.id = 'floatingLastname'
  inputName.type = 'text'
  inputSurname.type = 'text'
  inputLastname.type = 'text'
  inputName.placeholder = 'Имя'
  inputSurname.placeholder = 'Фамилия'
  inputLastname.placeholder = 'Отчество'

  errorBlock.classList.add('modal__error')
  unaccepttableLetter.id = 'unaccepttableLetter'
  writeName.id = 'writeName'
  writeSurname.id = 'writeSurname'
  writeLastName.id = 'writeLastName'
  writeLastName.id = 'writeLastName'
  reqValue.id = 'reqValue'
  reqContacts.id = 'reqContacts'

  labelName.classList.add('modal__label')
  labelSurname.classList.add('modal__label')
  labelLastname.classList.add('modal__label')
  labelName.for = 'floatingName'
  labelSurname.for = 'floatingSurname'
  labelLastname.for = 'floatingLastname'

  reqName.classList.add('modal__label')
  reqSurname.classList.add('modal__label')

  addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact_active')
  saveBtn.classList.add('modal__btn-save', 'btn-reset')
  cancelBtn.classList.add('modal__btn-back', 'btn-reset')
  contactsBlock.classList.add('modal__contact')
  saveSpinner.classList.add('modal__spinner')


  contactBtnSvgDefault.classList.add('btn-contact__svg')
  saveSpinner.innerHTML = svgSpinner
  modalTitle.textContent = 'Новый клиент'

  labelName.textContent = 'Имя'
  labelSurname.textContent = 'Фамилия'
  labelLastname.textContent = 'Отчество'

  addContactBtn.textContent = 'Добавить контакт'
  contactBtnSvgDefault.innerHTML = svgContactDef
  saveBtn.textContent = 'Сохранить'
  cancelBtn.textContent = 'Отмена'

  reqName.textContent = '*'
  reqSurname.textContent = '*'


  labelName.append(reqName)
  labelSurname.append(reqSurname)
  formFloatingSurname.append(inputSurname, labelSurname)
  formFloatingName.append(inputName, labelName)
  formFloatingLastname.append(inputLastname, labelLastname)
  contactsBlock.append(addContactBtn)
  errorBlock.append(writeName, writeSurname, writeLastName, reqValue, unaccepttableLetter, reqContacts)
  saveBtn.append(saveSpinner)
  form.append (
    formFloatingSurname,
    formFloatingName,
    formFloatingLastname,
    contactsBlock,
    errorBlock,
    saveBtn,
    cancelBtn
  )
  addContactBtn.append(contactBtnSvgDefault)

  addContactBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const contactsItems = document.getElementsByClassName('contact')
    if (contactsItems.length < 9) {
      const contactItem = createContactItem()
      contactsBlock.prepend(contactItem.contact)
      if (contactsItems.length >= 5) {
        document.querySelector('.site-modal__content').style.top = '70%'
      } else {
        document.querySelector('.site-modal__content').style.top = '50%'
      }
    } else {
      const contactItem = createContactItem()
      contactsBlock.prepend(contactItem.contact)
      addContactBtn.classList.remove('modal__btn-contact_active')
    }
  })

  return {
    form,
    modalClose,
    modalTitle,
    cancelBtn,
    inputName,
    inputSurname,
    inputLastname,
    labelName,
    labelSurname,
    labelLastname,
    contactsBlock,
    addContactBtn
  }
}
