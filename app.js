//Represents all of the colors is the name of this array of values it will cycle through the array of colors 
const colors = ["blue" , "red" , "yellow" , "green" , "rgba(133, 122, 200)", "#f15025"];

const bin = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click' , function(){
    // Get random number between 0 - 5 colors [5]
    //Assigning name of action to funtion name.
    const randomNumber = getRandomNumber();
    //console output helps when using "Dev Inspect Tools"
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//Creating a function that gets me random numbers that activates the Math method calling random.
//Math calling floor method (rounds a number DOWN to the nearest integer) to contain the random number times the length of the array helped form soild number (fixed values) without decimals 
function getRandomNumber() {
    return Math.floor( Math.random() * colors.length);
}