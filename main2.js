const listMenu = document.querySelectorAll('.listMenu');
const message = document.querySelector('.message');
const videoTag = document.querySelector('.video');


const MY_API= '7c7a2e8a5fba7053cbf279ba513e69da';
let myLatitude, myLongitude;

// 경도 위도 가져오는 함수
// navigator.geolocation.getCurrentPosition(function(pos){
//     myLatitude=pos.coords.latitude;
//     myLongitude=pos.coords.longitude;
// })



function handleMenuIn(event){
    const parentMenu=event.target.parentElement;
    const smallMenu = event.target.children[1];
    const bigMenu=event.target.children[0];
    parentMenu.style.backgroundColor="#f6f9fc";
    parentMenu.style.borderBottom="solid 1px";
    bigMenu.style.color="black";
    bigMenu.style.backgroundColor="rgb(245,245,245)";
    smallMenu.classList.remove('displayNone');
}

function handleMenuOut(event){
    const parentMenu=event.target.parentElement;
    const smallMenu = event.target.children[1];
    const bigMenu=event.target.children[0];
    parentMenu.style.backgroundColor="transparent";
    parentMenu.style.borderBottom="none";
    smallMenu.classList.add('displayNone');
    bigMenu.style.color="gray";
    bigMenu.style.backgroundColor="transparent";
}

function displayMessage(){
    let ranNum = parseInt(Math.random()*100);
    let innerMessage='';
    if (ranNum<10){
        innerMessage=`${ranNum}0`;
    } else if(ranNum<100){
        innerMessage=`${ranNum}`;
    } else {
        innerMessage=`${ranNum}`;
    }
    message.innerHTML=`지금 주변에 ${innerMessage}명의 회원들이 여행 메이트를 찾고 있습니다!!`;
}

function handleListIn(event){
    const innerList = event.target;
    innerList.style.color="orange";
}

function handleListOut(event){
    const innerList = event.target;
    innerList.style.color="black";
}

listMenu.forEach(element =>{
    element.addEventListener("mouseenter", handleMenuIn);
    element.addEventListener("mouseleave", handleMenuOut);
})

listMenu.forEach(element=>{
    const listElement=element.querySelectorAll('li');
    listElement.forEach(li=>{
        li.addEventListener("mouseenter", handleListIn);
        li.addEventListener("mouseleave", handleListOut);
    })
})

setInterval(displayMessage, 1000);

