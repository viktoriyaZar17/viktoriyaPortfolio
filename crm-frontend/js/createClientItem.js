import { deleteClientModal } from "./createDeleteModal.js"
import { editClientModal } from "./editClient.js"
import { createContactItemByType, formatDate, formatTime } from "./setting.js"
import { svgSpinner } from "./svg.js"

export const createClientItem = (data) => {
  const clientTr = document.createElement('tr')
  const clientIdTd = document.createElement('td')
  const clientId = document.createElement('span')
  const clientFIO = document.createElement('td')
  const clientName = document.createElement('span')
  const clientSurname = document.createElement('span')
  const clientLastName = document.createElement('span')
  const clientCreate = document.createElement('td')
  const clientChange = document.createElement('td')
  const createDate = document.createElement('span')
  const createTime = document.createElement('span')
  const changeDate = document.createElement('span')
  const changeTime = document.createElement('span')
  const clientContacts = document.createElement('td')
  const clientActions = document.createElement('td')
  const actionEdit = document.createElement('button')
  const actionDelete = document.createElement('button')
  const deleteClient = deleteClientModal()
  const editClient = editClientModal(data)
  const editSpinner = document.createElement('span')
  const deleteSpinner = document.createElement('span')


  clientTr.classList.add('clients__item');
  clientTr.id = data.id;
  clientIdTd.classList.add('client__id');
  clientFIO.classList.add('clients__fio');
  clientName.classList.add('clients__name');
  clientSurname.classList.add('clients__surname');
  clientLastName.classList.add('clients__lastname');
  clientCreate.classList.add('clients__create');
  createDate.classList.add('create__date');
  createTime.classList.add('create__time');
  clientChange.classList.add('clients__change');
  changeDate.classList.add('change__date');
  changeTime.classList.add('change__time');
  clientContacts.classList.add('clients__contacts');
  clientActions.classList.add('clients__actions');
  actionDelete.classList.add('clients__delete', 'btn-reset');
  actionEdit.classList.add('clients__edit', 'btn-reset');
  editSpinner.classList.add('actions__spinner')
  deleteSpinner.classList.add('actions__spinner')


  for (const contact of data.contacts) {
    createContactItemByType(contact.type, contact.value, clientContacts)
  }

  clientId.textContent = data.id.substr(0, 6)
  clientName.textContent = data.name
  clientSurname.textContent = data.surname
  clientLastName.textContent = data.lastName
  actionEdit.textContent = 'Изменить'
  actionDelete.textContent = 'Удалить'
  createDate.textContent = formatDate(data.createdAt)
  createTime.textContent = formatTime(data.createdAt)
  changeDate.textContent = formatDate(data.updatedAt)
  changeTime.textContent = formatTime(data.updatedAt)
  editSpinner.innerHTML = svgSpinner
  deleteSpinner.innerHTML = svgSpinner

  const deleteById = () => {
    import('./clientsApi.js').then(({ deleteClientItem }) => {
      deleteClient.deleteModalDelete.addEventListener('click', () => {

        try {
          deleteClient.deleteSpinner.style.display = 'block'
          setTimeout(() => {
            deleteClientItem(data.id)
            document.getElementById(data.id).remove()
            deleteClient.deleteModal.remove()
          }, 1500)
        } catch (error) {
          console.log(error)
        } finally {
          setTimeout(() => deleteClient.deleteSpinner.style.display = 'none', 1500)
        }
      })
    })
  }

  actionDelete.addEventListener('click', () => {
    deleteSpinner.style.display = 'block'
    actionDelete.classList.add('action-wait')
    setTimeout(() => {
      deleteById()
      document.body.append(deleteClient.deleteModal)

      deleteSpinner.style.display = 'none'
      actionDelete.classList.remove('action-wait')
    }, 1500)
  })

  actionEdit.addEventListener('click', () => {
    editSpinner.style.display = 'block'
    actionEdit.classList.add('action-wait')
    setTimeout(() => {
      document.body.append(editClient.editModal)

      editSpinner.style.display = 'none'
      actionEdit.classList.remove('action-wait')
    }, 1500)
  })

  clientIdTd.append(clientId)
  clientFIO.append(clientSurname, clientName, clientLastName)
  clientCreate.append(createDate, createTime)
  clientChange.append(changeDate, changeTime)
  actionEdit.append(editSpinner)
  actionDelete.append(deleteSpinner)
  clientActions.append(actionEdit, actionDelete)

  clientTr.append(clientIdTd, clientFIO, clientCreate, clientChange, clientContacts, clientActions)
  return clientTr
}
