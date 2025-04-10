import React from 'react';
  
  const ChildComponent2 = ({prop}) =>  {
	return (
	  <div style={{backgroundColor:'#FDD100'}}>
        <h1>Child Component 2</h1>
        <button value='Option 2' onClick={(e)=>{prop(e.target.value)}}>Option 2</button>
	  </div>
	);
  }
  
  export default ChildComponent2;
  