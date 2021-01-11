
import { useState } from 'react';
import './App.css';


function App() {
  const [counter, setCounter] = useState( 0 );
  const increaseCounter = () => {
    setCounter(counter + 1 );
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  const [friends, setFriends] = useState ([
      {
     name: "John",
     Address: "london"
    },
    {
      name: "Holy",
      Address: "london"
     },
     {
      name: "Peter",
      Address: "london"
     },
    ])
    const allFriends = friends.map((friend) => {
          return (
            <>
          <h3>name: {friend.name}</h3>
          <h3>address: {friend.Address}</h3>
          </>
          )
    })

const updateContact = () => {

  const friendsCopy = [...friends]

  friendsCopy[2].Address = "Berlin Germany"

  setFriends(friendsCopy)
}

  return (
    <>
      <h1>React Hooks and useState </h1>
      <h3>Counter: {counter}</h3>
        {allFriends}
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrement</button>
      <button onClick={updateContact}>Change Address</button>
    </>
  );
}
export default App;


