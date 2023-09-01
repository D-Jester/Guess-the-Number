let number;
const checkGuess=()=>{
    let d=document.getElementById("guess")
    let n=d.value;
    n=Number.parseInt(n);
    console.log(d);
    let m="";
    if(n>number)
    {m="Number is greater."}
    else if(n<number)
    {m="Number is smaller."}
    else
    {m="Guess matched."}
    document.getElementById("message").textContent=m;
}

const inputRange=()=>{
    let range=document.getElementById("range").value;
    number=Math.round(Math.random()*range);
    let d=document.getElementsByClassName("guessNumber")[0];
    if(d.getElementsByClassName("part3")[0]==null)
    {
        const m=`<div class="mb-3 part3">
        <label for="guess" class="form-label" id="label"><u><b>Enter your guess:</b></u></label>
        <input type="number" class="form-control" id="guess" placeholder="0">
        <div class="center"><button type="button" class="btn btn-outline-secondary" onclick="checkGuess()">CHECK</button></div>
        <div><p id="message"></p></div>
        </div>`
        d.insertAdjacentHTML("beforeend",m);
        document.getElementById("guess").style.width="181px"
        document.getElementById("guess").style.background="#9ecfcf";    
        document.getElementsByClassName("part3")[0].style.left="44%";
        document.getElementsByClassName("part3")[0].style.top="95%";
        document.getElementsByClassName("part3")[0].style.position="absolute";
        document.getElementsByTagName("button").style.color="red";
        document.getElementById("message").style.textAlign="center"
        document.getElementById("message").style.borderStyle="double"
        document.getElementById("message").style.borderColor="brown"
        document.getElementById("message").style.position= "absolute";
        document.getElementById("message").style.left= "17%";
        document.getElementById("message").style.backgroundColor = "rgb(14, 79, 47)";
        document.getElementById("message").style. color="bisque";
    }
    else{d.getElementsByClassName("part3")[0].remove();}
}

const start=()=>{
    let d=document.getElementsByClassName("guessNumber")[0];
    if(d.getElementsByClassName("part2")[0]==null)
    {
        const m=`<div class="mb-3 part2">
        <label for="range" class="form-label" id="label"><u><b>Enter the upper range:</b></u></label>
        <input type="number" class="form-control" id="range" placeholder="0">
        <div class="center"><button type="button" class="btn btn-outline-secondary" onclick="inputRange()">Start Guessing</button></div>
        </div>`
        d.insertAdjacentHTML("beforeend",m);
        document.getElementById("range").style.width="181px";
        document.getElementById("range").style.background="#9ecfcf";
        document.getElementsByClassName("part2")[0].style.left="44%";
        document.getElementsByClassName("part2")[0].style.position="absolute";
        //document.getElementById("range").style.maxWidth="40%"
    }
    else
    {
        if(d.getElementsByClassName("part3")[0]!=null)
        {d.getElementsByClassName("part3")[0].remove();}
        d.getElementsByClassName("part2")[0].remove();
    }
}