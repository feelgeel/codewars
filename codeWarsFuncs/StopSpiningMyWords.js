
    function spinWords(string){
        //TODO Have fun :
       let newarr= string.split(" ");
     
       let revArr=newarr.map(dt=>{
        if(dt.length>=5){
            let newdt= dt.split("");  
            newdt=newdt.reverse()
           newdt=newdt.join("")
        //    console.log("newDt",dt.length)
           return newdt
        }
        return dt

       })
    //    let reversedArr=newarr.reverse()
        // let revStr=reversedArr.join("")
        revArr=revArr.join(" ")
        // return revArr
        console.log(revArr)
      }
      spinWords("Hey fellow warriors")
 
