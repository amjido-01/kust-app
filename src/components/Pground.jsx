import React from 'react';
import { useState } from 'react';
import { Data } from '../Data';

export const Pground = () => {
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedFoodExamples, setSelectedFoodExamples] = useState("")
  const [price, setPrice] = useState("")
  
  // let faculty = Data[0].map((item) => console.log(item, "from here"))
  console.log(Data[0].faculties.map((item) => console.log(item)))

  const foodCategories = ["Fruits", "Vegetables", "Cabohydrates"]
  const foodExamples = {
    Fruits: ["Banana", "Orange", "Mango"],
    Vegetables: ["Carbage", "Slade", "Tomatos"],
    Cabohydrates: ["Rice", "Maize", "Patato"]
  }
  const foodPrice = {
    Banana: 400,
    Orange: 120,
    Mango: 100,
    Carbage: 150,
    Slade: 50,
    Tomatos: 350,
    Rice: 1000,
    Maize: 800,
    Patato: 250
  }

  const handleFoodCategoriesChange = (e) => {
    setSelectedCategories(e.target.value)
    setSelectedFoodExamples("")
    setPrice("")
  }

  const handleFoodExamplesChange = (e) => {
    setSelectedFoodExamples(e.target.value)
    setPrice("")
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  return (
    <div>
        <h1>hello world</h1>
        <select value={selectedCategories} onChange={handleFoodCategoriesChange}>
          <option value="">--select Food type--</option>
          {foodCategories.map((food, index) => 
          <option value={food} key={index}>{food}</option>)}
        </select>

        <select value={selectedFoodExamples} onChange={handleFoodExamplesChange}>
          <option value="">--select Food--</option>
          {selectedCategories && foodExamples[selectedCategories].map((item, index) => <option value={item} key={index}>{item}</option>)}
        </select>
    </div>
  )
}
