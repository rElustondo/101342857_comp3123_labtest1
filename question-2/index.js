let resolvedPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        let success = {"message" : "delayed success!"}
        res(success)
    },500)
})

let rejectedPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        try{
            let error_message = {"error" : "delayed exception!"}
            throw error_message
        } catch(e){
            rej(e)
        }
    },500)
})

resolvedPromise.then((data)=>{console.log(data)}).catch(e=>{console.log(e)})
rejectedPromise.then((data)=>{console.log(data)}).catch(e=>{console.log(e)})