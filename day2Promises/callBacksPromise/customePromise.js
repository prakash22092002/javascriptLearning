const completedAssignment = new Promise((res, rej) => {
  const isCompleted = true;
  isCompleted
    ? res("yes the assignment was completed")
    : rej("the assignment wasnt completed");
});

completedAssignment
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Basic Promise Creation: Question: Write a function called simplePromise that creates a new promise which resolves with the value "Promise resolved" after 1 second.

const simplePromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("the promise has been resolved after 1 s");
  }, 1000);
});

simplePromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .then(console.log("this is after 1 second"))





// how does the promise works and its syntax
const promise = new Promise((res, rej) => {
  res("this is the success promise data");
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
