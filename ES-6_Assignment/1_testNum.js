function testNum(num){
    return new Promise((resolve , reject)=>{
        if(typeof num === 'number'){
            if(num < 10) resolve(true);
            else if(num >= 10) resolve(false);
        }
        else {
            reject("error -> Not a Number");
        } 
    });
}

var x = 23 ;
testNum(x)
.then((result)=>{
    console.log("Promise resolved");
    console.log(result);
})
.catch((err)=>{
    console.log("catched called");
    console.log(err);
})