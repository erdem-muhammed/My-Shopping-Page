var number = 1;
var credit = 4500;
var totalCost = 0;

function add(product, price)
{
    var shoppingcart= document.getElementById("shoppingcart");
    var costDiv = document.getElementById("totalCost");
    totalCost += price;

    var first = shoppingcart.innerHTML;
    var text = "<div>" + number + ". " + product + "</div>";
    var last = first + text;

    shoppingcart.innerHTML = last;
    costDiv.innerHTML = "Total: " + totalCost + " €";

    number++;
}

function buy()
{
    if(credit >= totalCost)
    {
    //BUY

    var notification = document.getElementById("notification");
    notification.innerHTML = "You have successfully bought this item!";
    notification.style.backgroundColor = "green";

    credit -= totalCost
    document.getElementById("credit").innerHTML = "Total: <b>" + credit + " €</b>";

    credit = 0;
    document.getElementById("totalCost").innerHTML = "Total: 0";

    number = 1;
    document.getElementById("shoppingcart").innerHTML = "";
    }
    else
    {
    // not enough credit
    
    credit < totalCost
    var notification = document.getElementById("notification")
    notification.innerHTML = "You do not have enough money!";
    notification.style.backgroundColor = "red";

    }
}