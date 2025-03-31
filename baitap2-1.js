let products = [
    {id:1,name:"Milk",count:100},
    {id:2,name:"Orange",count:100},
    {id:3,name:"Butter",count:100},
]
let newProduct = {id:4,name:"Bread",count:100};
products.push(newProduct);
console.log(products);

let index=products.findIndex(products=>products.id===2);
if(index!==-1){
    products.splice(index,1);
}
console.log(products);
let productToUpdate = products.find(product=>product.id===3);
if(productToUpdate){
    productToUpdate.count=0;
}
console.log(products);
let keyword = "Butter";
let foundProduct = products.find(product=>product.name===keyword);
if(foundProduct){
    console.log(foundProduct);
} else {
    console.log("Không có dữ liệu bạn tìm kiếm");
}