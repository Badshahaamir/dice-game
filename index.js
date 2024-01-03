let ran1=Math.floor(Math.random()*6)+1;
 let randiceimage1="images/dice" +ran1 + ".png";
 document.querySelectorAll("img")[0].setAttribute("src" , randiceimage1);

 let ran2=Math.floor(Math.random()*6)+1;
 let randiceimage2="images/dice" + ran2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src" , randiceimage2);

 if(ran1>ran2)
 {
    document.querySelector("h1").innerHTML="Player 1 wins."
 }
 else if(ran2>ran1)
 {
    document.querySelector("h1").innerHTML="Player 2 wins."
 }
 else
 {
    document.querySelector("h1").innerHTML="Its a Draw."
 }