const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025 numbers follow as the letter continue the number order 10, 11, 12, 13, 14, 15

//Find the button and color object within the document requesting elements and call the documents' get the element by ID 'short hand'
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//Adding the event listener will be listening for any event of the user clicking on the btn object.
btn.addEventListener('click', function(){
    //set the loops' placeholder name hexColor to hold the # since every hex starts with one for this loop that goes through 6 times from my loops to get a random hex color value from my array
let hexColor = '#'
//Start the for loop i for where to start; run the loop until i is less than 6 time (running from 0 to 5 within the array); while adding on one number at a time(++) until there is 6 chars
for(let i = 0; i<6; i++){
    // WRONG WAY HARD CODED: the placeholder with each loop will add a value from the array above starting at 0 (first place of any array) to get 6 charaters to form a Hex Code (+= carrys a array of strings) hexColor += hex[12] gives you #CCCCCC
    //hexColor += hex[12]
    // += is very important since it add on to the string after the # of hexColor placeholder until it maxs out of 6 chars to create any random hex code
    //CORRECT WAY: is to create a getRandomNumber function name that contains the helper math libraries returning a math object calling random *(times)* Hex Array Object calling on it's max length, rounded down afterwards
    hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});
//Located outsided of the Button's event listener but called within the for loopwithin the button
function getRandomNumber() {
    //Math.floor(Rounds down so it does not go over my max of the multiplied outcome of Math.random() by the length of our array until the last element)
    //Hex is an array object calling on the max length of the array' property 
    return Math.floor(Math.random() * hex.length);
}