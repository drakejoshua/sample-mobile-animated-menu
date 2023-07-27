function displayMenu()
{
    var menu = document.getElementById("dropdown");

    if ( menu.style.height == "0px" || menu.style.height == "" )
    {
        menu.style.height = "200px";
    }
    else
    {                            
        menu.style.height = "0px";
    }
}


function myFunction(x) {
    x.classList.toggle("change");
}