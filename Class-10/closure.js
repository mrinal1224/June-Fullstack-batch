// function parent() {

//   function child1() {
//     var a = 90;
//     var b = 40;
//     console.log(a);
//     function child2() {
//       console.log(a)
//       console.log(b);
//     }
//     return child2;
//   }

//   return child1;
// }

// const child1returned = parent();
// const child2returnd = child1returned()

// child2returnd()

function add() {
  var a = 5;
  return function addChild1() {
    var b = 7;
    return function addChild2() {
      var c = 6;
      return function addChild3() {
        console.log(a + b + c);
      };
    };
  };
}


var add1 = add()
var add2 = add1()
var add3 = add2()
add3()

// 