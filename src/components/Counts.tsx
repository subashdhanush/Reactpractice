import React from 'react';

function Counts({onIncrement}) {
  return (
    <div><button onClick={onIncrement}>Increase</button></div>
  )
}


export default Counts;