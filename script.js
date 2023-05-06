//PRAJEETH JS SCRIPTS
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    //ev.target.style.backgroundImage=document.getElementById(data);
}


function faces(){
    var x=``;
    var faceloc=document.getElementById("imagestorage");
    for(let i=1; i<9;i++)
    {
        x=x+`<img class="headimg" id="drag${i}" src="\\assets\\faces\\head${i}.png"
        draggable="true" ondragstart="drag(event)">`;
    }
    faceloc.innerHTML=x;
}

faces();