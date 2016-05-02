//

var lastReportTime = 0;

window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
};

function handleRefresh() {
    console.log("here");
    var url = "http://gumball.wickedlysmart.com" + "?callback=updateSales" + "&random=" + (new Date()).getTime();
    var newScriptElement = document.createElement("script");
    newScriptElement.setAttribute("src", url);
    newScriptElement.setAttribute("is", "jsonp");
    var oldScriptElement = document.getElementById("jsonp");
    var head = document.getElementsByTagName("head")[0];
    if (oldScriptElement == null) {
        head.appendChild(newScriptElement);
    }
    else {
        head.replaceChild(newScriptElement, oldScriptElement);
    }
}

function updateSales(sales) {
    var salesDiv = document.getElementById("sales");
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
    }
    
    if (salesDiv.childElementCount == 0 ) {
        salesDiv.appendChild(div);
    }
    else {
        salesDiv.insertBefore(div, salesDiv.firstChild);
    }
    
    if (sales.length > 0) {
        lastReportTime = sales[sales.length - 1].time;
    }
}