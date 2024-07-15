
const p1 = new Promise(function(resolve , reject){
    setTimeout(()=>{
      resolve('P1 Resolved in 5 secs')
    } , 4000)
})


const p2 = new Promise(function(resolve , reject){
    setTimeout(()=>{
      resolve('P2 Resolved in 5 secs')
    } , 2000)
})

async function handlePromise(){
  const val = await p1
  console.log(val)
  console.log('Scalerrr is Awesome!')

  const val2 = await p2
  console.log(val2)


}
handlePromise()





  function getData(){
    p1.then(function(result){
        console.log(result)
    })


 
}



//  getData()



















