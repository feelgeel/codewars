function PickPeaks(arr) {
    let pos=[]
    let peaks=[]
    for (let i = 0; i < arr.length-1; i++) {
        if(i==0||i===arr.length-1)continue
        if(arr[i]>arr[i-1]&&arr[i]>arr[i+1]){
            //obviouse peak
            pos.push(i)
             peaks.push(arr[i])
        }
         if(arr[i]>arr[i-1]&&arr[i]==arr[i+1]){
            console.log("fff",arr[i],i)
                // console.log("arr[i]==arr[i+1]",arr[i]);
                
                for (let j = i; j <arr.length-1; j++) {
                    // console.log("i",i);
                    if(arr[i]<arr[j]){
                         break
                        // console.log("arr[i]<arr[j]",arr[i]);

                 }
                 else if(arr[i]>arr[j]){
                    //  console.log("arr[i]>arr[j]",i)
                    pos.push(i)
             peaks.push(arr[i])

                 }
                 
             }
         }
        }
        
    
    return {pos,peaks}
    // console.log(pos,peaks)
}
// PickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])
// console.log(PickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))
// console.log(PickPeaks([1,2,3,6,4,1,2,3,2,1]))
console.log(PickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]))
console.log(PickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))