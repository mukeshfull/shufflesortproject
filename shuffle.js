var colorArray = ["#6F98A8","#2B8EAD","#2F454E","#2B8EAD","#2F454E","#EFEFEF","#BFBFBF","#6F98A8","#2F454E"]

window.onload =  () => {
    var numberContianer = document.getElementById("numberCards");
    for(let i = 0 ; i < 9;i++) {
        let outerDiv = document.createElement('div');
        outerDiv.id = "OuterDiv" + i;
        outerDiv.style.display = "flex";
        outerDiv.style.flexDirection = "row";
        let leftDiv = document.createElement('div');
        leftDiv.className = "leftNumberDiv";
        leftDiv.style.backgroundColor = colorArray[i];
        let rightDiv = document.createElement('div');
        rightDiv.className = "numberBox";
        rightDiv.style.backgroundColor = colorArray[i];
        if( window.innerWidth < 600 ) {
            rightDiv.style.backgroundColor = "#EFEFEF";
        }
        if(window.innerWidth < 600 && i === 5) {
            leftDiv.style.backgroundColor = "#BFBFBF";
        }
        rightDiv.append((i+1)+'');
        outerDiv.append(leftDiv);
        outerDiv.append(rightDiv);
        numberContianer.appendChild(outerDiv)
       
    }

};

function getAllTheNumberDivs() {
    var divArr = [];
    for(let i = 0 ; i < 9;i++) {
        divArr[i] = document.getElementById("OuterDiv" + i);
    }
    return divArr;
}

function suffleNumbers() {
    var randomArr = [];
    while(randomArr.length < 9){
        var r = Math.floor(Math.random() * 9) + 1;
        if(randomArr.indexOf(r) === -1) randomArr.push(r);
    }
    console.log(randomArr);
    var divArr = getAllTheNumberDivs();
    var numberContianer = document.getElementById("numberCards");
    numberContianer.innerHTML = '';
    for(let i = 0 ; i < 9;i++) {
        numberContianer.append(divArr[randomArr[i]-1]);
    }

}

function sortNumber() {
    var divArr = getAllTheNumberDivs();
    var numberContianer = document.getElementById("numberCards");
    numberContianer.innerHTML = '';
    for(let i = 0 ; i < 9;i++) {
        numberContianer.append(divArr[i]);
    }
}