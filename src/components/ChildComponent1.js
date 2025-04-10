import React from 'react';
  
  const ChildComponent1 = ({prop}) =>  {
	return (
	  <div style={{backgroundColor:'#CD5A19'}}>
       <h1>Child Component 1</h1>
       <button value='Option 1' onClick={(e)=>{prop(e.target.value)}}>Option 1</button>
	  </div>
	);
  }
  
  export default ChildComponent1;
  