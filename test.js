const co = require('co');
//
// co(function* () {
//     var result = yield Promise.resolve(true);
//     return result;
//     //var res1=yield  Promise.resolve(false);
// }).then(function (value) {
//     console.log(value);
// }, function (err) {
//     console.error(err.stack);
// });

co(function *(){
    try {
        yield Promise.reject(new Error('boom'));
    } catch (err) {
        console.error(err.message); // "boom"
    }
}).catch(onerror);