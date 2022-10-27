////////////////////////////////////////////
//              Problem 9:                //
//      Special Pythagorean triplet       // 
////////////////////////////////////////////

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


function problem9(){
    console.time('Problem 9 Runtime')
    let tripletProduct = null
    let startingValue = 500
    for(let c = startingValue; c > 2; c--){
        let c2 = c*c
        for(let b = c-1; b > 1; b--){
            let b2 = b*b
            for(let a = b-1; a > 0; a--){
                let a2 = a*a
                if(a2 + b2 == c2){
                    let tripletSum = a+b+c
                    if(tripletSum == 1000) {
                        tripletProduct = a*b*c
                        console.log(tripletProduct)
                        console.timeEnd('Problem 9 Runtime')
                        return
                    }
                }
            }
        }
    }
}

problem9()