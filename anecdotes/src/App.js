import { useState } from 'react';



const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}




const App = () => {
  //const
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  //selects new anecdote
  const selectNew = () => {
    let a = getRandomInt(0, anecdotes.length - 1)
    setSelected(a)
    console.log('now selected: %d, value %d', selected, votes[selected])
    
  }
  //add point to anecdote
  const addPoits = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log('now selected: %d, value %d', selected, votes[selected])
    // idk, nejak to dodelat asi 
    
  }
  //let
  let max_votes = 0;
  let bestId;
  

  for (let i = 0; i < anecdotes.length; i++){
    if(votes[i] > max_votes){max_votes = votes[i]
       bestId = i}
  }

  
  

  return (
    <div>
      <h1>Anecdote for today</h1>
      <h3>{anecdotes[selected]}</h3>
      <p>This anecdote has {votes[selected]} votes</p>
      <button onClick = {() => selectNew()}>new one</button>
      <button onClick = {() => addPoits()}>vote</button>
      <h2>Best one:</h2>
      <p>{anecdotes[bestId]}</p>
      <p>Has {max_votes} votes already!</p>
    </div>
  )
}

export default App