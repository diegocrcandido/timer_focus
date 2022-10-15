export default function Sound(){

  const forestAudio = new Audio("./sons/Floresta.wav")
  const rainAudio = new Audio("./sons/Chuva.wav")
  const coffeeShopAudio = new Audio("./sons/Cafeteria.wav")
  const fireAudio = new Audio("./sons/Lareira.wav")

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