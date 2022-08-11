
let bDown = document.querySelectorAll(".down");
let bUp = document.querySelectorAll(".up");


for (let i = 0; i < bDown.length; i++) {
    bDown[i].addEventListener("click", goDown);
    bUp[i].addEventListener("click", goUp);
}


const selectedbutton = document.querySelectorAll(".timeline");




//make use of more spaces
//if goes small, make picture big
//Colour can be lesser
//font spacing
//nicer buttons
//wording color




//select all the articles with class art-cls
const art_list = document.querySelectorAll(".art-cls");
//display none of the articles
art_list.forEach(ele => {
    ele.style.display = "none";
    
});



function displayCur() {
  

    for (var j = 0; j < art_list.length; j++) {

        if (j == current_arti) {
            art_list[j].style.display = "block";
            selectedbutton[j].style.backgroundColor = "cornflowerblue";
        }
        else {
            art_list[j].style.display = "none";
            selectedbutton[j].style.backgroundColor = "#00BFFF";

        }
    }
    
    
}


/*//animation least priority
//prioritise on responsive*/
//function arrayselected() {
//    //if (current_arti != art_list.length - 1) {
//    //    current_arti++;
//    //    displayCur();
//    //}
//    //else {
//    //    alert("End of page!");
//    //}
//    //current_arti = ;
//    alert(j);
//    //return indexOf();
//    //alert(selectedbutton.indexOf);
//    displayCur();
//}



//function chooseApple(a) {
//    current_arti = a;
//    displayCur();
//}

function goDown() {

    if (current_arti != art_list.length - 1) {
        current_arti++;
        displayCur();
    }
    else {
    //    document.getElementById("informing") = "End of page";
        alert("End of page!");

    }
}


function goUp() {
    if (current_arti != 0) {
        current_arti--;
        displayCur();
    }
    else {
        alert("Start of page!");
    }
}


var current_arti = 0;


displayCur();





    


