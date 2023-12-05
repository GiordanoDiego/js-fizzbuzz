/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/



const myButton = document.getElementById('myButton');
const myDiv = document.getElementById("box_container");

myButton.addEventListener('click', function(){
    for(let i = 1; i <= 100; i++){

        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz", i, i % 3, i % 5);
           //  document.getElementById('lista').innerHTML += "FizzBuzz" + " ";
   
           const myDivItem = document.createElement("div");
           myDivItem.classList.add("myBox" , "bg-danger");
           myDivItem.append("FizzBuzz");
           myDiv.append(myDivItem);
        }
        else if (i % 3 == 0 ){
            console.log("Fizz", i, i % 3, i % 5);
           //  document.getElementById('lista').innerHTML += "Fizz" + " ";
   
           const myDivItem = document.createElement("div");
           myDivItem.classList.add("myBox" , "bg-info");
           myDivItem.append("Fizz");
           myDiv.append(myDivItem);
        }
        else if(i % 5 == 0){
            console.log("Buzz", i, i % 3, i % 5);
           //  document.getElementById('lista').innerHTML += "Buzz" + " ";
   
           const myDivItem = document.createElement("div");
           myDivItem.classList.add("myBox" , "bg-success");
           myDivItem.append("Buzz");
           myDiv.append(myDivItem);
        }
        else{
            console.log(i, i % 3, i % 5)//test OK
           //  document.getElementById('lista').innerHTML += i + " ";
            
            const myDivItem = document.createElement("div");
            myDivItem.classList.add("myBox" , "bg-warning");
            myDivItem.append(i);
            myDiv.append(myDivItem);
   
        } 
    }
})
 
myButtonReset.addEventListener('click', function(){
    myDiv.innerHTML = "";
})


