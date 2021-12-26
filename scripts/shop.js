let checkout = document.getElementById('checkout');
var total=localStorage.getItem('checkout');
//Product class declaration
class Product {
    constructor(name, description, price, rating, reviewNum, iconImage, imageFolder) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.reviewNum = reviewNum;
        this.image = iconImage;
        this.imageFolder = imageFolder;
    }
}
//Creating product objects
const productsList = [];//The list index serves as the product ID
productsList[0] = new Product(
    "Darth Vader Bookstand",
    "Darth Vaders silhouette is holding up a book with the power of the force, or so it appears. The mechanics are simple, using a slanted rectangular side placed inside the pages of the book, this keeps the book aloft. It provides a great stand to place your favorite read.",
     7.00,
     4.6,
     43,
    "images/Darth Vader Bookstand/20211219_142106.jpg",
    "images/Darth Vader Bookstand");
productsList[1] = new Product(
    "ND - Ice Scraper",
    "The first ever product sold by our initial startup company; New Dimension. This keyring ice scraper has done more for plastic/cooker scraping than ice, so don't let the title limit this products potential!",
     2.50,
     4.8,
     37,
    "images/Ice Scrapers/20211219_133532.jpg",
    "images/Ice Scrapers");
productsList[2] = new Product(
    "Sturdy Coat Hanger",
    "These coat hangers are nigh indestructible and can take the weight of a free hanging electric guitar (so you know they're quality!). This a product that will get you hooked on 3D printing for its near endless practicality.",
     8.00,
     3.8,
     28,
    "images/3D Hooks/20211219_143016.jpg",
    "images/3D Hooks");
productsList[3] = new Product(
    "Puzzle Cube",
    "A 4 piece puzzle that forms a neat cube, but stays true to the saying, the hardest puzzles are always the ones with the least pieces",
     5.00,
     5,
     42,
    "images/3D Cube/20211219_143318.jpg",
    "images/3D Cube");
productsList[4] = new Product(
    "Samsung S20 FE Phone Case",
    "3D printed phone case for the Samsung Galaxy S20 Fan Edition. A sturdy case made from ABS plastic.",
     8.00,
     4.1,
     16,
    "images/S20 FE Phone Case/20211222_181348.jpg");
productsList[5] = new Product(
    "3D Printed Skull",
    "Keyword in the title is '3D Printed', rather avoid that particular lawsuit thank you very much. It's very well detailed, great for your science lab, halloween costume or Shakspeare play",
     10.00,
     4.5,
     23,
    "images/3D Skull/20211219_144146.jpg");
productsList[6] = new Product(
    "Samsung S20 FE Phone Case",
    "3D printed phone case for the Samsung Galaxy S20 Fan Edition. A sturdy case made from ABS plastic.",
     4.00,
     4.1,
     16,
    "https://img2.cgtrader.com/items/1957307/81acecd766/large/samsung-galaxy-s20-fe-phone-case-3d-model-stl-dwg-sldprt-amf.jpg");
       
    DisplayProducts();
    function DisplayProducts()
    {
    let counter = 0;
    //Displaying the objects
    let container = document.createElement('div');
    container.setAttribute('class', 'container text-center');
    document.body.appendChild(container);
        do
        {
            //Card
        const card = document.createElement('div');
        card.setAttribute('class', 'card d-inline-block m-2');
            //Card Title
        const cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.classList.remove('text-center');
        if(productsList[counter].name.length > 20)
        {
            cardTitle.innerHTML = productsList[counter].name.substring(0,17) + '...';
        }
        else{
            cardTitle.innerHTML = productsList[counter].name;
        }
            //Card Rating
        const ratingContainer = document.createElement('div');
        ratingContainer.setAttribute('class', 'd-flex align-items-center');
        const rating = document.createElement('div');
        rating.setAttribute('class', 'ratings');
        let starIcon = [];
        for(let i = 0; i < 5; i++)//Makes 5 empty stars
        {
            starIcon[i] = document.createElement('i');
            starIcon[i].setAttribute('class', 'bi bi-star');
            rating.appendChild(starIcon[i]);
        }
        let reviewNum = document.createElement('p');
        reviewNum.setAttribute('class', 'float-end');
        reviewNum.innerHTML = `(${productsList[counter].reviewNum})`;
        rating.appendChild(reviewNum);
        ratingContainer.appendChild(rating);
        for(let i = 0; i < Math.round(productsList[counter].rating); i++)//Sets the stars from left to right to be filled depending on rating score
        {
            starIcon[i].setAttribute('class', 'bi bi-star-fill');
        }
            //Card Image
        const icon = document.createElement('img');
        icon.setAttribute('src', productsList[counter].image);
        icon.setAttribute('class', 'productImg');
        icon.setAttribute('onerror', 'this.onerror=null;this.src = "images/ProductImagePlaceholder.png";');
        icon.style.width = '200px';
        icon.style.height = '200px';
            //Card description
        const cardDescription = document.createElement('p');
        cardDescription.setAttribute('class', 'description card-text position-absolute top-50 start-50 translate-middle');
        cardDescription.textContent = productsList[counter].description.substring(0,80) + '...';
            //Image container / Card Description Display
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'imgContainer position-relative');
        imgContainer.appendChild(cardDescription);
        imgContainer.appendChild(icon);
            //Pricing
        const saleContainer = document.createElement('div');
        saleContainer.setAttribute('class', 'saleContainer position-relative m-1');
        const cardPrice = document.createElement('h3');
        cardPrice.setAttribute('class', 'cardPrice card-text float-start');
        cardPrice.textContent = '€' + productsList[counter].price.toFixed(2);
        saleContainer.appendChild(cardPrice);
            //Card add to cart
        let addToCartBtn = document.createElement('button');
        addToCartBtn.innerHTML = "<a>Add to Cart</a>";
        addToCartBtn.setAttribute('class', 'addtocart btn btn-primary float-end m-1');
        addToCartBtn.setAttribute('id', `${counter}`)
        saleContainer.appendChild(addToCartBtn);
            //Card content appending
        card.appendChild(imgContainer);
        card.appendChild(cardTitle);
        card.appendChild(ratingContainer);
        card.appendChild(saleContainer);
        container.appendChild(card);
        counter++;
        }
        while(productsList[counter] != null)
    }

var additem = document.getElementsByClassName('addtocart');
// add a listener for add to cart if such a button id is pressed
for(let i = 0; i < additem.length; i++)
{
additem[i].setAttribute("onclick", `addToCart('${additem[i].id}')`);
}
function addToCart(index) {
    total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
    //console.log('Checkout');
    console.log(productsList[index].name);
    localStorage.setItem("productsList"+`${total}`, JSON.stringify(productsList[index]));

}