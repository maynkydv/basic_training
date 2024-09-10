function randomTimePrint ( num ){
    const randomNum = Math.floor(Math.random()*7) ;
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(console.log(num))},randomNum*1000);
    })
}
const func = async ()=>{
    let promiseChain = Promise.resolve(console.log("new resolved promise is created"));
    console.log(promiseChain);
    for (let i = 0; i <= 10; i++) {
        promiseChain = promiseChain.then(() => randomTimePrint(i));
    }
}
func();