imgClick = document.querySelector('img');

imgClick.addEventListener('click', () => {
    let div = document.querySelector('.redes')
    if(div.style.display === 'none' || div.style.display === ''){
        div.style.display = 'flex';
        imgClick.style.transform = 'rotate(270deg)'
    } else{
        div.style.display = 'none';
        imgClick.style.transform = 'rotate(90deg)'
    }
})