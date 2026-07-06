function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register Here");
            resolve();
        }, 5000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Send Email");
            resolve();
        }, 3000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login Here");
            resolve();
            //reject("login failed")
        }, 1500);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch Data");
            resolve();
        }, 4000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Display Data");
            resolve();
        }, 1000);
    });
}
// register()
//     .then(() => {
//         return sendEmail();
//     })
//     .then(() => {
//         return login();
//     })
//     .then(() => {
//         return getData();
//     })
//     .then(() => {
//         return displayData();
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function f1(){
    try{
        await register();
        await sendEmail();
        await login()
        await getData()
        await displayData()
    }
    catch (err){
        console.log("Error", err)
    }
}

console.log("Call other application")
f1();