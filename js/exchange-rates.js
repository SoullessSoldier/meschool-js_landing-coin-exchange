'use strict';

const exchangeRatesList = document.querySelector('.exchange-rates__list');

const socket = new WebSocket('ws://web-socket-current.herokuapp.com');

const renderExchange = (wrapper, data) => {
    const {from , to, rate, change} = JSON.parse(data);
    const li = document.createElement('li');
    li.classList.add('exchange-rates__item',
    change === 1 ? 'exchange-rates__item_up' : 'exchange-rates__item_down');
    const spanCurrency = document.createElement('span');
    const spanValue = document.createElement('span');
    spanCurrency.classList.add('exchange-rates__currency');
    spanCurrency.textContent = `${from}/${to}`;
    spanValue.classList.add('exchange-rates__value');
    spanValue.textContent = `${rate}`;

    li.append(spanCurrency, spanValue);

    wrapper.prepend(li);

    if(wrapper.children.length > 4){
        wrapper.children[4].remove();
    }
    /*
    <li class="exchange-rates__item exchange-rates__item_up">
        <span class="exchange-rates__currency">RUB/AUD</span>
        <span class="exchange-rates__value">25.59</span>
    </li>
    
    */
};

socket.addEventListener('message', (event) => {
    renderExchange(exchangeRatesList, event.data);
});

socket.addEventListener('error', (error) => {
    console.error(error);
});