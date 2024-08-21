const car1 ={
    name :'BMW',
    YOM : 2023,
    color : 'Blue',

    drive : function(){
        console.log(`Driving a ${this.color} ${this.name}`)
    }
}

const car2 ={
    name :'Ferrari',
    YOM : 2023,
    color : 'Red'
}

const car3 ={
    name :'Mercedes',
    YOM : 2023,
    color : 'White'
}

let driveCar2 = car1.drive.bind(car2)





//// 1000 lines

driveCar2()







