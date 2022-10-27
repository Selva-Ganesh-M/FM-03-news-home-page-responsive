
const func=(x)=>{
    if(x.matches) {
        document.getElementById("nav-ul").classList.add("desktop-menu-ul")
    }
}

 x=window.matchMedia("(min-width: 576px)");
 func(x)
 x.addListener(func);

const handleOpenEvent=(event)=>{
    console.log("open event detected");
    const target= document.getElementById("nav-ul");
    target.style.display = "block";

    target.classList.add("mobile-menu-ul");

    const container = document.getElementsByClassName("container");

    for (let i=0; i<container.length; i++) {
        container[i].classList.add("container-blur");
    }

    const lis = target.getElementsByTagName("li");
    for (let i=0; i<lis.length; i++){
        if(lis[i].id!=="close"){
            lis[i].classList.add("mobile-menu-li");
        }
    }
}

const handleCloseEvent=()=>{
    const target= document.getElementById("nav-ul");
    target.style.display = "none";

    target.classList.remove("mobile-menu-ul");
    const container = document.getElementsByClassName("container");

    for (let i=0; i<container.length; i++) {
        container[i].classList.remove("container-blur");
    }

    const lis = target.getElementsByTagName("li");
    for (let i=0; i<lis.length; i++){
        lis[i].classList.remove("mobile-menu-li");
    }
}