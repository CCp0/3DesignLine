// set the checkout figure
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

// run to update login/
var logout = document.getElementById('loginlogout');
// add a listener for add to cart if such a button id is pressed
logout.addEventListener("click", Logout);

function Logout() {
    // if user is logged in then log them out and redirect to home page
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}


// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");
        document.getElementById('cart').setAttribute('href', 'checkout.html');
    } else{
        // use add to hide the display of User Details
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
        document.getElementById('cart').setAttribute('href', 'login.html');
    } 

}
//Making the back to top button completely javascript as it can be implemented more flexibly with all pages
bckTopBtn = document.createElement('button');
bckTopBtn.setAttribute('class', 'btn btn-dark btn-floating btn-lg position-fixed');
bckTopBtn.innerHTML = '<i class="bi bi-arrow-up-square-fill"></i>';
bckTopBtn.style.bottom = "2em"; //Using custom styling due to limitations with bootstrap postiioning (bottom-0 or 50 and nothing in between)
bckTopBtn.style.right = "1em";
bckTopBtn.setAttribute('onclick', 'backToTop()');
document.body.appendChild(bckTopBtn);
 //https://mdbootstrap.com/snippets/standard/mdbootstrap/2964350#css-tab-view
 // When the user scrolls down 10px from the top of the document, show the button
 window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      bckTopBtn.classList.remove("d-none");
      bckTopBtn.classList.add("d-show");  
    } else {
      bckTopBtn.classList.add("d-none");
    }
  }
function backToTop()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}