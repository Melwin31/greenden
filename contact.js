var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
  function submitForm(event) {
  event.preventDefault(); 

  const name = document.querySelector('input[placeholder="Name"]').value;

  alert("Thank you, " + name + "! Your form have been sccessfully registered");

 
  document.getElementById("contactForm").reset();
}


