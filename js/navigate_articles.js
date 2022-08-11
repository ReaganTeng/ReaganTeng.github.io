


let selectedbutton = document.querySelectorAll(".timeline");
for (let i = 0; i < selectedbutton.length; i++) {
    selectedbutton[i].addEventListener("click",
        ()=> {
            current_arti = i;
            displayCur();
        })
}





//select all the articles with class art-cls
const art_list = document.querySelectorAll(".art-cls");
//display none of the articles
art_list.forEach(ele => {
    ele.style.display = "none";
    
});



//display the current display
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



let bDown = document.querySelector(".down");
let bUp = document.querySelector(".up");



bDown.addEventListener("click", goDown);
bUp.addEventListener("click", goUp);


//go to next index if down arrow is tapped
function goDown() {

    
    if (current_arti != art_list.length - 1) {
        current_arti++;
        displayCur();
    }
    else {
  

        document.getElementById("end_of_page").innerHTML = "END OF PAGE!";
    }
}

//go to previous index if down arrow is tapped
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





    


