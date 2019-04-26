
//adding image to div to a project box
let newDivOne = document.createElement('div');
newDivOne.classList.add('project-one')
let newImgOne = document.createElement('img');
newImgOne.id = 'projctOne'
newImgOne.src = "assets/images/project-one.png"
newDivOne.appendChild(newImgOne)
let projOne = document.getElementById('one-proj')
projOne.appendChild(newDivOne)

//adding image to div to a project box
let newDivTwo = document.createElement('div');
newDivTwo.classList.add('project-guess')
let newImgTwo = document.createElement('img');
newImgTwo.id = 'wordGuess'
newImgTwo.src = "assets/images/guardians.png"
newDivTwo.appendChild(newImgTwo)
let guessProj = document.getElementById('guess-proj')
guessProj.appendChild(newDivTwo)

//adding image to div to a project box
let newDivThree = document.createElement('div');
newDivThree.classList.add('project-gif')
let newImgThree = document.createElement('img');
newImgThree.id = 'giftastic'
newImgThree.src = "assets/images/giftastic.png"
newDivThree.appendChild(newImgThree)
let gifProj = document.getElementById('gif-proj')
gifProj.appendChild(newDivThree)

//adding image to div to a project box
let newDivFour = document.createElement('div');
newDivFour.classList.add('project-trivia')
let newImgFour = document.createElement('img');
newImgFour.id = 'giftastic'
newImgFour.src = "assets/images/triviajpeg.jpg"
newDivFour.appendChild(newImgFour)
let triviaProj = document.getElementById('trivia-proj')
triviaProj.appendChild(newDivFour)
