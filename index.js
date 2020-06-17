let drumBtn = document.querySelectorAll('button.drum');

for (let i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', function () {
        console.log(this.innerHTML);
        //var tom1 = new Audio("sounds/tom-1.mp3");
        //tom1.play();
        let btnClicked = this.innerHTML;
        makeSound(btnClicked);

        buttonAnimation(btnClicked);

    });
}


document.addEventListener('keypress', function (event) {
    let btnClicked = event.key;
    makeSound(btnClicked);

    buttonAnimation(btnClicked);

})


function makeSound(key) {

    switch (key) { //this or drumBtn[i]
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            // console.log(drumBtn.innerHTML + this.innerHTML); //!drumBtn.innerHTML returns undefined as you are looking for the innerHTML for the whole array/node
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default: console.log(key);
            break;
    }
}


function buttonAnimation(key) {

    var activeButton =  document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");

    }, 100);

}




































/*
document.addEventListener('keypress', function (event) {

    // charCode 119 97 115 100 106 107 108
    switch (event.charCode) { //this or drumBtn[i]
        case 119:
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 97:
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 115:
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 100:
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 106:
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 107:
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 108:
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default: console.log(event);
            break;
    }

})*/






































































/*let soundButtons = document.querySelectorAll('buttons.drum');


for (let i = 0; i < soundButtons.length; i++) {
    soundButtons[i].addEventListener('click', function () {
        buttonClicked.style.color = "black";
    })
}*/

// var drumButtons = document.querySelectorAll("button.drum");

// for (let i = 0; i < drumButtons.length; i++) {
//     drumButtons[i].addEventListener('keypress', function () {
//         console.log("button clicked"+i);
//         this.style.color = "black";
//     })
// }

        // var buttonClicked = this.innerHTML;

        // switch (buttonClicked) {
        //     case 'w':
        //         var tom1 = new Audio("sounds/tom-1.mp3");
        //         tom1.play();
        //         break;
        //     case 'a':
        //         var tom2 = new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //         break;
        //     case 's':
        //         var tom3 = new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //         break;
        //     case 'd':
        //         var tom4 = new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //         break;
        //     case 'j':
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();
        //         break;
        //     case 'k':
        //         var crash = new Audio("sounds/crash.mp3");
        //         crash.play();
        //         break;
        //     case 'l':
        //         var kick = new Audio("sounds/kick.mp3");
        //         kick.play();
        //         break;
        //     default: console.log(buttonClicked);
        //         break;
        // }