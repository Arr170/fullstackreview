const Parts = ({part}) => {
    console.log('part called', {part})
  return(
    <div>
      {part.map(parts => <p key = {parts.id}>{parts.name} {parts.exercises}</p>)}
      <b>total of {part.map(parts=> parts.exercises).reduce((x,y) => (x + y))} exercises</b>
    </div>
  )
  
  
  }
  const Course = ({courses}) => {
    console.log('course work', {courses})
    
    return(
      <div>
        {courses.map(course => 
          
        <div key={course.id}><h1 >{course.name}</h1>
        <Parts  part = {course.parts}/></div>
        
        //console.log('course returned', {course.parts})
        //<Parts course = {course.parts}/>
        
          
        )}
        
      </div>
    )
  }

export default Course