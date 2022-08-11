
let bDown = document.querySelector(".down");
let bUp = document.querySelector(".up");



bDown.addEventListener("click", goDown);
bUp.addEventListener("click", goUp);



let selectedbutton = document.querySelectorAll(".timeline");
for (let i = 0; i < selectedbutton.length; i++) {
    selectedbutton[i].addEventListener("click",
        ()=> {
            current_arti = i;
            displayCur();
        })
}



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

    document.getElementById("end_of_page").innerHTML = "";
    document.getElementById("start_of_page").innerHTML = "";
}


function goDown() {

    
    if (current_arti != art_list.length - 1) {
        current_arti++;
        displayCur();
    }
    else {
    //    document.getElementById("informing") = "End of page";
        //alert("End of page!");

        document.getElementById("end_of_page").innerHTML = "END OF PAGE!";
    }
}


function goUp() {
    if (current_arti != 0) {
        current_arti--;
        displayCur();
    }
    else {
        document.getElementById("start_of_page").innerHTML = "START OF PAGE!";


    }
}





var current_arti = 0;


displayCur();





    


