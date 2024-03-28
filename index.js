const countvalue = document.querySelector('#counter');

const  increment =()=>{
    let value = parseInt(countvalue.innerText);
    value = value + 1;
    countvalue.innerText = value;

};

const decrement = ()=>{
    let value = parseInt (countvalue.innerText);
    value = value - 1;
    countvalue.innerText = value;

};


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openmodal = ()=>{
    console.log('modal is open');
    modal.classList.add('active');
    overlay.classList.add('overlayactive');

};

const closemodal = ()=>{
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
};
