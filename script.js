const playSquares = document.querySelectorAll(".playSquare");
let currentPlayer = true;
const playerName= document.querySelector(".playerName");
const startOver = document.querySelector(".doOver");


playSquares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.textContent !== "") {
            alert("This seats taken!")
            return;
        }
        if  (currentPlayer) {
            square.textContent = "X";
            console.log("x");
            currentPlayer= false;
            playerName.innerText = "O";
        } else {
            square.textContent = "O";
            console.log("O");
            currentPlayer= true;
            playerName.innerText = "X"
        }
    })
   
})

startOver.addEventListener("click", () => {
    square.textContent = " ";
})





/* Phase 1:
-set up html, css, javascript and link them
-create title and a div containing 9 nine divs in html
-apply 3 x3 grid to large div in css
-style 9 smaller divs as playsquares with color and margins
-use addeventlistener to make all the squares clickable
   x queryselector only selcts first box
   x queryselectorall doesnt work at all
   ~ trying foreach to add event listener~

~add an x or o text character when clicked based on turn
    research this
    guesses:
        

        i feel like this needs to be kept in an array so that it can be accessed for the next
        step of making the box not clickable
        
    make that square no longer clickable
        make a function so if the value of the square is not equal
        to zero than the function is returned

display whos turn it is
    -create a text element
    create a function that changes the text based on turn

  const playerName= document.querySelector(".playerName");
    
  function whoseTurn() {
    currentPlayer= currentPlayer === "X" ? "O" : "X";
    playerName.innerText = currentPlayer;
    }

have a reset or play it again button
    create button
    add text
    add eventlistener
    create function to clear or return to default? maybe?
*/
