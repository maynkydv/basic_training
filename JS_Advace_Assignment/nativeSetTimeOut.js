function customSetTimeout(callback, delay) {
    const start = Date.now();
    while (Date.now() - start < delay) {}
    callback();
}


customSetTimeout(()=>{
    console.log("Timer Over then Callback called")
} , 2000) ;