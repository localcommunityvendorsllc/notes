//set initial count
let count = 0;

// Select Value and Buttons, #value is looking for the id value from my span in the html doc
const value = document.querySelector('#value');
//btns is storing all 3 btn classes together from the html page, classes labled like .btn for document queryselector or 1 or queryselectoAll for many
const btns = document.querySelectorAll(".btn");

//open dev inspect tools and open console.
// you will see it's a node list that would need to be transfored into an array.
//console.log(btns);

//(btn) can be named anything here since it's a parameter we created
//For Each() method is called on our btns created up there calling all btn calls like .btn
//Creating a callback function to access each and every item within my list all the buttons we plan to loop through
btns.forEach(function (btn) {
    //passing the callback function to knew which button was clicked
    btn.addEventListener('click' , function(e){
        //the e is us accessing the event object has a property of current target being clicked from the call back function
        //Figure out how .classList effect the currentTarget
        const styles = e.currentTarget.classList;
        //styles holds the value being checked for eah btn class of 'decrease, reset, or increase')
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        //Using the const #value placeholder
        value.textContent = count;
    })
});