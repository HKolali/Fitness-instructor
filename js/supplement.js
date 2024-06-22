let supplement = [
    {id:1, title:"آمینو اسیدها", desc: "", image:"../image/supplement/amino.png", link:""},
    {id:2, title:"بتا الانین", desc: "", image:"../image/supplement/beta-alanine.png", link:""},
    {id:3, title:"کراتین", desc: "", image:"../image/supplement/creatine.png", link:""},
    {id:4, title:"کاهش وزن", desc: "", image:"../image/supplement/fat-burner.png", link:""},
    {id:5, title:"افزایش وزن", desc: "", image:"../image/supplement/gainer.png", link:""},
    {id:6, title:"گلوتامین و ریکاوری", desc: "", image:"../image/supplement/glutamine.png", link:""},
    {id:7, title:"اچ ام بی", desc: "", image:"../image/supplement/hmb.png", link:""},
    {id:8, title:"ویتامین و ریزمغذی", desc: "", image:"../image/supplement/multivitamin.png", link:""},
    {id:9, title:"امگا 3", desc: "", image:"../image/supplement/omega-3.png", link:""},
    {id:10, title:"پمپ و انرژی‌زا", desc: "", image:"../image/supplement/pre-workout.png", link:""},
    {id:11, title:"تست بوستر", desc: "", image:"../image/supplement/testbooster.png", link:""},
    {id:12, title:"پروتئین‌ها", desc: "", image:"../image/supplement/whey.png", link:""},
]

const supplementWrap = document.querySelector(".supplementWrap")

window.addEventListener('load', () => {
    
    supplement.forEach(element => {
        supplementWrap.innerHTML +=                 
        `
        <div class='supplementItem'>
            <div class='supplementContent'>
                <img class='supplementImage' src=${element.image} alt=${element.title} />
                <h3 class='supplementTitle'>${element.title}</h3>
                <p class='supplementDesc'>${element.desc}</p>
            </div>
        </div>
       `
    })
})