function parent() {
  var a = 90;


  function child1() {
    function child2() {
      console.log(a);
    }
    child2();
  }

  child1();

  console.log(a);
}

parent();


// Lexical Scope:

// Lexical scope is the ability for a function  to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function

// Every Nested function will have access to its parent's properties or variables and they will be able to work with them and the scope that is formed is lexical scope.
// the functions may access all variables from their parent scopes up to the global scope, but no scope may access any variables from the functions defined inside it.
