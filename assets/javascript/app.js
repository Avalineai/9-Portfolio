//general object test loop
const objArr = [
    {
        name: "test one",
        attr: "test-1"
    },
    {
        name: "test two",
        attr: "test-2"
    }
]

for (let i = 0; i < objArr.length; i++) {
    const newTestDiv = document.createElement('div');
    newTestDiv.classList.add("test-div");
    let stringOne = document.createElement('p');
    stringOne.setAttribute("id", objArr[i].attr)
    stringOne.textContent = objArr[i].name
    newTestDiv.appendChild(stringOne)

    let divForTesting = document.getElementById("div-for-test")
    divForTesting.appendChild(newTestDiv)
    
}


//testing img object loop
const imgArr = [
    {
        className: "project-one-one",
        source: "assets/images/project-one.png"
    },
    {
        className: "project-two-two",
        source: "assets/images/guardians.png"
    },
    {
        className: "project-three-three",
        source: "assets/images/gotgiftastic.png"
    },
    {
        className: "project-four-four",
        source: "assets/images/triviajpeg.jpg"
    }
]

for (let j = 0; j < imgArr.length; j++) {
    let newImgDiv = document.createElement('div')
    newImgDiv.classList.add(imgArr[j].className)
    let newImg = document.createElement('img')
    newImg.src = imgArr[j].source
    newImgDiv.appendChild(newImg)
    let imgTestDiv = document.getElementById('test-img-div')
    imgTestDiv.appendChild(newImgDiv)
    //const element = imgArr[j];

    //may have to create anchor element, id, and link in obj as well
}

//adding image to div to a project box
let newDivOne = document.createElement('div');
newDivOne.classList.add('project-one')
let newImgOne = document.createElement('img');
//newImgOne.id = 'projctOne'
newImgOne.src = "assets/images/project-one.png"
newImgOne.alt = 'The Rabbit Hole-Project One'
newDivOne.appendChild(newImgOne)
let projOne = document.getElementById('one-proj')
projOne.appendChild(newDivOne)

//adding image to div to a project box
let newDivTwo = document.createElement('div');
newDivTwo.classList.add('project-guess')
let newImgTwo = document.createElement('img');
//newImgTwo.id = 'wordGuess'
newImgTwo.src = "assets/images/guardians.png"
newImgTwo.alt = 'Guardians of the Galaxy Word Guess Game'
newDivTwo.appendChild(newImgTwo)
let guessProj = document.getElementById('guess-proj')
guessProj.appendChild(newDivTwo)

//adding image to div to a project box
let newDivThree = document.createElement('div');
newDivThree.classList.add('project-gif')
let newImgThree = document.createElement('img');
//newImgThree.id = 'giftastic'
newImgThree.src = "assets/images/gotgiftastic.png"
newImgThree.alt = 'Game of Thrones GifTastic'
newDivThree.appendChild(newImgThree)
let gifProj = document.getElementById('gif-proj')
gifProj.appendChild(newDivThree)

//adding image to div to a project box
let newDivFour = document.createElement('div');
newDivFour.classList.add('project-trivia')
let newImgFour = document.createElement('img');
//newImgFour.id = 'giftastic'
newImgFour.src = "assets/images/triviajpeg.jpg"
newImgFour.alt = 'Fruits and Vegetable Trivia'
newDivFour.appendChild(newImgFour)
let triviaProj = document.getElementById('trivia-proj')
triviaProj.appendChild(newDivFour)

