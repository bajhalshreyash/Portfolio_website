console.log("hello")
document.querySelector('.cross').style.display='none';
document.querySelector('.menu').addEventListener("click", ()=>{

    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.show').style.display='inline'
        document.querySelector('.cross').style.display='none'
   
    }
    else{
        document.querySelector('.show').style.display='none'
        setTimeout(() => {

        document.querySelector('.cross').style.display='inline'
        },300)
    }
})