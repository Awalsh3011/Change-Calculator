// have two functions//
//first, process coins, takes the number user inputs and if its greather than zero it goes on calculate change//
//if not, it displays a message//
function processcoins() {
    let cents = document.getElementById("cents").value;    
    if (cents >0){
        makeChange(cents);
    }
    else{
        alert("Value must be greater than zero");
        }
    }
// the function make change takes the amount and calculates the coins //
//it takes the input, divides it .eg 1000 cents for the 10 euro, stores that number 
//and the remainder is passed on for the next one//
function makeChange (cents) {
    let euroamount = cents/100;
    let teneuro = Math.floor(cents / 1000);  //10 euros
        cents = cents % 1000;
    let fiveeuro = Math.floor(cents / 500);     //5 euros
        cents = cents % 500;
    let twoeuro = Math.floor(cents / 200);    //2 euros
        cents = cents % 200;
    let oneeuro = Math.floor(cents / 100);    //1 euros
       cents= cents % 100
    let fiftycent = Math.floor(cents/ 50);   //50 cents
       cents = cents % 50
    let twentycent = Math.floor(cents/ 20);    //20 cents
       cents= cents % 20
    let tencent = Math.floor( cents/ 10);    //10 cents
       cents = cents % 10
    let fivecent = Math.floor( cents/ 5);    //5 cents
        cents = cents % 5
    let twocent = Math.floor( cents/2);     //2 cents
        cents = cents % 2
    let onecent = Math.floor(cents/1);     //1 cents
    
    alert( " The change for €" + euroamount + " is:  " +
    teneuro +" x Ten euro notes, "+  fiveeuro + " x Five euro notes, " + twoeuro + " x Two euro coin, " + oneeuro +  
    " x One euro coin, " + fiftycent + " x Fifty cent coin, " + twentycent + " x Twenty cent coin, "+ tencent + 
    " x Ten cent coin, " + fivecent + " x Five cent coin, " + twocent + " x Two cent coin, " + onecent + 
    " x One Cent coin ")

// then display each number in the boxes
document.getElementById("teneuro").value = teneuro;
document.getElementById("fiveeuro").value = fiveeuro;
document.getElementById("twoeuro").value = twoeuro;
document.getElementById("oneeuro").value = oneeuro;
document.getElementById("fiftycent").value= fiftycent
document.getElementById("twentycent").value= twentycent
document.getElementById("tencent").value= tencent
document.getElementById("fivecent").value= fivecent
document.getElementById("twocent").value= twocent
document.getElementById("onecent").value= onecent
}

