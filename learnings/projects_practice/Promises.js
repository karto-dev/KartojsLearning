const prom1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("hello");
    let err = true;
    if (!err) {
      resolve({ usernam: "he" });
    } else {
      reject("Sometinh cgvscx");
    }
  }, 1000);
});
prom1
  .then((user) => {
    console.log("Success");
    console.log(user.username);
  })
  .catch((e) => {
    console.log(e);
  });
//Alternate for then and catch is Async Await

async function consumePromise() {
  try {
    const response = await prom1;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();
