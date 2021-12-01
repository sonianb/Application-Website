const myStart = document.getElementById('start-project');
const myStartDescription = document.getElementById('start-description')
const closeBtnElements = document.getElementsByClassName('close-btn');

const myProject1 = document.getElementById('project-1');
const myDescription1 = document.getElementById('description-1');

const myProject2 = document.getElementById('project-2');
const myDescription2 = document.getElementById('description-2');

const myProject3 = document.getElementById('project-3');
const myDescription3 = document.getElementById('description-3');

const myProject4 = document.getElementById('project-4');
const myDescription4 = document.getElementById('description-4');

const myProject5 = document.getElementById('project-5');
const myDescription5 = document.getElementById('description-5');

const myProject6 = document.getElementById('project-6');
const myDescription6 = document.getElementById('description-6');

const myProject7 = document.getElementById('project-7');
const myDescription7 = document.getElementById('description-7');

const myProject8 = document.getElementById('project-8');
const myDescription8 = document.getElementById('description-8');

const myProject9 = document.getElementById('project-9');
const myDescription9 = document.getElementById('description-9');

const myProject10 = document.getElementById('project-10');
const myDescription10 = document.getElementById('description-10');

const myContainers = document.getElementsByClassName('large-container');

//create a function that closes all the myContainers
function closeAll() {
    Array.from(myContainers).forEach(element => element.style.display = "none")
};

//call the closeAll function each time before the dialog box opens.  

myStart.addEventListener("click", () => {
    closeAll();
    myStartDescription.style.display = "block";
})

myProject1.addEventListener("click", () => {
    closeAll();
    myDescription1.style.display = "block";
})

myProject2.addEventListener("click", () => {
    closeAll();
    myDescription2.style.display = "block";
    myDescription2.style.background = "#b6eebd";
    
})

myProject3.addEventListener("click", () => {
    closeAll();
    myDescription3.style.display = "block";
    myDescription3.style.background = "#bae1ff";
})

myProject4.addEventListener("click", () => {
    closeAll();
    myDescription4.style.display = "block";
})

myProject5.addEventListener("click", () => {
    closeAll();
    myDescription5.style.display = "block";
    myDescription5.style.background = "#b6eebd";
})

myProject6.addEventListener("click", () => {
    closeAll();
    myDescription6.style.display = "block";
    myDescription6.style.background = "#bae1ff"
})

myProject7.addEventListener("click", () => {
    closeAll();
    myDescription7.style.display = "block";
})

myProject8.addEventListener("click", () => {
    closeAll();
    myDescription8.style.display = "block";
    myDescription8.style.background = "#b6eebd";
})

myProject9.addEventListener("click", () => {
    closeAll();
    myDescription9.style.display = "block";
    myDescription9.style.background = "#bae1ff"
})

myProject10.addEventListener("click", () => {
    closeAll();
    myDescription10.style.display = "block";
})


//call the closeAll function on all the buttons
Array.from(closeBtnElements).forEach(element => element.addEventListener("click", () => {
    closeAll();
}));
