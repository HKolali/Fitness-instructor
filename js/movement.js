let movement = [
    {id:1, title:"حرکات سینه", desc: "", image:"../image/movement/chest.png", link:""},
    {id:2, title:"حرکات جلو بازو", desc: "", image:"../image/movement/biceps.png", link:""},
    {id:3, title:"حرکات ساعد", desc: "", image:"../image/movement/forearms.png", link:""},
    {id:4, title:"حرکات سرشانه", desc: "", image:"../image/movement/front-shoulders.png", link:""},
    {id:5, title:"حرکات شکم", desc: "", image:"../image/movement/abdominals.png", link:""},
    {id:6, title:"حرکات پهلو", desc: "", image:"../image/movement/obliques.png", link:""},
    {id:7, title:"حرکات جلو ران", desc: "", image:"../image/movement/quads.png", link:""},
    {id:8, title:"حرکات ساق پا", desc: "", image:"../image/movement/calves.png", link:""},
    {id:9, title:"حرکات کول", desc: "", image:"../image/movement/traps.png", link:""},
    {id:11, title:"حرکات ذوزنقه‌ای", desc: "", image:"../image/movement/traps-middle.png", link:""},
    {id:12, title:"حرکات پایین کمر", desc: "", image:"../image/movement/lowerback.png", link:""},
    {id:13, title:"حرکات زیر بغل", desc: "", image:"../image/movement/lats.png", link:""},
    {id:14, title:"حرکات پشت بازو", desc: "", image:"../image/movement/triceps.png", link:""},
    {id:15, title:"حرکات باسن", desc: "", image:"../image/movement/glutes.png", link:""},
    {id:16, title:"حرکات پشت ران", desc: "", image:"../image/movement/hamstrings.png", link:""}
]

const movementWrap = document.querySelector(".movementWrap")

window.addEventListener('load', () => {
    
    movement.forEach(element => {
        movementWrap.innerHTML +=                 
        `
        <div class='movementItem'>
            <div class='movementContent'>
                <img class='movementImage' src=${element.image} alt=${element.title} />
                <h3 class='movementTitle'>${element.title}</h3>
                <p class='movementDesc'>${element.desc}</p>
            </div>
        </div>
       `
    })
})