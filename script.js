
let numContainer = document.getElementById("container");

printNum();
numContainer.addEventListener("mouseover",  mouseover);

function printNum(){
    for (let num=0;num<=100;num++){
        let box = document.createElement("div");
        numContainer.appendChild(box);
        box.style.width="5vw";
        // box.style.backgroundColor="red";
        box.innerText=num;

        if(num%2 == 0){
        box.style.backgroundColor="green";
        box.style.width="5vw";

        } else if(num%2 !== 0) {
            box.style.backgroundColor="yellow";
        }
                     
        if ( isPrime(num)){   
           box.style.backgroundColor="red";
        }
        }     
        
        


}


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function mouseover(event) { 
    const number = parseInt(event.target.textContent);
    let info = ''; 
    if (number % 2 === 0) { 
    info = 'Even ';
    } else { 
    info = 'Odd ';}  
    if (isPrime(number)) {
     info = 'Prime';} 
    event.target.setAttribute('title', info); }








