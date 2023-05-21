const tile = document.querySelectorAll(".tile1");

function fliptile1(e){
    console.log(e.target);
}



tile.forEach(tile1=> {
    tile1.addEventListener("click",fliptile1);
});


