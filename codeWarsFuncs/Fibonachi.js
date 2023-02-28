function tribonacci(signature,n){
    // the solution
    /*
    for (var i = 0; i < n-3; i++) { // iterate n times
        // add last 3 array items and push to trib
        signature.push(signature[i] + signature[i+1] + signature[i+2]);
      }
      return signature.slice(0, n); //return trib - length of n
     */
    // my solution
    if(n===0)return []
    let newArr=[...signature]
    
    for (let i = 0; i < n-3; i++) {
        let position=newArr.length-1
    let sumArr=newArr[position]+newArr[position-1]+newArr[position-2]
    newArr.push(sumArr)
}
console.log(newArr)
// return newArr
}
//  console.log(tribonacci([1,1,1],10))
 tribonacci([1,1,1],1)
