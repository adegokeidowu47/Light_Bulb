
const body = document.querySelector("#main-body");
      button = document.querySelector('#btn');
      lightOff = document.querySelector('.light-off');
      lightOn = document.querySelector('.light-on');
      msg = document.querySelector('.msg');
     


button.addEventListener('click', () =>{
  body.classList.toggle('dark');

  if(body.classList.contains("dark")){
    lightOff.classList.add('dark');
    lightOn.classList.add('dark');  
    msg.innerHTML = 'Light On';
    msg.style.color = 'white';
}

else{
    lightOn.classList.remove('dark');  
    lightOff.classList.remove('dark');
    msg.innerHTML = 'Light off';
    msg.style.color = '#ddd';

}
});
     
// toggle.addEventListener("click",() =>{

//   return;


