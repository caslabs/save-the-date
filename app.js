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

/*
there are currently 7 days in row

*/
const times = x => f => {
    if (x > 0) {
      f()
      times (x - 1) (f)
    }
  }
  
  // use it
  let DaysInJan = 30;
  let dayNum = 1;
  let dayArr = [ ]
  times (DaysInJan) (() => {
    var eachDay = document.createElement('div');
    eachDay.classList.add('day');
    eachDay.innerHTML = dayNum
    dayArr.push(eachDay);
    dayNum++;
});

console.log(dayArr[0]);
var RowSize = 7;
var arrays = [];
while (dayArr.length > 0)
    arrays.push(dayArr.splice(0, RowSize))

console.log(arrays);
var rowDiv = document.createElement('div');
arrays.forEach(function(val,index) { 
    rowDiv.classList.add('row');
    val.forEach(function(e) {
        rowDiv.appendChild(e);
    })
 });

console.log(rowDiv);