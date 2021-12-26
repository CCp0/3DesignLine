document.getElementById('buy-button').addEventListener('click', buyNow);

function boughtProductsDisplay()
{
let cartDisplay = document.getElementById('root');
let cartItems = [];
let cartedItems = [];
let product = [];
let productContainer = [];
let productTitle = [];
let productImg = [];
let productPrice = [];
let totalProductPrice = [];
let totalCost = 0;
let index = 0;
let counter = 0;
for(let i = 1; i < localStorage.getItem('checkout')+1; i++)
{
    //Element getting / Creating
    cartItems[i] = window.localStorage.getItem("productsList" + i);
    product[i] = JSON.parse(cartItems[i]);
    productContainer[i] = document.createElement('div');
    let productSpacer = document.createElement('p');
productSpacer.textContent = '---------------------------------';
    //Validation (If the item is in cart already)
    let notInCart = true;
    if(product[i] != null)
    {
    for(let j = 0; j < cartedItems.length; j++)
    {
        if(cartedItems[j] == product[i].name)
        {
            notInCart = false;
            index = j + 1;
        }
    }
    if(notInCart ==true)
    {
    //Setting values
    productTitle[i] = document.createElement('h2');
    productImg[i] = document.createElement('img');
    productTitle[i].textContent = product[i].name;
    productImg[i].setAttribute('src', product[i].image);
    productPrice[i] = document.createElement('p');
    productPrice[i].innerHTML = product[i].price.toFixed(2);
    console.log(product[i].price);
    //Styling
    productImg[i].setAttribute('class', 'icon float-start');
    //ID
    productPrice[i].setAttribute('id', 'productPrice' + i);
    //Appending
    productContainer[i].appendChild(productImg[i]);
    productContainer[i].appendChild(productTitle[i]);
    productContainer[i].appendChild(productPrice[i]);
    productContainer[i].appendChild(productSpacer);
    cartDisplay.appendChild(productContainer[i]);
    cartedItems[counter] = product[i].name;
    totalProductPrice[i] = product[i].price;
    totalCost += product[i].price;
    counter++;
    }
    else if(notInCart == false)
    {
        let priceTag = document.getElementById('productPrice' + index);
        totalProductPrice[index] += product[index].price;
        //console.log(totalProductPrice[index]);
        priceTag.innerHTML = totalProductPrice[index].toFixed(2);
        totalCost += product[index].price;
    }
}
}
console.log(totalCost);
totalCostDisplay = document.createElement('h3');
totalCostDisplay.innerHTML = ("Total €" + totalCost.toFixed(2));
cartDisplay.appendChild(totalCostDisplay);
}
function buyNow()
{
    console.log(totalCost);
    if(totalCost != 0)
    {
    localStorage.removeItem();
    alert("Thank you for your order");
    }
    else{
        alert("No items in cart, sale void");
    }
}
boughtProductsDisplay();
