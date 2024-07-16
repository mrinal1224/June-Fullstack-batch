setTimeout(function test(){
    console.log('Hi')
} , 0)


new Promise(function(resolve){
    console.log('Promise Started')
    setTimeout(function test2(){
        console.log('set Timeout inside Promise')
        resolve('Promise Resolved')
    } , 0)
}).then(function(result){
    console.log(result)
})