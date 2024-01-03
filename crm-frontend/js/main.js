import { createClientsHeader } from "./createHeader.js"
import { createClientsSection } from "./createClientsSection.js"
import { getClients } from "./clientsApi.js"
import { createClientItem } from "./createClientItem.js"
import { sortTable } from "./sortClientsTable.js"
import { searchClients } from "./searchClient.js"

const createApp = async () => {
  const header = createClientsHeader()
  const clientsSection = createClientsSection()
  document.body.append(header, clientsSection.main)
  const preloader = document.querySelector('.preloader')
  const tableWrap = document.querySelector('.clients__wrap')

  try {
    tableWrap.style.overflow = 'visible'
    const clients = await getClients()
    searchClients(clients)
    for (const client of clients) {
      document.querySelector('.clients__tbody').append(createClientItem(client))
    }
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => preloader.remove(), 1500)
    tableWrap.style.overflow = 'auto'
  }
}
createApp()
document.addEventListener('DOMContentLoaded', sortTable)
