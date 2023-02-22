function ShowBurger() {
    if (document.querySelector(".bg__active")) {
    document.querySelector(".bg").classList.remove("bg__active") 
    }else{
    document.querySelector(".bg").classList.add("bg__active")
}
}
function ScrollServices() {
    let element = document.querySelector(".main__services")
window.scroll({
    left:0,
    top: element.offsetTop,
    behavior: "smooth"
})
}
function ScrollHome() {
window.scroll({
    left:0,
    top: 0,
    behavior: "smooth"
})
}
function ScrollAbout() {
    let element = document.querySelector(".main__about")
window.scroll({
    left:0,
    top: element.offsetTop,
    behavior: "smooth"
})
}
function ScrollProject() {
    let element = document.querySelector(".projects")
window.scroll({
    left:0,
    top: element.offsetTop,
    behavior: "smooth"
})
}
function ScrollContact() {
    let element = document.querySelector(".contact")
window.scroll({
    left:0,
    top: element.offsetTop,
    behavior: "smooth"
})
}