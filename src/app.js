import { getRandomColor } from "./utils"

export default function initApp() {
  const button = document.createElement('button')
  button.className = 'button'
  button.textContent = 'Изменить цвет страницы'
  button.addEventListener('click', () => changeColor())
  document.body.append(button)
}

const changeColor = () => {
  document.body.style.backgroundColor = getRandomColor()
}

