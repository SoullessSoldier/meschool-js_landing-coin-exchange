'use strict';

const overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.modal__close'),
    heroBtn = document.querySelector('.main__hero-btn'),
    form = document.querySelector('form'),
    modalTitle = document.querySelector('.modal__title');

const URL = 'https://api-form-order.herokuapp.com/api/order';

const showResponse = (data) => {
    modalTitle.textContent = `
    ${data.name}, ваша заявка успешно отправлена, номер: ${data.id}`;
    form.remove();

    setTimeout(() => {
        overlay.classList.remove('overlay_open');
        modal.classList.remove('modal_open');
    }, 2000);
};

setTimeout(() => {
    overlay.style.cssText = `
    transition-property = opacity, visibility;
    transition-timing-function = ease-in-out;
    transition-duration = '0.36s';
`;
modal.style.cssText = `
    transition-property = opacity, visibility;
    transition-timing-function = ease-in-out;
    transition-duration = '0.36s';
`;
}, 360);


heroBtn.addEventListener('click', () => {
    overlay.classList.add('overlay_open');
    modal.classList.add('modal_open');
});


overlay.addEventListener('click', (e) => {
    if(e.target === overlay || e.target.closest('.modal__close')){
        overlay.classList.remove('overlay_open');
        modal.classList.remove('modal_open');
    }    
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = {
        name: form.name.value,
        surname: form.surname.value,
        tel: form.tel.value
    }
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => showResponse(data));
})