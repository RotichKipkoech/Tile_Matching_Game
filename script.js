const tile = document.querySelectorAll('.tile1');

let matchedTile1 = 0;
let tile1One, tile1Two;

let disableDeck=false;

function flipTile1(e) {
    let clickedTile1 = e.target;
    clickedTile1.classList.add('flip');
    if(clickedTile1 !== tile1One && !disableDeck) {
        clickedTile1.classList.add('flip');
        if(!tile1One){
            return (tile1One = clickedTile1);
     }   
        tile1Two = clickedTile1;
        disableDeck = true;
        let tile1OneImg = tile1One.querySelector('img').src,
        tile1TwoImg = tile1Two.querySelector('img').src; 
        matchTile(tile1OneImg, tile1TwoImg);
    }
}

function matchTile(img1, img2){
    if(img1 === img2) {
        matchedTile1++;
        if (matchedTile1 == 6) {
            setTimeout(() => {
                return shuffleTile1();
            }, 1100);
        }
        tile1One.removeEventListener('click', flipTile1);
        tile1Two.removeEventListener('click', flipTile1);
        tile1One = tile1Two='';
        disableDeck = false;
    }
    else{

       setTimeout(() => {
    tile1One.classList.add('shake');
    tile1Two.classList.add('shake');   
    setTimeout(() => {
      tile1One.classList.remove('shake', 'flip');
      tile1Two.classList.remove('shake', 'flip');
      tile1One = tile1Two = '';
      disableDeck = false;
     }, 500);
   }, 0);
 }
}


function shuffleTile1() {
     matchedTile1 = 0;
     tile1One = tile1Two = '';
     disableDeck = false;
     let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
     arr.sort(() => Math.random() > 0.5 ? 1 : -1);
     tile.forEach((tile1, index) => {
        tile1.classList.remove('flip')
        let imgTag = tile1.querySelector('img');
        imgTag.src = `images/img-${arr[index]}.jpeg`;
        tile1.addEventListener('click', flipTile1);
    });
 }

   shuffleTile1();
   tile.forEach(tile1 => {
    tile1.addEventListener('click', flipTile1);
});