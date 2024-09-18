let arr = ["one" , "Two" , "ThREE" , "FOUr" , "fIVE" , "6"  ,"345" , "null" ] ;

function makeAllCaps(inputArr){
    const promise = new Promise ((resolve , reject )=>{
        let newArr = inputArr.map((ele , index )=>{
            if(typeof ele === "string" ) return ele.toUpperCase() ;
            else reject(`${ele} on ${index} index is not off string type`);
        });
        resolve(newArr);
    });
    return promise ;
}

function sortWords(inputArr){
    return new Promise((resolve , reject)=>{
        resolve(inputArr.sort());
    });
}

makeAllCaps(arr)
.then(sortWords)   // .then(  (result)=>{ sortWords(result); } ) ;
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})