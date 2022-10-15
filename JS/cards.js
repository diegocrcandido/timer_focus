export default function Cards ({
  buttonFireplace,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
 }) {
 function onButtonForest(){
  buttonForest.classList.toggle("bntClick")
  buttonFireplace.classList.remove("bntClick")
  buttonRain.classList.remove("bntClick")
  buttonCoffeeShop.classList.remove("bntClick")
}
function onButtonFireplace(){
  buttonFireplace.classList.toggle("bntClick")
  buttonForest.classList.remove("bntClick")
  buttonRain.classList.remove("bntClick")
  buttonCoffeeShop.classList.remove("bntClick")
}
function onButtonRain(){
  buttonRain.classList.toggle("bntClick")
  buttonForest.classList.remove("bntClick")
  buttonFireplace.classList.remove("bntClick")
  buttonCoffeeShop.classList.remove("bntClick")
}
function onButtonCoffeeShop(){
  buttonCoffeeShop.classList.toggle("bntClick")
  buttonForest.classList.remove("bntClick")
  buttonFireplace.classList.remove("bntClick")
  buttonRain.classList.remove("bntClick")
}
return {
  onButtonForest,
  onButtonRain,
  onButtonCoffeeShop,
  onButtonFireplace
}
 }