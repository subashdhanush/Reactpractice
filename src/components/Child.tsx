import React from 'react';



function Child({greet}) {
  return (
    <div>      <button onClick={()=>greet('Subash')}>Click Me</button>
</div>
  )
}


export default Child;