/* =============================== toggle style switcher =============================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - na scrollada
windows.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
})
/* =============================== temas cores =============================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(cor)
{
    alternateStyles.forEach((style) => {
        if(cor === style.getAttribute("title"))
            {
                style.removeAttribute("disabled");
            }
            else
            {
                style.setAttribute("disabled", "true");
            }
    })
}