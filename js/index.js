const hamburger = document.querySelector("#ham"); //seleting hamburger menu
const menu = document.querySelector("nav"); //selcting navigation menu
const icon = document.querySelector(".fa-solid"); //selection hamburger icon
//Adding event listener on hamburger menu
hamburger.addEventListener("click", function () {

    menu.classList.toggle("active"); //adding new class in navigation menu when we click on hamburger menu

    //Displaying the cross icon after 6sec
    setTimeout(() => {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    }, 600);

})

//Selecting all the nav links
const link = document.querySelectorAll(".link");

for (let i = 0; i < link.length; i++) {
    //Adding event listener on all the links, when we click on links it hides the navigation menu
    link[i].addEventListener("click", () => {
        menu.classList.toggle("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    })
}

const header = document.querySelector("header"); //selection header part
//Making Navbar Sticky
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY);
})

//Selecting home section
const homebg = document.querySelector("#Home");

//Storing multiple images in an array form
const homeImg = ["../img/3D.jpg", "../img/12.jpg", "../img/6.jpg", "../img/17.jpg"];

let i = 0;
setTimeout(function changeBgImage() {
    const img = homeImg[i];
    homebg.style.background = `rgba(0, 0, 0, 0.5) url("${img}") no-repeat center center/cover`;
    i++;
    setTimeout(changeBgImage, 3000); //Calling function again & again using recursive approach
    if (i === homeImg.length) {
        i = 0;
    }
}, 3000);

//Adding dynamic behavior on home button
const homeContent = document.getElementById('home-context');
const buttonClick = document.getElementById('home-click');
const buttonClose = document.getElementById('home-close');
buttonClose.style.display = 'none';

buttonClick.addEventListener('click', () => {
    if (homeContent.style.display = 'none') {
        homeContent.style.display = 'block';
    } else {
        homeContent.style.display = 'none';
    }
    buttonClick.style.display = 'none';
    buttonClose.style.display = 'block';
});
buttonClose.addEventListener('click', () => {
    buttonClose.style.display = 'none';
    buttonClick.style.display = 'block';
    if (homeContent.style.display = 'block') {
        homeContent.style.display = 'none';
    } else {
        homeContent.style.display = 'none';
    }
});