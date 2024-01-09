// import { useState } from 'react'
import './App.css'
// import axios from 'axios'
// import { useEffect } from 'react'
import UserForm from './components/userForm';

function App() {
  // const [jokes, setJokes] = useState([])

  // useEffect(() => {
  //   axios.get('/api/jokes')
  //     .then((response) => {
  //       setJokes(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // })

  return (
    <>
      <h2>User Form</h2>
      <UserForm />

      {/* <p>Jokes: {jokes.length} </p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.Content}</h3>
        </div>
      )
    )} */}
    </>
  )
}

export default App
