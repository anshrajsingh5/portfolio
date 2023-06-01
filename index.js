var toggle_btn;
var wrapper;
var hamburger_menu;


function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    wrapper = document.querySelector(".wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
    
}
const main = document.querySelector(".main");
    declare();

let dark = false;

function toggleAnimation(){
    //clone the wrapper
    dark = !dark;
    let clone = wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy"); 
    document.body.classList.add("stop-scrolling");
    main.appendChild(clone);
    clone.addEventListener("animationend", ()=>{
        document.body.classList.remove("stop-scrolling");
        wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });

}

function events(){
   toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
       wrapper.classList.toggle("active");
      });
}
events();
 

//const header = document.querySelector("header");
//window.addEventListener("scroll",function(){
   // header.classList.toggle ("sticky",this.scrollY >100);
//});

//window.onscroll = () => {
   // menubar.classList.toggle('bx-x');
   // navelist.classList.toggle('navelist');
//}


//--scripting for contect us---\\

const scriptURL = 'https://script.google.com/macros/s/AKfycbwUUByv7BfGwzq4n0WIOusUbxl9Hfc0uZdDSv6s6-hlUto9oX6Icne5s5vloPjlSD3-/exec'
const form = document.forms['contectform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => {  window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
