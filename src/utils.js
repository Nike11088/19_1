export const getRandomInteger = (min, max) => {
  return Math.random() * max | min
}

export const getRandomColor = () => {
  return `rgb(${getColorValue()}, ${getColorValue()}, ${getColorValue()})`
}

const getColorValue = () => {
  return getRandomInteger(0, 255)
}