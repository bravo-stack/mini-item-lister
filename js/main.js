const form = document.querySelector("#addForm")
const itemList = document.querySelector("#items")
const filter = document.querySelector("#filter")

// Form submit  Event
form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get input value
    const inputItem = document.querySelector("input[type='text']")

    if(!inputItem.value) {

    } else {
        // Create new li element and add a class to it
        const newLi = document.createElement("li")
        newLi.classList.add("list-group-item")
        
        // Append textNode to the new li
        newLi.appendChild(document.createTextNode(inputItem.value))

        // Add delete button
        const delBtn = document.createElement("button")
        delBtn.className = "delete-btn"
        delBtn.appendChild(document.createTextNode("x"))

        // append delete button to new li
        newLi.appendChild(delBtn)

        // Add new li to the items UL
        itemList.appendChild(newLi)

        // clear input tag
        inputItem.value = ""
    }

})

// Item List Event
itemList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")) {
        if(confirm('Are you Sure?' )){
            itemList.removeChild(e.target.parentElement)
        }
    }
})

// Filter Event
filter.addEventListener("keyup", (e) => {

    // conver to lowercase
    let text = e.target.value.toLowerCase()

    // Get lis
    const  items = itemList.querySelectorAll(".list-group-item")

    // iterate through items
    items.forEach((item) => {
        let itemName = item.firstChild.textContent
        itemName = itemName.toLowerCase()
        // console.log(itemName)
        // console.log(itemName)
        if(itemName.includes(text)) {
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    })


})