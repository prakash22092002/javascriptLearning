function orderFood() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("ordered food");
            res("started preparing food");
            console.log("------------------------------------------------------------------");
        }, 2000);
    });
}

function prepareFood() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("food prepared");
            res("out for delivery, delivery man on the way");
            console.log("-------------------------------------------------------------------");
        }, 4000);
    });
}

function deliveredFood() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("food is out for delivery");
            res("food delivered");
            console.log("-------------------------------------------------------------------");
        }, 2000);
    });
}

// Chaining the Promises
orderFood()
    .then(() => prepareFood())
    .then(() => deliveredFood())
    .then(() => {
        console.log("Order process complete");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
