//구조
//함수 앞에 async 키워드 붙이기

//비동기 처리 메서드 앞에 await 붙이기 (기다려줄 것)

//async와 await은 항상 같이써야 함

let product;
let price;
exec();

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

async function exec() {
  goMart();
  await pickDrink();
  pay();
}
