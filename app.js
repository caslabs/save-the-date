document.body.addEventListener('click', function(e){
    if (e.target.className === 'day') {
       //when target is pointing to day boxes
       var userTxt = document.createTextNode(window.prompt("New Event?","oof"));
       var p = document.createElement("p");
       p.appendChild(userTxt);
       e.target.appendChild(p);
       e.target.style.backgroundColor="black";
       e.target.style.color="white";
    }
});