const tile = document.querySelectorAll(".tile1");

let matchedTile1 = 0;
let tile1One, tile1Two;

let disableDeck=false;

function flipTile1(e){
    let clickedTile1 = e.target;
    clickedTile1.classList.add("flip");
    if(tile1One !== tile1One && !disableDeck) {
        clickedTile1.classList.add("flip");
        if(!tile1One){
            return tile1One = clickedTile1;
     }   
        tile1Two = clickedTile1;
        disableDeck = true;
        let tile1OneImg = tile1One.querySelector("img").src,
        tile1TwoImg = tile1Two.querySelector("img").src;
        matchTile(tile1OneImg, tile1TwoImg);
    }
}

function matchTile(img1, img2){
    if(img1 === img2){
        matchedTile1++;
        if(matchedTile1 ==8){
           return shuffleTile1();
        }
        tile1One.removeEventListener("click",flipCard);
        tile1Two.removeEventListener("click",flipCard);
        tile1One = tile1Two="";
        return disableDeck = false;
    }
    console.log("Tile1 not matched");

setTimeout(() => {
    tile1One.classList.add("shake");
    tile1Two.classList.add("shake");   
}, 400);

setTimeout(() => {
    tile1One.classList.remove("shake", "flip");
    tile1Two.classList.remove("shake","flip");
    tile1One = tile1Two ="";
    disableDeck = false;
  }, 1200);
}

function shuffleCard(){
     matchedTile1 = 0;
     tile1One = tile1Two ="";
     tile.forEach(tile1=> {
        tile1.classList.remove("flip")
        tile1.addEventListener("click", fliptile1);
}

tile.forEach(tile1 => {
    tile1.addEventListener("click", flipTile1);
});
