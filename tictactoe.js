//========VARIABLES=============
//==========BUTTONS=============
//Creates a variable for every button, which is used both in function didIWin() under the section WINNER-FUNCTION
//and in the anonymous restart function under RESET-FUNCTION.
let a1 = $("#A1");
let a2 = $("#A2");
let a3 = $("#A3");
let b1 = $("#B1");
let b2 = $("#B2");
let b3 = $("#B3");
let c1 = $("#C1");
let c2 = $("#C2");
let c3 = $("#C3");
let h2 = $("#result");
let ko = $("#KO");
let hb1 = $("#healthbar1"); //The left healthbar, representing Player O.
hb1.attr("style", "background-color: green");
let hb2 = $("#healthbar2"); //The right healthbar, representing Player X.
hb2.attr("style", "background-color: green");
let winCount1 = 0; //Counts the wins for Player O.
let winCount2 = 0; //Counts the wins for Player X.

//======================SEPERATE VARIABLES============================
let amount = 0; //Counts the amounts of clicks that's been performed since the start (or restart) and is counted in playerTurn() and checked for in didIWin().
let cross = 'X'; //Symbol for player X.
let circle = 'O'; //Symbol for player O.
let winner = "false"; //Controls whether someone has won. Becomes true when the right IFs are met in didIWin().
let player = 2; //Controls who's turn it is. Primarily used in function playerTurn() and didIWin().
let symbol; //Defines the players symbol.
let control = document.querySelectorAll(".playButton"); //Creates a variable for all of the buttons in the html with the class 'playButton'
let clicked; //is created to be used in the function playerTurn under section CLICK-FUNCTION. It will be used for e.target, meaning the button that is being clicked on.
let roundCount = 1; //Counts the amount of rounds and is used for the anonymous function used for the restart-button. 
//roundCount is primarily for fun and not a nessecary variable if you don't want to keep track of how often the player restarts.


//=============CREATE A CLICK ON EACH BUTTON===========================
//This function loops through the buttons and adds an EventListener to them, which reacts on clicking and calls on the function playerTurn
//which is created in the next section below, under CLICK-FUNCTION

    for (let i = 0; i < control.length; i++) {
        control[i].addEventListener("click", playerTurn);
  }


//=================================CLICK-FUNCTION======================================================
//Creates all the needed information for a players turn to happen. 
//It sets the value in the button through clicked.value and changes the variable player between 1 and 2, in each IF,
// making sure that the next round is the other players.
//The function also checks the winner variable, which can become true through the call on didIWin().

function playerTurn(e) {

    if(winner !== "true") {
        clicked = e.target;
        if(clicked.value !=="O" && clicked.value !=="X") {

            if (player===2) {
            clicked.value = circle;
            symbol = circle;
            player = 1;
            amount++;
            }

            else if (player===1) {
                clicked.value = cross;
                symbol = cross;
                player = 2;
                amount++;
            }
        }
        winner = didIWin()
    }
}


//=================================WINNER-FUNCTION======================================================
// IF LEVEL ONE: Checks active player.
// IF LEVEL TWO: Checks for winner-possibilities in the first 8 cases, 9th case checks for six clicks for
//encouragement-change in h2, 10th case checks for nine clicks, meaning a draw has been reached.
//IF LEVEL THREE: Checks if winner reached three-in-a-row with minimum amounts of moves, causing a different change in h2.
//Level three IFs and the 9th case of Level two are purely for humor and cosmetics and can be removed without any significant impact.
//The .val() is used to check the value of the variable

function didIWin(){

    if(symbol === "O" || symbol === "X"){

        if (symbol === a3.val() && a3.val() === a2.val() && a2.val() === a1.val()) {
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");

                //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }
                                //================EXTRA FUN: HEALTHBAR==================
                                if (symbol === "O") {
                                    winCount1++;
                                } else if (symbol === "X") {
                                    winCount2++;
                                }

                                if (winCount1===5) {
                                    hb2.attr("style", "background-color: red");
                                    h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                    ko.text("FATALITY");
                                }else if (winCount2===5) {
                                    hb1.attr("style", "background-color: red");
                                    h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                    ko.text("FATALITY");
                                }
                                //======================================================
                                    
            return("true");
        }

        else if (symbol === b3.val() && b3.val() ===  b2.val() && b2.val() === b1.val()) {
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");

                            
                                //================EXTRA FUN: HEALTHBAR==================
                                if (symbol === "O") {
                                    winCount1++;
                                } else if (symbol === "X") {
                                    winCount2++;
                                }

                                if (winCount1===5) {
                                    hb2.attr("style", "background-color: red");
                                    h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                    ko.text("FATALITY");
                                }else if (winCount2===5) {
                                    hb1.attr("style", "background-color: red");
                                    h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                    ko.text("FATALITY");
                                }
                                //======================================================

             //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }

            return("true");
        }

        else if (symbol === c3.val() && c3.val() === c2.val() && c2.val() === c1.val()) {
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");

            //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }

                                //================EXTRA FUN: HEALTHBAR==================
                                if (symbol === "O") {
                                    winCount1++;
                                } else if (symbol === "X") {
                                    winCount2++;
                                }

                                if (winCount1===5) {
                                    hb2.attr("style", "background-color: red");
                                    h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                    ko.text("FATALITY");
                                }else if (winCount2===5) {
                                    hb1.attr("style", "background-color: red");
                                    h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                    ko.text("FATALITY");
                                }
                                //======================================================

            return("true");
        }
        else if (symbol === a1.val() && a1.val() === b1.val() && c1.val() === b1.val()) {
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");


                            //================EXTRA FUN: HEALTHBAR==================
                            if (symbol === "O") {
                                winCount1++;
                            } else if (symbol === "X") {
                                winCount2++;
                            }

                            if (winCount1===5) {
                                hb2.attr("style", "background-color: red");
                                h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                ko.text("FATALITY");
                            }else if (winCount2===5) {
                                hb1.attr("style", "background-color: red");
                                h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                ko.text("FATALITY");
                            }
                            //======================================================

                 //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }

            return("true");
        }
        else if (symbol === a2.val() && a2.val() === b2.val() && b2.val() === c2.val()) {
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");

                            //================EXTRA FUN: HEALTHBAR==================
                            if (symbol === "O") {
                                winCount1++;
                            } else if (symbol === "X") {
                                winCount2++;
                            }

                            if (winCount1===5) {
                                hb2.attr("style", "background-color: red");
                                h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                ko.text("FATALITY");
                            }else if (winCount2===5) {
                                hb1.attr("style", "background-color: red");
                                h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                ko.text("FATALITY");
                            }
                            //======================================================

             //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }

            return("true");
        }
        else if (symbol === a3.val() && b3.val() === a3.val() && c3.val() === b3.val()) {
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");

                            //================EXTRA FUN: HEALTHBAR==================
                            if (symbol === "O") {
                                winCount1++;
                            } else if (symbol === "X") {
                                winCount2++;
                            }

                            if (winCount1===5) {
                                hb2.attr("style", "background-color: red");
                                h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                ko.text("FATALITY");
                            }else if (winCount2===5) {
                                hb1.attr("style", "background-color: red");
                                h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                ko.text("FATALITY");
                            }
                            //======================================================

                 //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }

            return("true");
        }
        else if (symbol === a1.val() && b2.val() === a1.val() && c3.val() === b2.val()){
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");

                            //================EXTRA FUN: HEALTHBAR==================
                            if (symbol === "O") {
                                winCount1++;
                            } else if (symbol === "X") {
                                winCount2++;
                            }

                            if (winCount1===5) {
                                hb2.attr("style", "background-color: red");
                                h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                ko.text("FATALITY");
                            }else if (winCount2===5) {
                                hb1.attr("style", "background-color: red");
                                h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                ko.text("FATALITY");
                            }
                            //======================================================

                 //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }



            return("true");
        }
        else if (symbol === a3.val() && b2.val() === a3.val() && c1.val() === b2.val()) {
            h2.text("Congratulations! A winnar is you, Player " + symbol + "!");
            ko.text("K.O.");

                            //================EXTRA FUN: HEALTHBAR==================
                            if (symbol === "O") {
                                winCount1++;
                            } else if (symbol === "X") {
                                winCount2++;
                            }

                            if (winCount1===5) {
                                hb2.attr("style", "background-color: red");
                                h2.text("Player X is dead. Hail the Ultimate Hobo, Player O!");
                                ko.text("FATALITY");
                            }else if (winCount2===5) {
                                hb1.attr("style", "background-color: red");
                                h2.text("Player O is dead. Hail the Ultimate Hobo, Player X!");
                                ko.text("FATALITY");
                            }
                            //======================================================

                 //======================FLAWLESS VICTORY===========================
                if (amount === 5 || amount === 6) {
                    h2.text("FLAWLESS VICTORY. YOU WIN, PLAYER " + symbol + "!");
                    ko.text("K.O.");
                }

            return("true");
        }

        //======================FINISH THEM===========================
        else if (amount === 6) {
            h2.text("FINISH THEM!");;
        }
        //======================TIE===========================
        else if (amount === 9) {
            h2.text("No one won. You aren't even fit to be a hobo.");;
        }
    }
}



//=================================RESET-FUNCTION======================================================
//An anonymous function that is used on the button Restart. It sets the value of every button to empty, adds to the roundCount-variable,
//and resets the other variables to the starting values, as seen in the section VARIABLES.
//It also changes the h2-tag to a dry humor comment about playing another round of Hobo Chess.
$("#restart").click(function() {
    a1.val("");
    a2.val("");
    a3.val("");
    b1.val("");
    b2.val("");
    b3.val("");
    c1.val("");
    c2.val("");
    c3.val("")
    amount = 0;
    winner ="false";
    player=2;
    roundCount++;
    h2.text("Again? Oh fine. Round "+ roundCount + ". FIGHT!");
    ko.text("");
    diePlayer();
    if (winCount1 === 5 || winCount2 ==5) { //Resets winCount, healthbar1 and healthbar2
        winCount1 = 0;
        winCount2 = 0;
        hb1.attr("style", "background-color: green");
        hb2.attr("style", "background-color: green");
    }
});


//======================HEALTHBAR FUNCTION===============================
//Works like a temporary scoreboard, up to 5 points per player, equaling a maximum of 10 rounds, and a minimum of 5 rounds before reseting.
//It is reset when pressing the Restart while the variables winCount1 or winCount2 has reached a value of 5.
function diePlayer (){
if (winCount1 === 1) {
   
    hb2.attr("style", "background-image: linear-gradient(to left, green 80%, red 20%");
    
} else if (winCount1 === 2) {

    hb2.attr("style", "background-image: linear-gradient(to left, green 60%, red 40%");

}else if (winCount1 === 3) {

    hb2.attr("style", "background-image: linear-gradient(to right, red 60%, green 40%");

}else if (winCount1 === 4) {

    hb2.attr("style", "background-image: linear-gradient(to right, red 80%, green 20%");

}

if (winCount2 === 1) {
   
    hb1.attr("style", "background-image: linear-gradient(to right, green 80%, red 20%");
    
} else if (winCount2 === 2) {

    hb1.attr("style", "background-image: linear-gradient(to right, green 60%, red 40%");

}else if (winCount2 === 3) {

    hb1.attr("style", "background-image: linear-gradient(to left, red 60%, green 40%");

}else if (winCount2 === 4) {

    hb1.attr("style", "background-image: linear-gradient(to left, red 80%, green 20%");

}
}

