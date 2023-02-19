let loadOrders = document.getElementById("loadOrders");

function getMenu() {
  fetch("https://free-food-menus-api-production.up.railway.app/burgers")
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      data = objectData;
      console.log(data);

      data.map((item) => {
        let lItem = document.createElement("div");
        lItem.className = "forCSS";
        lItem.innerHTML = `
        <img src="${item.img}">
<div class="content">
            <h2>${item.name}</h2>
            <h4>${item.id}</h4>
            <p>Price: ${item.price}</p>
            <p>Rating: ${item.rate}</p>
            <p>Country: ${item.country}</p>
</div>

          
            `;
        loadOrders.append(lItem);
      });
    });
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let Order1 = data[Math.floor(Math.random() * 60) + 1];
      let Order2 = data[Math.floor(Math.random() * 60) + 1];
      let Order3 = data[Math.floor(Math.random() * 60) + 1];

      // let orders= [{Order1},{Order2},{Order3}]

      // console.log(orders);

      resolve({
        Order1,
        Order2,
        Order3,
      });
    }, 2500);
  });
}

function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        order_status: true,
        paid: false,
      });
    }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        order_status: true,
        paid: true,
      });
    }, 1000);
  });
}

function thankyouFnc() {
  alert("Thank you for your order!!");
  console.log("Thank you for your order!!");
}

// getMenu(
//   takeOrder(
//     orderPrep.then(function (data3) {
//       console.log(data3);
//     })
//   ).then(function (data2) {
//     console.log(data2);
//   })
// );
// payOrder().then(function thankyouFnc(data4) {
//   console.log(data4);

//   if (data4.paid === true) {
//     alert("Thank You for the Order");
//   }
// });

getMenu();

takeOrder().then((data) => {
  console.log(data);
  orderPrep().then((data) => {
    console.log(data);
    payOrder().then((data) => {
      console.log(data);
      if (data.paid === true) {
        thankyouFnc();
      }
    });
  });
});
