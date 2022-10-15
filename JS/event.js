import {
  buttonPlay,
  buttonStop,
  turnUpTimer,
  turnDownTimer,
  minutesDisplay,
  secondDisplay,
  buttonFireplace,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
 } from './elements.js'

 export default function Events({cards, sound, stopwatch}) {
  buttonPlay.addEventListener('click', function() {
    stopwatch.initStopwatch()
  })
  
  buttonStop.addEventListener('click', function(){
    stopwatch.resetTimer()
  })
  
  turnUpTimer.addEventListener('click', function(){
    stopwatch.upTimer()
  })
  turnDownTimer.addEventListener('click', function(){
    stopwatch.downTimer()
   })
  buttonFireplace.addEventListener('click', function(){
    sound.pressButtonFireAudio()
    cards.onButtonFireplace()
   })
  buttonRain.addEventListener('click', function(){
    sound.pressButtonRainAudio()
    cards.onButtonRain()
  })
  buttonCoffeeShop.addEventListener('click', function(){
    sound.pressButtonCoffeeShopAudio()
    cards.onButtonCoffeeShop()
  })
  buttonForest.addEventListener('click', function(){
    sound.pressButtonForestAudio()
    cards.onButtonForest()
  })
 }