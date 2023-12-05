/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/

for(let i = 1; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz", i, i % 3, i % 5);
        document.getElementById('lista').innerHTML += "FizzBuzz" + " ";
    }
    else if (i % 3 == 0 ){
        console.log("Fizz", i, i % 3, i % 5);
        document.getElementById('lista').innerHTML += "Fizz" + " ";

    }
    else if(i % 5 == 0){
        console.log("Buzz", i, i % 3, i % 5);
        document.getElementById('lista').innerHTML += "Buzz" + " ";

    }
    else{
        console.log(i, i % 3, i % 5)//test OK
        document.getElementById('lista').innerHTML += i + " ";

    } 
}

// document.getElementById('lista').innerHTML += i + 1 + "\n";
