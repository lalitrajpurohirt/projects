const wrapper=document.querySelector(".wrapper");
const loginlink=document.querySelector(".login-link");
const registerlink=document.querySelector(".register-link");
const loginbtn=document.querySelector(".btn");

loginlink.addEventListener('click',()=>{
   wrapper.classList.remove('active');
});

registerlink.addEventListener("click",()=>{
   wrapper.classList.add('active');
});

loginbtn.addEventListener("click",()=>{
   wrapper.classList.add('active-login');
});