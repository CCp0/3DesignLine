var productId = 1;
let checkout = document.getElementById('checkout');
checkout.addEventListener("click", LoginPriority);
function LoginPriority()
{
    if(localStorage == "loggedin")
    {
        window.location.href = "checkout.html";
    }
    else
    {
        window.location.href = "login.html";
    }
}
//Product class declaration
class Product {
    constructor(name, description, price, rating, iconImage, imageFolder) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.image = iconImage;
        this.imageFolder = imageFolder;
        productId++;//Increments the product ID for the next product
    }
}
//Creating product objects
const productsList = [];
const bookstand = new Product(
    "Darth Vader Bookstand",
    "Darth Vaders silhouette is holding up a book with the power of the force, or so it appears. The mechanics are simple, using a slanted rectangular side placed inside the pages of the book, this keeps the book aloft. It provides a great stand to place your favorite read.",
    "€5.00",
    "4.6",
    "images/Darth Vader Bookstand/20211219_142110.jpg",
    "images/Darth Vader Bookstand");
const scraper = new Product(
    "ND - Ice Scraper",
    "The first ever product sold by our initial startup company; New Dimension. This keyring ice scraper has done more for plastic/cooker scraping than ice, so don't let the title limit this products potential!",
    "€2.00",
    "4.8",
    "images/Ice Scrapers/20211219_133532.jpg",
    "images/Ice Scrapers");
const prod = new Product(
    "Darth Vader Bookstand",
    "Darth Vaders silhouette is holding up a book with the power of the force, or so it appears. The mechanics are simple, using a slanted rectangular side placed inside the pages of the book, this keeps the book aloft. It provides a great stand to place your favorite read.",
    "€5.00",
    "4.6",
    "images/Darth Vader Bookstand/20211219_142110.jpg");
const voltronMedallion = new Product(
    "Voltron Medallion",
    "A voltron medallion/keyring designed for 3D printing and easily painted with contrasting layer heights. Textures applied from solidworks.",
    "€3.50",
    "3.3",
    "https://img2.cgtrader.com/items/1889028/edd4caa230/large/voltron-medallion-3d-model-stl-sldprt-sldasm-slddrw-amf-3mf.jpg");
const samsungS20PhoneCase = new Product(
    "Samsung Galaxy S20 FE Phone Case",
    "3D printed phone case for the Samsung Galaxy S20 Fan Edition. A sturdy case made from ABS plastic.",
    "€4.00",
    "4.1",
    "https://img2.cgtrader.com/items/1957307/81acecd766/large/samsung-galaxy-s20-fe-phone-case-3d-model-stl-dwg-sldprt-amf.jpg");
    DisplayProducts();
    function DisplayProducts()
    {
    //Displaying the objects
    let column = document.createElement('div');
    let container = document.createElement('div');
    let card = document.createElement('div');
    let productIcon = document.createElement('img');
    card.setAttribute('class', 'card');
    card.style.minWidth = '50px';
    card.style.height = '100px';
    document.body.appendChild(card);
    Product.forEach(product => {
        productIcon = product.iconImage;
    });
    }

var additem = document.getElementsByClassName('addtocart');
// add a listener for add to cart if such a button id is pressed
for(let i = 0; i < additem.length; i++)
{
additem[i].addEventListener("click", addToCart);
}
function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    console.log('Checkout');
}