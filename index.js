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
        const itemDiv = createDiv("item-"+key, ["recently-viewed-item"])
        const itemImage = createImage("item-image-"+key,[ "recently-viewed-item-image"], element.image)
        const itemName = createTitle("item-name-"+key, ["recently-viewed-item-name", "truncate-overflow"], element.title)
        const itemPrice = createPrice("item-price-"+key, ["recently-viewed-item-price"], element.price)
        const itemButton = createButton("btn-item-action-"+key,["recently-viewed-item-action"], "Add to cart", ()=>{
            console.log("Item "+key+" clicked")
        })
        itemDiv.appendChild(itemImage)
        itemDiv.appendChild(itemName)
        itemDiv.appendChild(itemPrice)
        itemDiv.appendChild(itemButton)
        parent.appendChild(itemDiv)
    });
}

function createDiv(id, classNames) {
    const div = document.createElement("div")
    div.setAttribute("id", id)
    classNames.forEach(className=>{
        div.classList.add(className)
    })
    return div
}

function createImage(id, classNames, src) {
    const imageContainer = createDiv("img-container", ["image-container"])
    const image = document.createElement("img")
    image.setAttribute("id", id)
    classNames.forEach(className=>{
        image.classList.add(className)
    })
    image.setAttribute("src", src)
    imageContainer.appendChild(image)
    return imageContainer
}

function createTitle(id, classNames, title) {
    const titleDiv = createDiv(id, classNames)
    titleDiv.innerHTML = "<span class=\"span-title\">"+title+"</span>"
    return titleDiv
}

function createPrice(id, classNames, price) {
    const priceDiv = createDiv(id, classNames)
    priceDiv.innerHTML = "<span class=\"span-price\">"+price+"</span>"
    return priceDiv
}


function createButton(id, classNames, label, onClick) {
    const button = document.createElement("button")
    button.setAttribute("id", id)
    classNames.forEach(className=>{
        button.classList.add(className)
    })
    button.addEventListener("click", onClick)
    button.innerText = label
    return button
}