
//testing img object loop
const imgArr = [
    {
        title: "Project Two-My Closet",
        source: "assets/images/closet.png",
        deployed: "https://project2uscd.herokuapp.com/",
        github: "https://github.com/Avalineai/project_2"

    },
    {
        title: "Project One-The Rabbit Hole",
        source: "assets/images/project-one.png",
        deployed: "https://avalineai.github.io/8-Project-1/",
        github: "https://github.com/Avalineai/8-Project-1"
    },
    {
        title: "Guardians of the Galaxy Word Guess Game",
        source: "assets/images/guardians.png",
        deployed: "https://avalineai.github.io/WordGuessGame/",
        github: "https://github.com/Avalineai/WordGuessGame"
    },
    {
        title: "Game of Thrones GifTastic",
        source: "assets/images/gotgiftastic.png",
        deployed: "https://avalineai.github.io/GifTastic/",
        github: "https://github.com/Avalineai/GifTastic"
    },
    {
        title: "Fruits and Vegetables Trivia",
        source: "assets/images/triviajpeg.jpg",
        deployed: "https://avalineai.github.io/TriviaGame/",
        github: "https://github.com/Avalineai/TriviaGame"
    }
]

for (let j = 0; j < imgArr.length; j++) {

    let newImgDiv = document.createElement('div')
    newImgDiv.classList.add('card')

    let newImg = document.createElement('img')
    newImg.classList.add("card-img-top")
    newImg.src = imgArr[j].source
    newImgDiv.appendChild(newImg)

    let cardBodyDiv = document.createElement('div')
    cardBodyDiv.classList.add('card-body')

    let cardText = document.createElement('h5')
    cardText.classList.add("card-title")
    cardBodyDiv.appendChild(cardText)
    cardText.textContent = imgArr[j].title

    let cardLink = document.createElement('a')
    cardLink.classList.add("deploy-link")
    cardLink.href = imgArr[j].deployed
    cardLink.textContent = "Deployed Project"
    cardBodyDiv.appendChild(cardLink)

    let newp = document.createElement('p')
    cardBodyDiv.appendChild(newp)

    let cardGithub = document.createElement('a')
    cardGithub.classList.add("card-github")
    cardGithub.href = imgArr[j].github
    cardGithub.textContent = "Github Repo"
    newp.appendChild(cardGithub)

    newImgDiv.appendChild(cardBodyDiv)

    let imgTestDiv = document.getElementById('test-img-div')
    imgTestDiv.appendChild(newImgDiv)
}
