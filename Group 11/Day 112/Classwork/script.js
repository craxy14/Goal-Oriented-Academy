// გამოიყენეთ https://dummyjson.com/docs/posts იმისათვის რომ შეძლოთ პოსტების წამოღება და დარენდერება, როგორც fb-ზე ხდება (news feed) / შექმენით navigation სადაც გექნებათ რამდენიმე ლინკი. 1)News Feed / 2)Registration / 3)Authorisation
const mainDiv = document.getElementById("mainDiv")
const form = document.getElementById("myForm")
const checkboxDiv = document.getElementById("checkboxDiv")
const sortButtons = document.getElementById("sortButtons")

const renderPosts = (arr) => {
    console.log(arr);
    mainDiv.innerHTML = ""

    let postsHTML = "";
    for (let i = 0; i < arr.posts.length; i++) {
        postsHTML += `
        <div>
            <p>ID: ${arr.posts[i].id}</p>
            <p>Title: ${arr.posts[i].title}</p>
            <p>Title: ${arr.posts[i].body}</p>

            <div class="reactionsDiv">
                <p>Likes: ${arr.posts[i].reactions.likes}</p>
                <p>Dislikes: ${arr.posts[i].reactions.dislikes}</p>
                <p>Dislikes: ${arr.posts[i].reactions.dislikes}</p>
                <p>Tags: ${arr.posts[i].tags}</p>
            </div><hr/>
        </div>`
    }

    mainDiv.innerHTML = postsHTML;
};

const renderCheckBox = (data) => {
    let tagsArr = []

    for(const arr of data.posts){
        tagsArr = [...tagsArr, ...arr.tags]
    }
    tagsArr = Array.from(new Set(tagsArr))

    tagsArr.forEach((curVal) => {
        checkboxDiv.innerHTML += `
        <label for="${curVal}">${curVal}</label>
        <input type="checkbox" id="${curVal}" value="${curVal}" onchange="sortByTag(this)"/>
        `
    })
}

form.keyword.addEventListener("input", (e) => {
    e.preventDefault();

    posts(form.keyword.value)
})

sortButtons.addEventListener("click", (e) => {
    e.preventDefault();

    if(e.target.type != "button"){
        console.log("Not a Button!")
    }else{
        ascDesc(e.target.value)
    }
})

fetch(`https://dummyjson.com/posts`)
    .then(res => res.json())
    .then((jsonRes) => {
        renderPosts(jsonRes)
        renderCheckBox(jsonRes)
    });

const posts = (str) => {
    fetch(`https://dummyjson.com/posts/search?q=${str}`)
    .then(res => res.json())
    .then(renderPosts);
}

const ascDesc = (str) => {
    fetch(`https://dummyjson.com/posts?sortBy=title&order=${str}`)
    .then(res => res.json())
    .then(renderPosts);
}

const sortByTag = (str) => {    
    fetch(`https://dummyjson.com/posts/tag/${str.value}`)
    .then(res => res.json())
    .then(renderPosts);
}