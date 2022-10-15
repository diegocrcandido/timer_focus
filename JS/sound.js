export default function Sound(){

  const forestAudio = new Audio("./sound/Floresta.wav")
  const rainAudio = new Audio("./sound/Chuva.wav")
  const coffeeShopAudio = new Audio("./sound/Cafeteria.wav")
  const fireAudio = new Audio("./sound/Lareira.wav")

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeShopAudio.loop = true
  fireAudio.loop = true

  function pressButtonForestAudio(){
    forestAudio.play()
  }
  function pressButtonRainAudio(){
    rainAudio.play()
  }
  function pressButtonCoffeeShopAudio(){
    coffeeShopAudio.play()
  }
  function pressButtonFireAudio(){
    fireAudio.play()
  }

  return {
    pressButtonFireAudio,
    pressButtonCoffeeShopAudio,
    pressButtonRainAudio,
    pressButtonForestAudio
  }
}