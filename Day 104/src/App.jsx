import { useState } from 'react'

// function App() {
//   const [user, setUser] = useState([])
//   const [friends, setFriend] = useState([])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value
//     const surname = e.target.surname.value
//     const email = e.target.email.value

//     setUser([...user,{
//       "name":name,
//       "surname":surname,
//       "email":email,
//     }])
//   }

//   const addFriend = (e) => {

//   }

//   console.log(user)
  
//   return (
//     <>
//     <form action="" onSubmit={handleSubmit}>
//       <input type="text" name='name' placeholder='James'/>
//       <input type="text" name='surname' placeholder='Smith'/>
//       <input type="email" name='email' placeholder='example@gmail.com'/>
//       <button>Submit</button>
//     </form>

//     <ul>
//       {
//         user.map((user, index) => {
//           return (
//             <li key={index}>
//               <span>{user["name"] + " " + user["surname"]}</span>
//               <button type='button' onClick={addFriend(index)}>Add Friend</button>
//             </li>
//           )
//         })
//       }
//     </ul>

//     <ul>

//     </ul>
//     </>
//   )





const App = () => {
    const [accounts, setAccounts] = useState([]);
    const [friends, setFriends] = useState([]);

    const hanleSubmit = (e) => {
      e.preventDefault();
      
      const name = e.target.name.value;
      const lastname = e.target.lastname.value;
      const email = e.target.email.value;

      setAccounts([...accounts, { name, lastname, email }]);
    }

    const handleDelete = (index) => {
      setAccounts(accounts.filter((_, i) => i!== index));
    }

    const handleAddFriend = (index) => {
      const acc = accounts[index];
      setFriends([...friends, acc]);
    }

    return (
      <form onSubmit={hanleSubmit}>
        <input type="text" name="name" placeholder="Name: " />
        <input type="text" name="lastname" placeholder="Lastname: " />
        <input type="text" name="email" placeholder="Email: " />
        <button>Click</button>

        <ul>
          {
            accounts.map((accObj, index) => {
              return (
                <li key={index}>
                  <p>{accObj.name} {accObj.lastname}</p>
                  <p>Email: {accObj.email}</p>
                  <button type="button" onClick={() => handleDelete(index)}>Remove</button>
                  <button type="button" onClick={() => handleAddFriend(index)}>Add Friend</button>
                </li>
              )
            })
          }
        </ul>


        <h2>Friends List</h2>
        <ul>
          {
            friends.map((friendObj, index) => {
              return (
                <li key={index}>
                  <p>{friendObj.name} {friendObj.lastname}</p>
                  <p>Email: {friendObj.email}</p>
                </li>
              )
            })
          }
        </ul>

      </form>
    )
}

export default App;