const API = require("./api");

let promiseUser = API.getUser(true).then((user) => {
    console.log(user)
}).catch((error) => {
    console.log(error.message)
});

console.log('user:', promiseUser);

API.getProfile(true).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error.message);
});

Promise.all([
    API.getUser(true),
    API.getProfile(true)
]).then(results => {
    results.forEach(result => {
        console.log(result)
    })
}).catch(error => {
    console.log(error.message);
});