const table = document.querySelector("tbody")

const deleteUser = (index, users) => {
    users.splice(index, 1)

    render(users)
}

const render = ( users ) => {
    table.innerHTML = ``
    // console.log(users)
    for(let i = 0; i < users.length; i++){
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${users[i].firstName}</td>
            <td>${users[i].lastName}</td>
            <td>${users[i].age}</td>
            <td><button>Delete</button></td>
        `
        const deleteButton = tr.querySelector('button');
        deleteButton.addEventListener('click', () => deleteUser(i, users));
        table.appendChild(tr);
    }
}


fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => render(data.users));