//

window.onload = function() {
    var addButton = document.getElementById("addButton");
    addButton.onclick = addItem;
    var removeButton = document.getElementById("removeButton");
    removeButton.onclick = removeItem;
    var clearButton = document.getElementById("clearButton");
    clearButton.onclick = clearItems;
    
    for (var key in localStorage) {
        addItemToDOM(key, localStoarge[key]);
    }
    
    window.addEventListener("storage", storageChanged, false);
};

function addItem(e) {
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    
    localStorage.setItem(key, value);
    
    addItemToDOM(key, value);
}

function removeItem(e) {
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    
    localStorage.removeItem(key);
    
    removeItemFromDOM(key);
}

function addItemToDOM(key, value) {
    var items = document.getElementById("items");
    var item = document.createElement("li");
    item.setAttribute("id", key);
    
    var span = document.createElement("span");
    span.setAttribute("class", "note");
    span.innerHTML = key + ": " + value;
    
    item.appendChild(span);
    items.appendChild(item);
}

function removeItemFromDOM(key) {
    var item = document.getElementById(key);
    item.parentNode.removeChild(item);
}

function clearItems() {
    localStorage.clear();
    var itemList = document.getElementById("items");
    var items = itemList.childNodes;
    for (var i = items.length - 1; i >= 0; i--) {
        itemList.removeChild(items[i]);
    }
}

function storageChanged(e) {
    console.log("Event: key is " + e.key);
    console.log("Event: value is " + e.value);
}