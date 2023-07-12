var y = Math.floor(Math.random() * 10 + 1);

var x = document.getElementById("guessField").ariaValueMax;

if(x == y)
{
    alert("CONGATULATIONS!!!"+playername+" YOU GUSSED THE RIGHT IN " + guess + "GUSSED");
    gusse = 1;
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}

function playAgain()
{
    y = Math.floor(Math.ramdom() * 10 + 1);
}
// count of attempts
// until hit
  
// function for the number sent by the user