const listMenu = document.querySelectorAll('.listMenu');
const message = document.querySelector('.message');

const MY_API= '7c7a2e8a5fba7053cbf279ba513e69da';
let myLatitude, myLongitude;

navigator.geolocation.getCurrentPosition(function(pos){
    myLatitude=pos.coords.latitude;
    myLongitude=pos.coords.longitude;
})



function handleMouseIn(event){
    const subMenu=event.target.children[1];
    const innerTxt=event.target.children[0];
    subMenu.classList.remove('displayNone');
    innerTxt.style.backgroundColor="rgb(14,160,218)";
}

function handleMouseOut(event){
    const subMenu=event.target.children[1];
    const innerTxt=event.target.children[0];
    subMenu.classList.add('displayNone');
    innerTxt.style.backgroundColor="skyblue";
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

