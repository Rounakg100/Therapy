const menlist=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const closebtn=document.querySelector(".close-btn");

menubtn.onclick=()=>{
    menlist.classList.add("active");
    menubtn.classList.add("hide");
    closebtn.classList.remove("hide");
}
closebtn.onclick=()=>{
    menlist.classList.remove("active");
    menubtn.classList.remove("hide");
    closebtn.classList.add("hide");
}

