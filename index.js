let imageArray = [
    {
        name: "bomb",
        img : "images/bomb.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "bomb",
        img : "images/bomb.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "bomb",
        img : "images/bomb.jpg"
    },
    {
        name: "bomb",
        img : "images/bomb.jpg"
    },
    {
        name: "bomb",
        img : "images/bomb.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "bomb",
        img : "images/bomb.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    },
    {
        name: "emoji",
        img : "images/emoji.jpg"
    }
]

imageArray.sort(()=>0.5-Math.random())

const gridDisplay = document.querySelector("#grid")
let score = 0
let chances = 3

function makeGrid(){
    for(let i=0;i<imageArray.length;i++){
        const imgElement = document.createElement("img")
        imgElement.setAttribute("src","images/hidden.jpg")
        imgElement.setAttribute("data-id",i)
        imgElement.addEventListener("click",leftClickAction)
        imgElement.addEventListener("contextmenu",rightClickAction)
        gridDisplay.append(imgElement)
    }
}

makeGrid()
const imageElements = document.querySelectorAll("img")
const scoreDisplay = document.querySelector("#score")
const chancesDisplay = document.querySelector("#chances")
chancesDisplay.textContent = chances

function leftClickAction(){
    const clickedImageId = this.getAttribute("data-id")
    this.setAttribute("src",imageArray[clickedImageId].img)
    if(imageArray[clickedImageId].name=="emoji"){
        score++
        scoreDisplay.textContent=score
    }
    else{
        chances--
        chancesDisplay.textContent = chances
    }
    if(chances===0){
        setTimeout(()=>alert("Game Over"),200)
        imageElements.forEach((img) =>{
            img.removeEventListener("click",leftClickAction)
            img.removeEventListener("contextmenu",rightClickAction)
        })
    }
    this.removeEventListener("click",leftClickAction)
    this.removeEventListener("contextmenu",rightClickAction)
}

function rightClickAction(){
    this.setAttribute("src","images/flag marker.jpg")
}

const newGameBtn=document.querySelector("#new-game")
const unHideBtn = document.querySelector("#unhide")

newGameBtn.addEventListener("click",()=>location.reload())
unHideBtn.addEventListener("click",()=>{
    imageElements.forEach((img)=>{
        const imageId = img.getAttribute("data-id")
        img.setAttribute("src",imageArray[imageId].img)
        img.removeEventListener("click",leftClickAction)
        img.removeEventListener("contextmenu",rightClickAction)
    })
})
