
/* Prime */ 

function isPrime(n){
    if(n<2)
    return`${n} is not a prime`

    for(let i=2; i<n; i++){
        if(n%i===0){
            return`${n} is nott a prime number`
        }
    }
    return `${n} is a prime number`
}
console.log(isPrime(6));

    /*Factorial*/

    let chyslo =4;
    let factorial=1;

    if(chyslo<0){
        console.log("Cant find factorial roe negative numbers");
    }
    else{
        for(let num =2; num <=chyslo; num++){
            factorial = factorial*num;
        } console.log(`${chyslo}!= ${factorial}`)
       
    }

    /*Fibonacci*/

    var i;
    var fib = [0, 3]; 

    for (i = 2; i <= 10; i++) {
  
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
   }
    /*Reverse*/
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.reverse();
   console.log(`${fruits} = reverse array`)
    

