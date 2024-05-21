import logo from './logo.svg';
import './App.css';
import UserCart from './UserCart';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Nilesh Choudhary");

  // Example2

  // const userData = [
  //   { name: "Lokesh", age: 24, email: "lucky9644@gmail.com" },
  //   { name: "Asyush", age: 25, email: "aayush9644@gmail.com" },
  //   { name: "Manish", age: 24, email: "manish9644@gmail.com" },
  //   { name: "Chandu", age: 24, email: "chandu9644@gmail.com" }
  // ]
  return (
    <div className='App'>
      <h1>Hello in React js</h1>
      <UserCart name={name} />
      {/* 
      {userData.map((user, index) => (
        <UserCart
          key={index}
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))} */}

      <button onClick={() => setName("chanduBhai")}>Update Props</button>
    </div>
  );
}

export default App;
