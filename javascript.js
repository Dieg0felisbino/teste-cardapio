let largura = window.screen.width
console.log(largura)
let navButton = window.document.getElementById("navButton")
let closeBtn = window.document.querySelector(".closebtn")
let logoCacau = window.document.querySelector("#logo-cacau")


//verificador de largura para esconder ou mostrar botões de menu e logo Cacau Show
if (largura > 1000){
  navButton.classList.add("hide")
  closeBtn.classList.add("hide")
  logoCacau.classList.add("hide")
} else{
  navButton.classList.remove("hide")
  closeBtn.classList.remove("hide")
  logoCacau.classList.remove("hide")

}


//função abrir e fechar menu
function openNav(){
  document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}
//scroll suave
const menuItens = document.querySelectorAll('#menu a[href^="#"]');
console.log(menuItens);

menuItens.forEach(item =>{
    item.addEventListener('click' , scollToIdOnClick);
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
 }

function scollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 70;

    //verificador de largura para fechar menu
    console.log(largura)
    if(largura < 1000){
      scrollToPosition(to)
      document.getElementById("myNav").style.width = "0%";
    } else{
      scrollToPosition(to)
    }
}

function scrollToPosition(to){
    
smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};