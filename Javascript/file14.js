const store = {
    orderId:1,
    customerName:"Jhon",
    productName:"laptop",
    price:12000,
}
store["del_charge"] = 120;
console.log(store);
console.log(store.price);
console.log(store.orderId);
console.log(store.customerName);
console.log(store.productName);

store.status = "Pending";
console.log(store);

const obj = {...store,status:"Pending"}


