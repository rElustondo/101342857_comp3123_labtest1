const mixedArray = ['PIZZA',10,true,25,false,'Wings']

let lowerCaseWords = (mixedArrayInput) => {

    return new Promise((resolve, reject) => {
        
        let onlyStrings = mixedArrayInput.reduce((acc,v,i,arr)=>{
            if(typeof v === "string"){
                acc.push(v)
            }
            return acc
        },[])
        if(onlyStrings.length == 0){reject("Error: Missing string values in mixed array")}
        let lowerCaseWords1 = onlyStrings.map((v,j,ar)=>{
            let lettersToLowercase = ""
            for (let i = 0; i < v.length; i++){
                let lowerCaseLetter = v[i].toLocaleLowerCase()
                lettersToLowercase = lettersToLowercase + lowerCaseLetter
            }
            return lettersToLowercase
        }) 
        resolve(lowerCaseWords1)
    })
}
lowerCaseWords(mixedArray).then((data)=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})