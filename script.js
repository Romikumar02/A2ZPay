const element = document.getElementById('hoverElement');
const elementcontent = document.getElementById('service-content');

function clickonhover(){
  

  element.click();
  
  element.style.outline='none';
}
element.addEventListener('mouseover',clickonhover);

elementcontent.addEventListener('mouseleave',clickonhover)

