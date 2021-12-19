
//Playing sound

$('.btn').on('click', function(event){
let sound = new Audio("./sounds/" + event.target.id + ".mp3")
sound.play()
})