
let buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var hasGameStarted = false

$(document).on('keypress',function(){
    if(!hasGameStarted){
        $('h1').html(`Level ${level}`)
        nextSequence()
        hasGameStarted = true
    }
})

$(`.btn`).on('click',function(event){
    userClickedPattern.push(event.target.id)
    console.log(userClickedPattern)
    animatePress(event.target.id)
    playSound(event.target.id)
    checkAnswer(userClickedPattern.length-1)
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log(`success`)
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
    }else{
        $(`body`).addClass(`game-over`);
        setTimeout(() => {
            $(`body`).removeClass(`game-over`)
        }, 200);
        console.log("err")
        var errorSound = new Audio(`./sounds/wrong.mp3`)
        errorSound.play()
        $(`h1`).html(`Game Over, Press Any Key to Restart`)
        startOver()
    }
}

function nextSequence (){

    userClickedPattern = []
    level++
    $(`h1`).html(`level ${level}`)

    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    animatePress(randomChosenColor)
    playSound(randomChosenColor)
    
    console.log(level)
}

function playSound(name){
    let sound = new Audio(`./sounds/${name}.mp3`)
    sound.play()
}

function animatePress(color){
    $(`#${color}`).addClass('pressed')
    setTimeout(() => {
        $(`#${color}`).removeClass('pressed')
    }, 100);
}

function startOver(){
    hasGameStarted = false 
    gamePattern = []
    level = 0
}













