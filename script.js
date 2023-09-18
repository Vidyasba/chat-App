const joinbtn=document.getElementById('join-chat');
let username='';
const usernameInput=document.getElementById('username-input');
const usernameForm=document.querySelector(".form-username")
const chatroomcontainer=document.querySelector('.chatroom-container');


joinbtn.addEventListener('click',(event)=>{
    event.preventDefault();//to avoid page refresh on click this btn
username=usernameInput.value;
console.log(username);

if(username){
    usernameForm.style.display="none";
    chatroomcontainer.style.display="block";
}
})
