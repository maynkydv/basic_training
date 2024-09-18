let arr = ['first', 'Second', 'thiRd', 4, false, 'true']

function validateString(input, callback) {
    setTimeout(function () {                // inversion of control
        if (typeof input === "string" && input === input.toLowerCase()) {
            return callback(null, true);
        }
        return callback(new Error('Invalid string'), null);
    }, 500)
}

function validateArray(arr) {
    return arr.reduce((accPromise, value) => {
        return accPromise.then((acc) => {
            return new Promise((resolve) => {
                validateString(value, (err, result) => {
                    acc[String(value)] = result || false;
                    resolve(acc);
                });
            });
        });
    }, Promise.resolve({}));
}

validateArray(arr).then((result) => {
    console.log(result);  
});
