// grabbing container div
const container = document.getElementById("container")

// adding css rules to container div
container.style.cssText = "max-width: 960px; display: grid; grid-template-columns: repeat(16, 15px); grid-template-rows: repeat(16, 15px); gap: 5px; justify-content: center; margin: auto; border: 2px solid white;"


let numBox = 16;
const generateGrid = () => {
    // bullds div's needed for 16 x 16 grid layout
    for (let i = 0; i < numBox * numBox; i++) {
        // creates div 
        const div = document.createElement("div")
        div.style.cssText = "width: 20px; height: 20px; border: .5px solid white; border-radius: 180px;"
        // adding event lister to add a class in order to change background-color
        div.addEventListener("mouseenter", e => div.classList.add("hover"))
        div.addEventListener("click", e => div.classList.remove("hover"))
        // adding div to container

        container.appendChild(div)
    }
}

generateGrid(numBox);

// grabbing the button 
const sketchpadBtn = document.querySelector("#sketch-pad-size")
// adding an eventListener
sketchpadBtn.addEventListener("click", () => {
    // assigning input to a variable
    numBox = prompt("choose size: ")

    return generateGrid(numBox)
})