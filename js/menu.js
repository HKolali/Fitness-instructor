let menu = [
    {id:1, title:"صفحه اصلی", icon:"../image/menu-icon/home.png" , isActive:true, to:"/index.html"},
    {id:2, title:"خدمات", icon:"../image/menu-icon/service.png" , isActive:false, to:"/pages/services.html"},
    {id:3, title:"مکمل‌های ورزشی", icon:"../image/menu-icon/herbal.png" , isActive:false, to:"/pages/supplement.html"},
    {id:4, title:"آموزش حرکات", icon:"../image/menu-icon/movement.png" , isActive:false, to:"/pages/movement.html"},
    {id:5, title:"تغذیه", icon:"../image/menu-icon/diet.png" , isActive:false, to:"/pages/nutrition.html"},
    {id:6, title:"مقالات", icon:"../image/menu-icon/news.png" , isActive:false, to:"/pages/articles.html"},
    {id:7, title:"ارتباط با من", icon:"../image/menu-icon/contact.png" , isActive:false, to:"/pages/contact-me.html"}
]

const menuWrapper = document.querySelector(".menuWrapper")
const menuMobileWrapper = document.querySelector(".menuMobileWrapper")
const openMenuIcon = document.querySelector(".openMenuIcon")
const closeMenuIcon = document.querySelector(".closeMenuIcon")
const menuMobile = document.querySelector(".menuMobile")
const menuItem = document.getElementsByClassName("menuItem")

window.addEventListener('load', () => {
    
    menu.forEach(element => {
        menuWrapper.innerHTML +=                 
        `
        <a href=${element.to} class='link'>
           <div class='menuItem'>
               <span class='menuTitle'>${element.title}</span>
               <img src=${element.icon} class='menuIcon'/>
           </div>
       </a>
       `
    })

    menu.forEach(element => {
        menuMobileWrapper.innerHTML +=                 
        `
        <a href=${element.to} class='link'>
           <div class='menuItem'>
               <span class='menuTitle'>${element.title}</span>
               <img src=${element.icon} class='menuIcon'/>
           </div>
       </a>
       `
    })

    menuMobileWrapper.innerHTML +=                 
        `<a href='' class='link'></a>`
})

openMenuIcon.addEventListener('click', () => {
    menuMobile.style.display = 'flex';
    
})

closeMenuIcon.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    
})