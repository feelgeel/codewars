function PickPeaks(arr) {
    let pos=[]
    let peaks=[]
    for (let i = 0; i < arr.length-1; i++) {
        if(i==0||i===arr.length-1)continue
        if(arr[i]>arr[i+1]){
         for (let j =i-1; 0<= j; j--) {
             if(arr[i]>arr[j]){
                peaks.push(arr[i])
                pos.push(i)
                //  console.log(j,arr[j],"peak");
             }
            //  console.log(j)
         }
        }
        
    }
    return {pos,peaks}
    // console.log(pos,peaks)
}
PickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])
// console.log(PickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))