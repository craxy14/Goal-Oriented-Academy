import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>{count}</p>
    <button id='btn'>+</button>
    </>
  )


//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(0)

//   const plus1 = () => {
//     setCount(count + 1)
//   }

//   const plus2 = () => {
//     setCount2( count2 + 1)
//   }

//   useEffect(() => {
//     console.log("Piece of State has changed!")
//   }, [count, count2])

//   return (
//     <>
//     <div>
//       <p>{count}</p>
//       <button onClick={plus1}>+</button>
//     </div>

//     <div>
//       <p>{count2}</p>
//       <button onClick={plus2}>+</button>
//     </div>
//     </>
//   )
}

export default App
