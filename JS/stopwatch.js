import Sound from "./sound.js"

import Cards from "./cards.js"

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

export default function Stopwatch ({minutesDisplay, secondDisplay}){

  
  let minutes = Number(minutesDisplay.textContent)

  let timerTimeOut
  
function updateMinutes() {
  minutes = Number(minutesDisplay.textContent)
}

function upTimer() {
  updateTimerDisplay(minutes + 5, 0)
  updateMinutes(minutes)
}
function downTimer(){
  updateTimerDisplay(minutes - 5, 0)
  if(minutes <= 5){
    return
  }
  if(minutes >= 5){
    updateMinutes(minutes)
  }
}

function resetTimer (){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)  
}

function updateTimerDisplay(minutes, second){
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondDisplay.textContent = String(second).padStart(2, '0')
}

function initStopwatch(){
  timerTimeOut = setTimeout (function(){
    let minutes = Number(minutesDisplay.textContent)
    let second = Number(secondDisplay.textContent)
    
    updateTimerDisplay(minutes, 0)
    
    if(second <= 0){
      second = 60
      --minutes
    }
    
    if(minutes <= 0 && second <= 0){
      return
    }
    initStopwatch()
    updateTimerDisplay(minutes, String(second - 1))
    
    
  }, 1000)
  }
  return{
    upTimer,
    downTimer,
    resetTimer,
    initStopwatch
  }
}