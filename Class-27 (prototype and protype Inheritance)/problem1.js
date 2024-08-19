// What happens if you manually set an 
// object’s __proto__ property 
// to null? How would you access the object's 
// original prototype after doing this?


let obj = { name: 'Sample Object' };
console.log(obj.hasOwnProperty('name'));  // Normally works



// Set prototype to null
obj.__proto__ = null;


try {
    console.log(obj.hasOwnProperty('name'));
} catch (e) {
    console.log("Error:", e.message);
}
