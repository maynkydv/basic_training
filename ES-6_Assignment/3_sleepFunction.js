function sleep(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000); 
    });
  }

  sleep(2)
  .then(() => {
    console.log('Executed after 2 seconds');
  })


  
//   .then(()=>{callback()}) ;

//   function callback(){
//     console.log("callback is called")
//   }