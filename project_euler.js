let buttons = document.getElementsByClassName('answer-button')
let answerContainers = document.getElementsByClassName("answer-container")
//console.log(answerContainers[0].style.visibility)



////////////////////////////////////////////
//               Problem 1:               //
//          Multiples of 3 and 5          //
////////////////////////////////////////////

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

///////////////////////////////////////////////////////////////////////////////////

function problem1(){
    let numbersArr = []
    for (let i = 0; i < 1000; i++){
        
        if(i % 5 === 0) {
            numbersArr.push(i)
        } else if (i % 3 === 0){
            numbersArr.push(i)
        }
    }

    let result = numbersArr.reduce((total, number) =>{
        return total + number
    })
    console.log(result)


        //  JS for HTML Interaction
    let answerContainer = document.getElementById("answer-container-1");
    answerContainer.innerHTML = result

    if(answerContainer.className === 'answer-container'){
        answerContainer.className = 'answer-container-showing'
        document.getElementById('answer-button-1').innerHTML = 'Hide Answer'
    } else if(answerContainer.className === 'answer-container-showing'){
        answerContainer.className = 'answer-container'
        document.getElementById('answer-button-1').innerHTML = 'Show Answer'
    }
}
// problem1()

document.getElementById('answer-button-1').addEventListener('click', problem1)




////////////////////////////////////////////
//              Problem 2:                //
//        Even Fibonacci numbers          // 
////////////////////////////////////////////

//  Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

//////////////////////////////////////////////////////////////////////////////

function problem2(){
    let fibArr = [1, 2]
    let result = 0

    while(fibArr[fibArr.length - 1] < 4000000){
        let lastNumber = fibArr[fibArr.length - 1]
        let secondToLastNumber = fibArr[fibArr.length - 2]
        let nextNumber = lastNumber + secondToLastNumber
        fibArr.push(nextNumber)
            if(nextNumber % 2 === 0 ){
                result += nextNumber
            } 
    }
        console.log(result)


        //  JS for HTML Interaction
    let answerContainer = document.getElementById("answer-container-2");
    answerContainer.innerHTML = result

    if(answerContainer.className === 'answer-container'){
        answerContainer.className = 'answer-container-showing'
        document.getElementById('answer-button-2').innerHTML = 'Hide Answer'
    } else if(answerContainer.className === 'answer-container-showing'){
        answerContainer.className = 'answer-container'
        document.getElementById('answer-button-2').innerHTML = 'Show Answer'
    }
}
// problem2()

document.getElementById('answer-button-2').addEventListener('click', problem2)




////////////////////////////////////////////
//              Problem 3:                //
//         Largest prime factor           // 
////////////////////////////////////////////

//  The prime factors of 13195 are 5, 7, 13 and 29.

//  What is the largest prime factor of the number 600851475143 ?

function problem3(){
    let num = 600851475143
    let primeFactors = [];

    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    let sqrtNum = Math.sqrt(num);

    for (let i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    let largestFactor = primeFactors.pop()

    console.log(largestFactor)

        
        //  JS for HTML Interaction
    let answerContainer = document.getElementById("answer-container-3");
    answerContainer.innerHTML = largestFactor

    if(answerContainer.className === 'answer-container'){
        answerContainer.className = 'answer-container-showing'
        document.getElementById('answer-button-3').innerHTML = 'Hide Answer'
    } else if(answerContainer.className === 'answer-container-showing'){
        answerContainer.className = 'answer-container'
        document.getElementById('answer-button-3').innerHTML = 'Show Answer'
    }
}
// problem3()

document.getElementById('answer-button-3').addEventListener('click', problem3)







////////////////////////////////////////////
//              Problem 4:                //
//     Largest palindrome product         // 
////////////////////////////////////////////

//  A palindromic number reads the same both ways. 
//  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//  Find the largest palindrome made from the product of two 3-digit numbers.

function problem4(){
    let largestProduct = {
        num1 : 0,
        num2 : 0,
        product: 0
    }

    for(let i = 999; i > 99; i--){
        for(let j = 999; j > 99; j--){
            let product = i * j
            let productString = product.toString()
            let reversedProduct = product.toString().split("").reverse().join("")
            if(productString === reversedProduct && product > largestProduct.product){
                largestProduct = {
                    num1: i,
                    num2: j,
                    product: product
                }
            }
        }
    }
    // console.log(largestProduct.product)
    answerContainers[3].innerHTML = largestProduct.product
}

problem4()





////////////////////////////////////////////
//              Problem 5:                //
//          Smallest multiple             // 
////////////////////////////////////////////

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function problem5(){
    let numberFound = false
    let increment = 20;
    while(!numberFound){
        increment +=20
        if (increment % 19 === 0 && increment % 18 === 0 && increment % 17 === 0 && increment % 16 === 0 && increment % 15 === 0 &&     increment % 14 === 0 && increment % 13 === 0 && increment % 12 === 0  && increment % 11 === 0 ){
            // console.log(increment)
            numberFound = true
            answerContainers[4].innerHTML = increment
        }
    }
}

problem5()





////////////////////////////////////////////
//              Problem 6:                //
//        Sum square difference           // 
////////////////////////////////////////////

// The sum of the squares of the first ten natural numbers is:
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is:
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function problem6(){
    let sumOfSquares = 0
    let sums = 0

    for(let i = 1; i < 101; i++){
        sumOfSquares += i*i
        sums += i
    }

    let squareOfSums = sums * sums
    let result = squareOfSums - sumOfSquares
    // console.log(result)
    answerContainers[5].innerHTML = result
}

problem6()






////////////////////////////////////////////
//              Problem 7:                //
//            10001st prime               // 
////////////////////////////////////////////

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?

function problem7(){
    let primeNumbersArray = []

    let num = 2
    while(primeNumbersArray.length < 10000){
        num++
        let checkingNumber = true
        let increment = 2
        while(checkingNumber){
            if (num === increment){
                // number is prime
                primeNumbersArray.push(num)
                checkingNumber = false
            } else if (num % increment === 0){
                // number is not prime and break the checks
                checkingNumber = false
            }
            increment++
        }
    }

    let result = primeNumbersArray.pop()
    // console.log(result)
    answerContainers[6].innerHTML = result
}

problem7()