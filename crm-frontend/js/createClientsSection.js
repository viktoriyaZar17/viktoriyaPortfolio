import { addClientModal } from './addClient.js'
import { createPreloader } from './preloader.js'
import { svgAddClient } from './svg.js'

export const createClientsSection = () => {
  const main = document.createElement('main')
  const section = document.createElement('section')
  const container = document.createElement('div')
  const h1 = document.createElement('h1')
  const sorting = document.createElement('thead')
  const tr = document.createElement('tr')
  const sortingID = document.createElement('th')
  const sortingFIO = document.createElement('th')
  const sortingCreate = document.createElement('th')
  const sortingChange = document.createElement('th')
  const sortingContacts = document.createElement('th')
  const sortingActions = document.createElement('th')
  const sortingSpan = document.createElement('span')
  const addBtn  = document.createElement('btn')
  const addSvg = document.createElement('span')
  const tableWrap = document.createElement('div')
  const table = document.createElement('table')
  const tBody = document.createElement('tbody')
  const createSpan = document.createElement('span')
  const changeSpan = document.createElement('span')

  const sortItems = [sortingID, sortingFIO, sortingCreate, sortingChange]

  for (const item of sortItems) {
    item.addEventListener('click', () => {
      if (item.classList.contains('sort-down')) {
        item.classList.remove('sort-down')
        item.classList.add('sort-up')
      } else {
        item.classList.remove('sort-up')
        item.classList.add('sort-down')
      }
    })
  }

  sortingCreate.addEventListener('click', () => {
    if (sortingCreate.classList.contains('sort-down')) {
      createSpan.classList.add('sort-up')
    } else {
      createSpan.classList.remove('sort-up')
    }
  })

  sortingChange.addEventListener('click', () => {
    if (sortingChange.classList.contains('sort-down')) {
      changeSpan.classList.add('sort-up')
    } else {
      changeSpan.classList.remove('sort-up')
    }
  })

  sortingID.setAttribute('data-type', 'id')
  sortingFIO.setAttribute('data-type', 'text')
  sortingCreate.setAttribute('data-type', 'create')
  sortingChange.setAttribute('data-type', 'update')


  section.classList.add('clients')
  tableWrap.classList.add('clients__wrap')
  h1.classList.add('clients__title')
  tBody.classList.add('clients__tbody')
  sorting.classList.add('clients__sort', 'sort-info')
  sortingID.classList.add('sort-info__item', 'sort-info__item_id', 'sort-up')
  sortingFIO.classList.add('sort-info__item', 'sort-info__item_fio', 'sort-down')
  sortingCreate.classList.add('sort-info__item', 'sort-info__item_create', 'sort-down')
  sortingChange.classList.add('sort-info__item', 'sort-info__item_change', 'sort-down')
  sortingContacts.classList.add('sort-info__item', 'sort-info__item_contacts')
  sortingActions.classList.add('sort-info__item', 'sort-info__item_action')
  sortingSpan.classList.add('sort-info__sorting')

  addBtn.classList.add('clients__btn', 'btn-reset')
  addSvg.classList.add('clients__svg')
  container.classList.add('container', 'clients__container')
  main.classList.add('main')
  table.classList.add('clients__table')
  createSpan.classList.add('create-span')
  changeSpan.classList.add('change-span')

  h1.textContent = 'Клиенты'
  sortingID.textContent = 'id'
  sortingSpan.textContent = 'а-я'
  sortingFIO.textContent = 'Фамилия Имя Отчество'
  sortingCreate.textContent = 'Дата и время создания'
  sortingChange.textContent = 'Последние изменения'
  sortingContacts.textContent = 'Контакты'
  sortingActions.textContent = 'Действия'
  addBtn.textContent = 'Добавить клиента'
  addSvg.innerHTML = svgAddClient

  addBtn.addEventListener('click', () =>{
    document.body.append(addClientModal())
  })

  main.append(section)
  section.append(container)
  sortingFIO.append(sortingSpan)
  sortingCreate.append(createSpan)
  sortingChange.append(changeSpan)
  main.append(section)
  tr.append(
    sortingID,
    sortingFIO,
    sortingCreate,
    sortingChange,
    sortingContacts,
    sortingActions
  )
  sorting.append(tr)
  tableWrap.append(table, createPreloader())
  table.append(sorting, tBody)
  addBtn.append(addSvg)
  container.append(h1, tableWrap, addBtn)

  return {
    main,
    table,
    tBody
  }
}
