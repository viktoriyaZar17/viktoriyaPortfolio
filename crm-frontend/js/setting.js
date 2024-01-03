import { contactTooltip } from "./createTooltip.js";
import { svgEmail, svgFb, svgOther, svgPhone, svgVk } from "./svg.js";

export const createContactLink = (type, value, element, svg, item) => {
  const setTooltip = contactTooltip(type, value)
  element = document.createElement('a');
  element.classList.add('contacts__link')
  element.innerHTML = svg

  if (type === 'Email') {
    element.href = `mailto:${value.trim()}`
  } else if (type === 'Телефон') {
    element.href = `tel:${value.trim()}`
    setTooltip.tooltipValue.style.color = 'color: var(--white)'
    setTooltip.tooltipValue.style.textDecoration = 'none'
  } else {
    element.href = value.trim()
  }
  element.append(setTooltip.tooltip)
  item.append(element)
}

export const createContactItemByType = (type, value, item) => {
  switch (type) {
    case 'Телефон':
      let phone
      createContactLink(type, value, phone, svgPhone, item)
      break
    case 'Facebook':
      let fb
      createContactLink(type, value, fb, svgFb, item)
      break
    case 'VK':
      let vk
      createContactLink(type, value, vk, svgVk, item)
      break
    case 'Email':
      let email
      createContactLink(type, value, email, svgEmail, item)
      break
    case 'Другое':
      let other
      createContactLink(type, value, other, svgOther, item)
      break
  }
}

export const formatDate = date => {
  const newDate = new Date(date)
  const yyyy = newDate.getFullYear()
  let mm = newDate.getMonth()
  let dd = newDate.getDate()
  if (mm < 10) mm = '0' + mm
  if (dd < 10) dd = '0' + dd

  return dd + '.' + mm + '.' + yyyy
}

export const formatTime = date => {
  const newDate = new Date(date)
  let hh = newDate.getHours()
  let min = newDate.getMinutes()
  if (hh < 10) hh = '0' + hh
  if (min < 10) min = '0' + min

  return hh + ':' + min
}
