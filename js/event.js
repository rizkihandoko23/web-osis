const eventModal =
document.getElementById("eventModal");

const openButtons =
document.querySelectorAll(".detail-event");

const closeButton =
document.querySelector(".close-event");

openButtons.forEach(btn => {

btn.addEventListener("click", () => {

eventModal.style.display = "block";

});

});

closeButton.addEventListener("click", () => {

eventModal.style.display = "none";

});

window.addEventListener("click",(e)=>{

if(e.target === eventModal){

eventModal.style.display = "none";

}

});