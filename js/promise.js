let resolveMessage = new Promise((resolve, reject) => {
  let a = 10;

  if (a <= 10) {
    resolve(`the value is resolved ${a}`);
  } else {
    reject(`the value is rejected, because the value is greater than 10`);
  }
});

resolveMessage
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
