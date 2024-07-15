
const p1 = new Promise(function(resolve , reject){
    setTimeout(()=>{
      resolve('Resolved in 3 secs')
    } , 3000)
})

async function getData(){
    return p1
}

const dataPromise = getData()


console.log(dataPromise)

dataPromise.then(function(result){
    console.log(result)
})


