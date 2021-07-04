(function() {
    fetch("data.json")
    .then(response => response.json())
    .then(json => {
        console.log(json)
        const container = document.getElementById("app-container")
        addRecentlyViewed(container, json)
    });
})()

function addRecentlyViewed(parent, items) {
    items.forEach((element, key) => {
        const itemDiv = createDiv("item-"+key, "recently-viewed-item")
        const itemImage = createImage("item-image-"+key, "recently-viewed-item-image", element.image)
        const itemName = createTitle("item-name-"+key, "recently-viewed-item-name", element.title)
        const itemPrice = createPrice("item-price-"+key, "recently-viewed-item-price", element.price)
        const itemButton = createButton("btn-item-action-"+key,"recently-viewed-item-action", "Add to cart", ()=>{
            console.log("Item "+key+" clicked")
        })
        itemDiv.appendChild(itemImage)
        itemDiv.appendChild(itemName)
        itemDiv.appendChild(itemPrice)
        itemDiv.appendChild(itemButton)
        parent.appendChild(itemDiv)
    });
}

function createDiv(id, className) {
    const div = document.createElement("div")
    div.setAttribute("id", id)
    div.classList.add(className)
    return div
}

function createImage(id, className, src) {
    const image = document.createElement("img")
    image.setAttribute("id", id)
    image.classList.add(className)
    image.setAttribute("src", src)
    return image
}

function createTitle(id, className, title) {
    const titleDiv = createDiv(id, className)
    titleDiv.innerHTML = "<span class=\"spn-title\">"+title+"</span>"
    return titleDiv
}

function createPrice(id, className, price) {
    const priceDiv = createDiv(id, className)
    priceDiv.innerHTML = "<span class=\"spn-price\">"+price+"</span>"
    return priceDiv
}


function createButton(id, className, label, onClick) {
    const button = document.createElement("button")
    button.setAttribute("id", id)
    button.classList.add(className)
    button.addEventListener("click", onClick)
    button.innerText = label
    return button
}