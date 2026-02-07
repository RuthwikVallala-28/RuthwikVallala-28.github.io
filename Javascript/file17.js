// const products = ["Desktop","Laptop","Mouse","KeyBord","Printer"]
// const nArray = products.map((i)=>{
//     return i;
// })
// console.log(nArray)

// Modified values is retured..
// const num = [1,2,3,4,5]
// const nArray = num.map((i=>{
//     return i+2
// }))
// console.log(nArray)

// const num = [1,2,3,4,5]
// const nArray = num.filter((i)=>{
//     return i>3
// })
// console.log(nArray)

const num = [1,2,3,4,5]
const r = num.find((i)=>{
    return i==5;
})
console.log(r);