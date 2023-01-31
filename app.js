function ShowBurger() {
    if (document.querySelector(".bg__active")) {
    document.querySelector(".bg").classList.remove("bg__active") 
    }else{
    document.querySelector(".bg").classList.add("bg__active")
}
}