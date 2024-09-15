let width = document.getElementById("width")
width.addEventListener("change", () => {
    output.style.width = `${width.value}%`
})


let height = document.getElementById("height")
height.addEventListener("change", () => {
    output.style.height = `${height.value}%`
})


let color = document.getElementById("color")
color.addEventListener("change", () => {
    console.log(color.value);
    output.style.background = `${color.value}`
})



let border = document.getElementById("border")
border.addEventListener("change", () => {
    output.style.borderRadius = `${border.value}px`
})


let reset = document.getElementById("reset")
let output = document.getElementById("output")


reset.addEventListener("click", () => {
    output.style.width = `30%`
    output.style.height = `40%`
    color.value = 'blue'
    output.style.background = `blue`
    output.style.borderRadius = `0px`

})