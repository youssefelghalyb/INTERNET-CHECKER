const title = document.getElementById('title') ;
const ul = document.querySelector('ul');
const btn = document.querySelector('button')


window.onload = () => {
    if(window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}


window.addEventListener("online" , ()=>{
    onLine();
});
window.addEventListener("offline" , ()=>{
    offLine();
});

function onLine(){
    title.innerHTML = "Online Now";
    title.style.color = 'rgb(22, 146, 38)';
    ul.classList.add('hide');
    btn.classList.add('hide')
}

function offLine(){
    title.innerHTML = "Offline Now";
    title.style.color = '#555';
    ul.classList.remove('hide');
    btn.classList.remove('hide')
}


btn.addEventListener('click' , ()=>{
    window.location.reload()
})