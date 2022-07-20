const container = document.getElementById("container")
container.style.cssText = "display: grid; grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr); gap: 0; width: 100%; height: 100%;"

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div")
    div.classList.add("canvas")
    div.textContent = "hi";
    // div.canvas.style.cssText = "height: 100%; width: 100%; background-color:hover: white;"
    container.appendChild(div)
}

