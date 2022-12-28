function randomNumbers(cant){
    const nums = new Map
    for (let i = 0;i<cant;i++){0
        let ranNum=Math.floor(Math.random()*1000)
        if(nums.has(ranNum)){
            nums.set(ranNum,nums.get(ranNum)+1)
        }else{
            nums.set(ranNum,1)
        }
    }
    console.log(nums)
}
process.on('message',(num)=>{
    const numbers=generateNums(num)
    process.send(numbers)
})
module.exports=randomNumbers

