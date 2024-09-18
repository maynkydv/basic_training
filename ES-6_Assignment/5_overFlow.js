// The following recursive code will cause a stack overflow if the array "somelist" is too large. How can you fix this and still retain the recursive pattern?

var somelist = readVeryLongList();

var nextItem = function() {

   var item = somelist.pop();

   if (item) {

       // process the list item...

       nextItem();  //* setTimeout(nextItem, 0); // Schedule the next iteration asynchronously

   }

};

//! To avoid a stack overflow while retaining the recursive pattern, 
//! you can use setTimeout or setImmediate (if available) to break the 
//! recursive call into asynchronous chunks. This will prevent the call 
//! stack from growing too large by allowing the event loop to manage the execution between recursive calls.
