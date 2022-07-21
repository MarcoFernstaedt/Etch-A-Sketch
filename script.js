// grabbing container div
const container = document.getElementById("container")

// adding css rules to container div
container.style.cssText = "height: 100%; display: grid; grid-template-columns: repeat(16, 15px); grid-template-rows: repeat(16, 15px); gap: none; justify-content: center; align-items: flex-end; border: 20px solid black;"

// bullds div's needed for 16 x 16 grid layout
for (let i = 0; i < 256; i++) {
    // creates div 
    const div = document.createElement("div")
    div.style.cssText = "width: 20px; height: 20px; border: .5px solid black; border-radius: 180px;"
    // adding event lister to add a class in order to change background-color
    div.addEventListener("mouseenter", e => div.classList.add("hover"))
    div.addEventListener("click", e => div.classList.remove("hover"))

    // adding div to container
    container.appendChild(div)
}