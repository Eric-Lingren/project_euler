////////////////////////////////////////////
//               Problem 1                //
//          Multiples of 3 and 5          //
////////////////////////////////////////////

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

///////////////////////////////////////////////////////////////////////////////////

// function problem1(){
//     let numbersArr = []
//     for (let i = 0; i < 1000; i++){
        
//         if(i % 5 === 0) {
//             numbersArr.push(i)
//         } else if (i % 3 === 0){
//             numbersArr.push(i)
//         }
//     }

//     let result = numbersArr.reduce((total, number) =>{
//         return total + number
//     })
//     console.log(result)
// }

// problem1()






////////////////////////////////////////////
//              Problem 2                 //
//        Even Fibonacci numbers          // 
////////////////////////////////////////////

//  Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms   will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

//////////////////////////////////////////////////////////////////////////////

function problem2(){
    let fibArr = [1, 2]
    let total = 0

    while(fibArr[fibArr.length - 1] < 4000000){
        let lastNumber = fibArr[fibArr.length - 1]
        let secondToLastNumber = fibArr[fibArr.length - 2]
        let nextNumber = lastNumber + secondToLastNumber
        fibArr.push(nextNumber)
            if(nextNumber % 2 === 0 ){
                total += nextNumber
            } 
    }
    //console.log(total)
}

problem2()





////////////////////////////////////////////
//              Problem 3                 //
//         Largest prime factor           // 
////////////////////////////////////////////

//  The prime factors of 13195 are 5, 7, 13 and 29.

//  What is the largest prime factor of the number 600851475143 ?

function problem3(num){
    let primeFactors = [];

    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    console.log(num)
    let sqrtNum = Math.sqrt(num);
    console.log(sqrtNum)

    for (let i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
            console.log('new num is ' + num)
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    console.log(primeFactors)
}

problem3(13195)
