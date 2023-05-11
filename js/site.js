const accordionButton = document.querySelectorAll(".accbtn");
const accordionContent = document.querySelectorAll(".accontent");

accordionButton.forEach((accbtn1) => {
    accbtn1.addEventListener("click", (e) => {
        accordionContent.forEach(acc => {
            if(e.target.nextElementSibling !== acc && acc.classList.contains("active")) {
                acc.classList.remove("active");
                accordionButton.forEach(accbtn1 => accbtn1.classList.remove("active"));
            }
        });

        const acc_panel = accbtn1.parentElement.nextElementSibling;
        acc_panel.classList.toggle("active");
        accbtn1.classList.toggle("active");
    });
});

window.onclick = (e) => {
    if(!e.target.matches(".accbtn")){
        accordionButton.forEach((accbtn1) => accbtn1.classList.remove("active"));
        accordionContent.forEach((acc) => acc.classList.remove("active"));
    }
}