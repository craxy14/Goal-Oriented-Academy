// Parsing - ნიშნავს, json-ის ფორმატიდან რეალურ ობიექტში გადაყვანა, ის არის ასინქრონიზირებული მეთოდი, რადგან გარდაგქმნას json-იდან რექალურ ობიექტში სჭირდება დრო
// githubPromise
//     .then((response) => response.json())
//         .then((data) => {console.log(data)})
//         .catch((data) => {console.log("Error!")})

// -------------------------------------------------------------
const form = document.getElementById("myForm")
const resultDiv = document.getElementById("resultDiv")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.user.value
    searchUser(username)

    form.reset()
})


const searchUser = (user) => {
    const githubPromise = fetch(`https://api.github.com/users/${user}`);
    
    githubPromise
        .then((res) => {
            if(res.ok) {
                return res.json()
            }else{
                console.log("Not Found!")
                resultDiv.innerHTML = "<p>User not found! 😔</p>"
                return null
            }
        })

        .then((data) => {
            if(data) {
                renderUsers(data);
            }
        })
};


const renderUsers = (arr) => {
    resultDiv.innerHTML = ""
    console.log(arr)

    resultDiv.innerHTML += `
    <img src="${arr.avatar_url}">
    <div>
        <p id="loginP">${arr.login}</p>
        <p id="nameP">${arr.name}</p>
        </div>

    <div>
        <p id="bioP">Bio: <span>${arr.bio != null ? arr.bio : "Empty"}</span></p>
        <p id="repoP">Number of public repositories: <span>${arr.public_repos}</span></p>
    </div>
        
    <a href="${arr.html_url}" target="_blank"><button id="visitBtn">Visit!</button></a>
    `
}

// -------------------------------------------------------------