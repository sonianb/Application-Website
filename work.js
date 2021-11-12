const myProject1 = document.getElementById('project-1');
const myDescription1 = document.getElementById('description-1');
const closeBtnElements = document.getElementsByClassName('close-btn');

const myProject2 = document.getElementById('project-2');
const myDescription2 = document.getElementById('description-2');

const myProject3 = document.getElementById('project-3');
const myProject4 = document.getElementById('project-4');
const myProject5 = document.getElementById('project-5');
const myProject6 = document.getElementById('project-6');
const myProject7 = document.getElementById('project-7');
const myProject8 = document.getElementById('project-8');
const myProject9 = document.getElementById('project-9');
const myProject10 = document.getElementById('project-10');

const myContainers = document.getElementsByClassName('large-container');

myProject1.addEventListener("click", () => {
    myDescription1.style.display = "block";
})

myProject2.addEventListener("click", () => {
    myDescription2.style.display = "block";
})

Array.from(closeBtnElements).forEach(element => element.addEventListener("click", () => {
    Array.from(myContainers).forEach(element => element.style.display = "none")
}));
