//1.11
import { useState } from 'react'

const  Button = (props) => {
  return(
  <button onClick={props.onclick}>{props.text}</button>
  )
}


const Statistics = (props) => {
  let avg = ((props.good + props.bad*-1)/props.all);
  let pos = (props.good/props.all);
  if (props.all > 0){
  return(
  <div>
  <h2>statistics</h2>
  <table>
    <tbody>
    <tr>
      <td>good</td>
      <td>{props.good}</td>
    </tr>
    <tr>
      <td>neutral</td>
      <td>{props.neutral}</td>
    </tr>
    <tr>
      <td>bad</td>
      <td>{props.bad}</td>
    </tr>
    <tr>
      <td>all</td>
      <td>{props.all}</td>
    </tr>
    <tr>
      <td>average</td>
      <td>{avg}</td>
    </tr>
    <tr>
      <td>positive</td>
      <td>{pos}</td>
    </tr>
    </tbody>
  </table>
  </div>
  )}
    else{
      return(
        <div>
          <p>no feedback yet</p>
        </div>
      )
    }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick = {() => handleGood()} text = 'good'/>
      <Button onclick = {() => handleNeutral()} text = 'neutral'/>
      <Button onclick = {() => handleBad()} text = 'bad'/>
      
      <Statistics good={good} neutral = {neutral} bad ={bad} all={all} />
    </div>
  )
}

export default App