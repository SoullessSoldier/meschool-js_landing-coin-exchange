const remark = document.querySelector('.remark');
let height = remark.offsetHeight;    
remark.style.height = `${height}px`;

const closeRemark = () => {
    remark.style.height = `${--height}px`;
    if(height > 0) {
        requestAnimationFrame(closeRemark);
    } else {
        remark.style.display = none;
    }
};

setTimeout(closeRemark, 1000);
