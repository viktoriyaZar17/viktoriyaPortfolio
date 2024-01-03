export const getClients = async () => {
  try {
    let response = await fetch('http://localhost:3000/api/clients', {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
    })
    const result = await response.json()
    return result
  } catch (error) {
      console.log(error)
  }
}

export const sendClientData = async (client, method, id = null) => {
  try {
    const response = await fetch(`http://localhost:3000/api/clients/${method === 'POST' ? '' : id}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    })
    const result = await response.json()
    return result
  } catch (error) {
      console.log(error)
  }
}

export const deleteClientItem = async (id) => {
  try {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE",
    })
  } catch (error) {
      console.log(error)
  }
}

export const findClient = async (value) => {
  try {
    let response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
      method: "GET",
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error);
  }
}

