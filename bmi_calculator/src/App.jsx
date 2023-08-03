import { useState } from "react"
import './App.css'

export default function App() {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
  })

  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function calculateBmi(e) {
    e.preventDefault()
    const { weight, height } = formData
    if (weight == "" || height == "") {
      alert("Inputs cannot be empty")
    } else {
      const heightInMeters = height / 100
      const bmiResult = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiResult)

      if (bmiResult < 18.5) {
        setMessage("Your result suggests you are very underweight");
      } else if (bmiResult >= 18.5 && bmiResult < 25) {
        setMessage("Your result suggests you are underweight");
      } else if (bmiResult >= 25 && bmiResult < 30) {
        setMessage("Your result suggests you are a healthy weight");
      } else if (bmiResult >= 30 && bmiResult < 35) {
        setMessage("Your result suggests you are overweight");
      } else if (bmiResult >= 35 && bmiResult < 40) {
        setMessage("Your result suggests you are very overweight");
      } else {
        setMessage("Something went wrong. Please, try it again.");
      }    
    }
  }

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>

      <form action="">
        <div className="input-container">
          <label htmlFor="inputWeight">Weight (kg)</label>
          <input 
            type="number" 
            name="weight" 
            id="inputWeight" 
            placeholder='Enter your weight'
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="inputHeight">Height (cm)</label>
          <input 
            type="number" 
            name="height" 
            id="inputHeight" 
            placeholder='Enter your height'
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <button id="btnCalculate" onClick={calculateBmi}>calculate bmi</button>
      </form>

      {
        bmi == "" ?
        <div className="initial-message">
          <p>Your BMI result is going to show here</p>
        </div>
        :
        <div className="result">
          <h2>Your bmi is: {bmi}</h2>
          <p>{message}</p>
        </div>
      }
    </div>
  )
}


