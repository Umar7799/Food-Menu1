import React, { useState } from 'react';
import './App.css';
import Button from './components/Button'

import caribbieanP from './Food-Images/caribbiean.jpg'
import frenchP from './Food-Images/french.jpg'
import indianP from './Food-Images/indian.jpg'
import italyP from './Food-Images/italy.jpg'
import koreanP from './Food-Images/korean.jpg'
import polishP from './Food-Images/polish.jpg'
import uzbekP from './Food-Images/uzbek.jpg'


const App = () => {
  const Foods = ['caribbiean', 'french', 'indian', 'italian', 'korean', 'polish', 'uzbek']
  const FoodImages = [caribbieanP, frenchP, indianP, italyP, koreanP, polishP, uzbekP]


  const [food, setFood] = useState('')
  const [foodImg, setFoodImg] = useState()
  const [recipe, setRecipe] = useState('')

  const getFood = () => {



    let myArray = Foods.map((item, index) => {
      return [item, FoodImages[index]]
    })

    for (let i = 0; i <= Foods.length; i++) {
      let dish = Foods[Math.floor(Math.random() * Foods.length)]

      if (dish === 'caribbiean') {
        setFood(myArray[0][0])
        setFoodImg(myArray[0][1])
        setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse tempora quaerat nemo. Culpa non expedita saepe perspiciatis cupiditate.')
      }
      if (dish === 'french') {
        setFood(myArray[1][0])
        setFoodImg(myArray[1][1])
        setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse tempora quaerat nemo. Culpa non expedita saepe perspiciatis cupiditate.')

      }
      if (dish === 'indian') {
        setFood(myArray[2][0])
        setFoodImg(myArray[2][1])
        setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse tempora quaerat nemo. Culpa non expedita saepe perspiciatis cupiditate.')

      }
      if (dish === 'italian') {
        setFood(myArray[3][0])
        setFoodImg(myArray[3][1])
        setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse tempora quaerat nemo. Culpa non expedita saepe perspiciatis cupiditate.')

      }
      if (dish === 'korean') {
        setFood(myArray[4][0])
        setFoodImg(myArray[4][1])
        setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse tempora quaerat nemo. Culpa non expedita saepe perspiciatis cupiditate.')

      }
      if (dish === 'polish') {
        setFood(myArray[5][0])
        setFoodImg(myArray[5][1])
        setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse tempora quaerat nemo. Culpa non expedita saepe perspiciatis cupiditate.')

      }
      if (dish === 'uzbek') {
        setFood(myArray[6][0])
        setFoodImg(myArray[6][1])
        setRecipe('Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse tempora quaerat nemo. Culpa non expedita saepe perspiciatis cupiditate.')

      }


    }

  }






  return (
    <div className='wrapper'>
      <h1 className='h1'>Hello there</h1>
      <h2 className='h2'>Today for lunch</h2>
      <div className="container">
        <div className="card">
          <div className="front">
            <img className='foodImg' src={foodImg} />
          </div>
          <div className="back">
            <span style={{ color: '#35858B', fontSize: '30px' }}>{food}</span>
            <p>{recipe}</p>
          </div>
        </div>
      </div>
      <div className='food'>
        <span >{food}</span>
      </div>
      < Button getFood={getFood} />
    </div>
  )
}



export default App;



