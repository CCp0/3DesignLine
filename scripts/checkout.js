//console.log(JSON.parse(localStorage.getItem('cart')));
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
LoginPriority();