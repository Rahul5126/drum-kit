// 1st Method to play audio by pressing button on website or pressing keyboard buttons
for (let i=0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
});

}  

document.addEventListener('keypress', (event) => {
    makeSound(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/5.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/6.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/7.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

// let audio = new Audio("sounds/tom-1.mp3");  // Created a new Audio object
// audio.play();   // Called the method on our new audio object.



/* 2nd Method to play music by pressing button on website 
const music = new Audio('sounds/1.mp3');

let index = 0;

Array.from(document.getElementsByClassName('drum')).forEach((e) => {
	e.addEventListener('click', (el) => {
	index = el.target.id;

	music.src = `sounds/${index}.mp3`;
    music.play();
    })

})
        */
