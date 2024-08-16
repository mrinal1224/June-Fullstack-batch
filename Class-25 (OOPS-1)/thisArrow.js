// add two numbers

// function add(a,b){
//     return a+b
// }

// let sum = add(2,4)

// console.log(sum)


// const add = (a,b)=>{
//     return a+b
// }

// let sum = add(2,4)
// console.log(sum)


const obj = {
    name : 'John',
    age : 23,
    fn : function(){
        console.log(this)
    }
}

// this keyword -> object itslef

 obj.fn()


const obj2 = {
    name :'Steve',
    age : 25,

    fn1 :()=>{
        console.log(this)
    }
}

obj2.fn1()