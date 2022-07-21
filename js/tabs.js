'use strict';

const advantageBtnItems = document.querySelectorAll('.advantage__btn'),
    advantageItemContentItems = document.querySelectorAll('.advantage__item-content');

advantageBtnItems.forEach((el, indexBtn) => {
    el.addEventListener('click', () => {
        advantageItemContentItems.forEach((elContent, indexContent) =>{
            if (indexBtn === indexContent){
                advantageBtnItems[indexContent].classList.add('advantage__btn_active');
                advantageItemContentItems[indexContent].classList.add('advantage__item-content_active');
            } else {
                advantageBtnItems[indexContent].classList.remove('advantage__btn_active');
                advantageItemContentItems[indexContent].classList.remove('advantage__item-content_active');
            }
        });
    });
})