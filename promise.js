// promise 객체를 반환하는 promise1 함수 정의
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve("promise 상태는 fulfilled, then으로 연결, 이때 flag값은 true");
//     } else {
//       reject("promise 상태는 fulfilled, catch로 연결, 이때 flag값은 false");
//     }
//   });
// }

// // console.log(promise1(true));
// // console.log(promise1(false));

// promise1(false)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/////////////////////////////////////////////////////

let product;
let price;
goMart();
pickDrink()
  .then(pay)
  .catch((err) => {
    console.log(err);
  });
//pay(product, price);

function goMart() {
  console.log("마트에 왔는데 어떤 음료를 마실까?");
}

function pickDrink(callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!!");
      product = "제로 콜라";
      price = 3000;
      if (price <= 2000) {
        resolve();
      } else {
        reject("돈이 부족해요");
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// ######################################
// promise 체이닝

// 체이닝 사용 안 한 경우
// (4+3) *2 -1

// function add(n1, n2, callback) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     let result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// // add -> ml -> sub 순서로 실행될 것

// add(4, 3, function (x) {
//   console.log("1: ", x);
//   mul(x, function (y) {
//     console.log("2: ", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });

// ################# 프로미스 체이닝

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3: ", result);
  });
