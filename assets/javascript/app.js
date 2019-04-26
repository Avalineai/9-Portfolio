
//adding image to div to a project box
var newDivOne = document.createElement('div');
newDivOne.classList.add('project-one')
var newImgOne = document.createElement('img');
newImgOne.id = 'projctOne'
newImgOne.src = "assets/images/project-one.png"
//append newImgOne to newDivOne
newDivOne.appendChild(newImgOne)
//append newDivOne to #proj-box (test)
var gifProj = document.getElementById('one-proj')
gifProj.appendChild(newDivOne)

//adding image to div to a project box
var newDivTwo = document.createElement('div');
newDivTwo.classList.add('project-guess')
var newImgTwo = document.createElement('img');
newImgTwo.id = 'wordGuess'
newImgTwo.src = "assets/images/guardians.png"
//append newImgTwo to newDivTwo
newDivTwo.appendChild(newImgTwo)
//append newDivTwo to #proj-box (test)
var gifProj = document.getElementById('guess-proj')
gifProj.appendChild(newDivTwo)

//adding image to div to a project box
var newDivThree = document.createElement('div');
newDivThree.classList.add('project-gif')
var newImgThree = document.createElement('img');
newImgThree.id = 'giftastic'
newImgThree.src = "assets/images/giftastic.png"
//append newImgThree to newDivThree
newDivThree.appendChild(newImgThree)
//append newDivThree to #proj-box (test)
var gifProj = document.getElementById('gif-proj')
gifProj.appendChild(newDivThree)

//adding image to div to a project box
var newDivFour = document.createElement('div');
newDivFour.classList.add('project-trivia')
var newImgFour = document.createElement('img');
newImgFour.id = 'giftastic'
newImgFour.src = "assets/images/triviajpeg.jpg"
//append newImgFour to newDivFour
newDivFour.appendChild(newImgFour)
//append newDivFour to #proj-box (test)
var gifProj = document.getElementById('trivia-proj')
gifProj.appendChild(newDivFour)