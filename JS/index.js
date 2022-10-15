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

import Cards from './cards.js'

import Sound from './sound.js'

import Events from './event.js'

import Stopwatch from './stopwatch.js'

const stopwatch = Stopwatch({
  minutesDisplay,
  secondDisplay
})

 const sound = Sound()
 const cards = Cards({
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
 })

Events({ cards, sound, stopwatch})

