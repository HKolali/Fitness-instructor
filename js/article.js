let article = [
    {id:1, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},
    {id:2, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},
    {id:3, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},
    {id:4, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},
    {id:5, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},
    {id:6, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},
    {id:7, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},
    {id:8, title:"effects off a suger free amino acid", desc: "", image:"../image/article/suger.png", link:""},

]

const articleWrap = document.querySelector(".articleWrap")

window.addEventListener('load', () => {
    
    article.forEach(element => {
        articleWrap.innerHTML +=                 
        `
        <div class='articleItem'>
            <div class='articleContent'>
                <img class='articleImage' src=${element.image} alt=${element.title} />
                <h3 class='articleTitle'>${element.title}</h3>
                <p class='articleDesc'>${element.desc}</p>
            </div>
        </div>
       `
    })
})