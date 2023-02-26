function tribonacci(signature,n){
    if(n===0)return []
    let newArr=[...signature]
    n=n+3
    for (let i = 0; i < n; i++) {
        let position=newArr.length-1
    let sumArr=newArr[position]+newArr[position-1]+newArr[position-2]
    newArr.push(sumArr)
    console.log(sumArr)
}
console.log(newArr)
// return newArr
  }
 tribonacci([1,1,1],10)
