function printName(cb1 , cb2){
    console.log('Sai')
    cb1() // age
    cb2() // lastname
}

function printLastName(){
    console.log('kollipara')
}


function printAge(){
    console.log(25)
}

printName(printAge , printLastName)

// Sai





