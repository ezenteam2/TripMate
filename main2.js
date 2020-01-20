const listMenu = document.querySelectorAll('.listMenu');
const message = document.querySelector('.message');

const MY_API= '7c7a2e8a5fba7053cbf279ba513e69da';
let myLatitude, myLongitude;

navigator.geolocation.getCurrentPosition(function(pos){
    myLatitude=pos.coords.latitude;
    myLongitude=pos.coords.longitude;
})



function handleMouseIn(event){
    const parent = event.target.parentNode;
    console.log(parent);
    const subMenu=event.target.children[1];
    const innerTxt=event.target.children[0];
    subMenu.classList.remove('displayNone');
    innerTxt.style.backgroundColor='#f6f9fc';
    parent.style.backgroundColor='snow';
}

function handleMouseOut(event){
    const parent = event.target.parentNode;
    console.log(parent);
    const subMenu=event.target.children[1];
    const innerTxt=event.target.children[0];
    subMenu.classList.add('displayNone');
    parent.style.backgroundColor='transparent';
    innerTxt.style.backgroundColor=white;
}

function displayMessage(){
    let ranNum = parseInt(Math.random()*1000);
    let innerMessage='';
    if (ranNum<10){
        innerMessage=`00${ranNum}`;
    } else if(ranNum<100){
        innerMessage=`0${ranNum}`;
    } else {
        innerMessage=`${ranNum}`;
    }
    message.innerHTML=`지금 주변에 ${innerMessage} 명의 회원들이 여행 메이트를 찾고 있습니다!!`;
}


listMenu.forEach(element =>{
    element.addEventListener("mouseenter", handleMouseIn);
    element.addEventListener("mouseleave", handleMouseOut);
})
setInterval(displayMessage, 1000);

