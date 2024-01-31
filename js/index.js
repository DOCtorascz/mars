const popupContent = document.querySelector('.popup')

const positionBg = (event) => {
  const nameClassPopup = popupContent.className;
  
  if (nameClassPopup !== 'popup open') {
    let movingBg = document.querySelector('.wrapper-bg');
    let movingBgTextContent = document.querySelector('.mars__content');
    let numPercent = 3;
  
    let mouseX = (event.clientX / 100) * numPercent;
  
    if (!(mouseX < 0 || mouseX > 100)) {
      movingBg.style.backgroundPositionX = mouseX + '%';
      movingBgTextContent.style.backgroundPositionX = mouseX + '%';
    } 
  }
}

document.addEventListener('mousemove', positionBg);

const btnTickets = document.querySelector('.header__nav-btn')
const btnCloseTickets = document.querySelector('.popup__close-btn')

const popupTicket = () => {
  popupContent.style.animation = 'popupTransparent 1s forwards';
  popupContent.className = 'popup open';
}

const popupCloseTicket = () => {
  popupContent.style.animation = 'popupTransparentClose 1s reverse forwards';
  popupContent.className = 'popup close';
}

btnTickets.addEventListener('click', popupTicket)
btnCloseTickets.addEventListener('click', popupCloseTicket)