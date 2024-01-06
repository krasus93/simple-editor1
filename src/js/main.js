

const save = document.querySelector(".button__save--js");

const load = document.querySelector(".button__load--js");

const placeholder = document.querySelector('.text__area--js')

    
const saveTextArea = () => {
    const placeholder = document.querySelector('[placeholder="Leave a comment..."]');
    localStorage.setItem("myData", placeholder.value);
    console.log(placeholder)
};

save.addEventListener('click',saveTextArea);

const loadTextArea = () => {
    let fromStorage = localStorage.getItem('myData');
    placeholder.value = fromStorage;
};

load.addEventListener('click',loadTextArea);



