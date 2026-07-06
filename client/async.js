function register(cb) {
    setTimeout(() => {
        console.log("Register Here");
        cb();
    }, 5000);
}

function sendEmail(cb) {
    setTimeout(() => {
        console.log("Send Email");
        cb();
    }, 3000);
}

function login(cb) {
    setTimeout(() => {
        console.log("Login Here");
        cb();
    }, 1500);
}

function getData(cb) {
    setTimeout(() => {
        console.log("Fetch Data");
        cb();
    }, 4000);
}

function displayData() {
    setTimeout(() => {
        console.log("Display Data");
    }, 1000);
}

register(() => {
    sendEmail(() => {
        login(() => { 
            getData(() => {
                displayData();
            });
        });
    });
});
