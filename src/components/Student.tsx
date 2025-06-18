// Student.js
import React from 'react';

function Student({user}) {
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
       <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
