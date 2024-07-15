function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for Coffee Placed.')
        }
        else {
            reject('Order can not be Placed.')
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise(function(resolve) {
        resolve(`${orderPlaced} and Served.`)
    })
}

placeOrder('coffee').then(function(orderStatus) {
    console.log(orderStatus)
    return orderStatus
}).then(function(orderStatus) {
    let orderIsProcessed = processOrder(orderStatus)
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed) {
    console.log(orderIsProcessed)
})

// Output:



// Step - 3: Create a Promise method for generate the bill.

function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for Coffee Placed.')
        }
        else {
            reject('Order can not be Placed.')
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise(function(resolve) {
        resolve(`${orderPlaced} and Served.`)
    })
}

function generateBill(processedOrder) {
    return new Promise(function(resolve) {
        resolve(`${processedOrder} and Bill Generated with 200 Rs.`)
    })
}

placeOrder('coffee').then(function(orderStatus) {
    console.log(orderStatus)
    return orderStatus
}).then(function(orderStatus) {
    let orderIsProcessed = processOrder(orderStatus)
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed) {
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed) {
    let BillGenerated = generateBill(orderIsProcessed)
    return BillGenerated
}).then(function(BillGenerated) {
    console.log(BillGenerated)
}).catch(function(err) {    
    console.log(err)
})


/// Refactor this code with async/await