import Message from './Message';
import React, { useState } from 'react';
import ListGroup from './components/ListGroup';
import Student from './components/Student';
import Child from './components/Child';
import Counts from './components/Counts';

const user = {
  name: "SUBASH",
  age: 28,
  hobbies: ["Reading", "Coding", "Gaming"]
};

function App()
{
  const [count, setCount] = useState(0);
  const showMessage = (name) => {
    alert(`Hello,${name}!`);
  };

   const increaseCount = () => {
    setCount(count + 1);
  };

  return <div>
    <ListGroup/>
    <Student user={user}/>
    <Child greet={showMessage}/>
    <h2>Count:{count}</h2>
    <Counts onIncrement={increaseCount}/>
  </div>
  // return <div><Message/></div>
}


export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
