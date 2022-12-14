const App = () => {
  const course = 'Half Stack application development'
  const part1={
    name:'Fundamentals of React',
    exercises: 10
  }
  const part2={
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3={
    name: 'State of component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
    <div> 
      <Part part={props.part1} exrcs={props.exercises1} />
      <Part part={props.part2} exrcs={props.exercises2} />
      <Part part={props.part3} exrcs={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exrcs}</p>
    </div> 
  )
}

const Total = (props) =>{
  return(
    <div> 
      <p>Number of exircices {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

export default App
