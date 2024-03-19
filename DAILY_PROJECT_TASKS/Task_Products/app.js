//const url = 'https://course-api.com/javascript-store-products';

let myData = [];

fetch("https://course-api.com/javascript-store-products").then(function(value){
    return value.json();
}).then(function(value){
    console.log(value.fields);
    displayProduct(value);
})

function displayProduct(Data){
    let a = Data.map(function(value){
        return `<a class="single-product" href="product.html?id=${value.id}&name=john&age=25">
        <img src="${value.fields.image[0].url}" class="single-product-img img" alt="${value.fields.title}" />
        <footer>
          <h5 class="name">${value.fields.name}</h5>
          <span class="price">$${value.fields.price}</span>
        </footer>
      </a>`
    });
    document.getElementById("display").innerHTML = a.join(" ");
  }