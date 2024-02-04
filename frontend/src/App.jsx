import { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './components/userForm';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  const [userData, setUserData] = useState([])

  const GetUserData = () => {
    axios.get('http://localhost:3001/api/getAllUserData')
      .then((response) => {
        setUserData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const GetJokes = () => {
    axios.get('http://localhost:3001/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  useEffect(() => {
    Promise.all([
      GetUserData(),
      GetJokes()
    ])
  }, [])

  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     const students = await studentService.getAll()
  //     const courses = await courseService.getAll()
  //     const schedules= await scheduleService.getAll()

  //     setStudents(students)
  //     setCourses(courses)
  //     setSchedules(schedules)
  //   }

  //   fetchAllData()
  // }, [])

  // useEffect(() => {
  //   Promise.all([
  //     studentService.getAll().then(setStudents),
  //     courseService.getAll().then(setCourses),
  //     scheduleService.getAll().then(schedules)
  //   ])
  // }, [])

  return (
    <>
      <h2>User Form</h2>
      <UserForm />

      <h3>userData: {userData.length} </h3>

      {userData.map((userData) => (
        <div key={userData._id}>
          <p>{userData.fullName}</p>
          <p>{userData.email}</p>
          <p>{userData.age}</p>
          <p>{userData.password}</p> <hr />
        </div>
      ))}

      <p>Jokes: {jokes.length} </p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h2>{joke.Content}</h2>
        </div>
      )
      )}
    </>
  )
}

export default App
