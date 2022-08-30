const orderFood = (food, money) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 50000) {
        resolve(`here is your order ${food}`);
      } else {
        reject(
          `You don't have enough money to buy ${food}`
        );
      }
    }, 2000);
  });
};

// orderFood('Burger', 40000)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Have a good day');
//   });

const something = async () => {
  try {
    const res = await orderFood('Mie Ayam', 60000);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
something();
