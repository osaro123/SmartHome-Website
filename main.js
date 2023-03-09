const menuBtn = document.querySelector(".menu-btn");
const navItems = document.querySelector(".nav__items");
const closeBtn = document.querySelector(".close-btn");
const faqs = document.querySelectorAll(".faq");

menuBtn.addEventListener("click", ()=>{
    navItems.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})

closeBtn.addEventListener("click", ()=>{
    navItems.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
})

faqs.forEach(faq => {
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("open");
        const icon = faq.querySelector(".faq__icon i");

        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})