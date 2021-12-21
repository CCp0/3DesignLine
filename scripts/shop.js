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
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.image = iconImage;
        this.imageFolder = imageFolder;
    }
}
//Creating product objects
const productsList = [];//The list index serves as the product ID
productsList[0] = new Product(
    "Darth Vader Bookstand",
    "Darth Vaders silhouette is holding up a book with the power of the force, or so it appears. The mechanics are simple, using a slanted rectangular side placed inside the pages of the book, this keeps the book aloft. It provides a great stand to place your favorite read.",
    "€5.00",
     4.6,
    "images/Darth Vader Bookstand/20211219_142110.jpg",
    "images/Darth Vader Bookstand");
productsList[1] = new Product(
    "ND - Ice Scraper",
    "The first ever product sold by our initial startup company; New Dimension. This keyring ice scraper has done more for plastic/cooker scraping than ice, so don't let the title limit this products potential!",
    "€2.00",
     4.8,
    "images/Ice Scrapers/scraperNB.jpg",
    "images/Ice Scrapers");
productsList[2] = new Product(
    "Darth Vader Bookstand",
    "Darth Vaders silhouette is holding up a book with the power of the force, or so it appears. The mechanics are simple, using a slanted rectangular side placed inside the pages of the book, this keeps the book aloft. It provides a great stand to place your favorite read.",
    "€5.00",
     4.6,
    "images/Ice Scrapers/scraperNB.jpg");
productsList[3] = new Product(
    "Voltron Medallion",
    "A voltron medallion/keyring designed for 3D printing and easily painted with contrasting layer heights. Textures applied from solidworks.",
    "€3.50",
     3.3,
    "https://img2.cgtrader.com/items/1889028/edd4caa230/large/voltron-medallion-3d-model-stl-sldprt-sldasm-slddrw-amf-3mf.jpg");

    productsList[4] = new Product(
    "Samsung Galaxy S20 FE Phone Case",
    "3D printed phone case for the Samsung Galaxy S20 Fan Edition. A sturdy case made from ABS plastic.",
    "€4.00",
     4.1,
    "https://img2.cgtrader.com/items/1957307/81acecd766/large/samsung-galaxy-s20-fe-phone-case-3d-model-stl-dwg-sldprt-amf.jpg");
    DisplayProducts();
    function DisplayProducts()
    {
        let counter = 0;
    let rownum = Math.round(productsList.length / 5);
    //Displaying the objects
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);
    for(let rows = 0; rows < rownum; rows++)
    {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        do
        {
        const column = document.createElement('div');
        column.setAttribute('class', 'col-sm-2 mb-1');
            //Card
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.style.minWidth = '150px';
        card.style.height = '100px';
            //Card Title
        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerHTML = productsList[counter].name;
            //Card Description
        const cardDescription = document.createElement('p');
        cardDescription.setAttribute('class', 'card-text');
        cardDescription.textContent = productsList[counter].description.substring(0,40) + '...';
            //Card Rating
        const rating = document.createElement('div');
        let starIcon = [];
        for(let i = 0; i < 5; i++)//Makes 5 empty stars
        {
            starIcon[i] = document.createElement('i');
            starIcon[i].setAttribute('class', 'bi bi-star');
            rating.appendChild(starIcon[i]);
        }
        /*for(let i = 0; i < Math.round(productsList[counter].rating); i++)
        {
            starIcon[i].classList.remove("bi bi-star");
            starIcon[i].setAttribute('class', 'bi bi-star-fill');
        }*/
            //Card Image
        const icon = document.createElement('img');
        icon.setAttribute('src', productsList[counter].image);
        icon.style.width = '100%';
        card.appendChild(icon);
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        card.appendChild(rating);
        column.appendChild(card);
        row.appendChild(column);
        counter++;
        }
        while(counter % 5 != 0 && productsList[counter] != null)
    }
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