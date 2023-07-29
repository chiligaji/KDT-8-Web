function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(name);
      res(name);
    });
  });
}

function back() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      console.log("back");
      res("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res("callback hell");
    }, 1000);
  });
}

async function exec() {
  await call("kim");
  await back(function (txt) {
    console.log(txt + "을 실행했구나");
  });
  hell(function (message) {
    console.log("여기는" + message);
  });
}

exec();

// call("kim")
//   .then(function (name1) {
//     console.log(name1 + "반가워");
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then(function (message) {
//     console.log("여기는" + message);
//   });
