let menu = [
    {id:1, title:"صفحه اصلی", icon:"./image/menu-icon/home.png" , isActive:true, to:"/"},
    {id:2, title:"خدمات", icon:"./image/menu-icon/service.png" , isActive:false, to:"/services"},
    {id:3, title:"مکمل‌های ورزشی", icon:"./image/menu-icon/herbal.png" , isActive:false, to:"/supplement"},
    {id:4, title:"آموزش حرکات", icon:"./image/menu-icon/movement.png" , isActive:false, to:"/movement"},
    {id:5, title:"تغذیه", icon:"./image/menu-icon/diet.png" , isActive:false, to:"/nutrition"},
    {id:6, title:"مقالات", icon:"./image/menu-icon/news.png" , isActive:false, to:"/articles"},
    {id:7, title:"ارتباط با من", icon:"./image/menu-icon/contact.png" , isActive:false, to:"/contact-me"}
]

const menuWrapper = document.querySelector(".menuWrapper")
const closeMenuIcon = document.querySelector(".closeMenuIcon")
const menuMobile = document.querySelector(".menu")

window.addEventListener('load', () => {
    
    menu.forEach(element => {
        menuWrapper.innerHTML +=                 
        `
        <a href=${element.to} class='link'>
           <div class= ${element.isActive? 'menuItem active' : 'menuItem'}>
               <span class='menuTitle'>${element.title}</span>
               <img src=${element.icon} class='menuIcon'/>
           </div>
       </a>
       `
    })
})

closeMenuIcon.addEventListener('click', () => {
    menuMobile.style.display = 'flex'
})