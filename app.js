function ShowBurger() {
    if (document.querySelector(".bg__active")) {
    document.querySelector(".bg").classList.remove("bg__active") 
    }else{
    document.querySelector(".bg").classList.add("bg__active")
}
}
function Scroll() {
    console.log(123);
const el = document.getElementById('main__services');
el.topOfPageRef.current.scrollIntoView(alignToTop);
}