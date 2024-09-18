for(let i = 0; i < 10; i++) {
   setTimeout(function() {
     console.log(i); 
   }, 10);
}

//! var 
// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i); 
//     }, 10);
//  }

// Using //! let : 
// Each iteration of the loop gets its own block-scoped i, so the correct values 0 to 9 are logged as each setTimeout has its own copy of i.

// Using //! var :
// var is function-scoped, so all setTimeout callbacks share the same i, which becomes 10 by the time the loop finishes, logging 10 ten times.







