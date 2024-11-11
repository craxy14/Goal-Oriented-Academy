import { useState } from 'react'

function App() {
  const [info, useInfo] = useState([{}])

  const handleSubmit = (e) => {
    e.preventDefault();

    useInfo({
      "name":event.target.name.value,
      "surname":event.target.surname.value,
      "email":event.target.email.value,
    })
  }
  console.log(info)
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" id='name' placeholder='Enter your name'/>

      <input type="text" id='surname' placeholder='Enter your surname'/>

      <input type="email" name="" id="email" placeholder='Enter your email' />

      <input type="submit" value="Submit"/>
    </form>
    </>
  )
}

export default App
