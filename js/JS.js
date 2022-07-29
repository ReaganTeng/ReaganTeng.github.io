function clickedMe() {
    document.getElementById("hist").style.backgroundColor = "pink"; // me return the event
}

const bUp = document.querySelector("#upButton");
const bDown = document.querySelector("#downButton");


bUp.addEventListener("click", goUp);
bDown.addEventListener("click", goDown);





//display none of the articles
//select all the articles with class art-cls
const art_list = document.querySelectorAll(".art-cls");
//apply these to here
//rezize all articles to small
//rezize current one to big size
art_list.forEach(ele => {



    //ele.style.width = "25em";
    //ele.style.height = "25em";
    //ele[current_arti].style.height = "50em";
    //ele[current_arti].style.width = "50em";

    ele.style.display = "none";
    //art_list[current_arti - 1].style.display = "block";
    //art_list[current_arti - 1].style.width = "25em";
    //art_list[current_arti - 1].style.height = "25em";
    //art_list[current_arti - 1].style.display = "block";
    //art_list[current_arti - 1].style.width = "25em";
    //art_list[current_arti - 1].style.height = "25em";
});





function displayCur() {
    if (current_arti != 0) {
        art_list[current_arti - 2].style.display = "none";
        art_list[current_arti - 1].style.display = "block";
        art_list[current_arti - 1].style.width = "25em";
        art_list[current_arti - 1].style.height = "25em";
    }
    else {
        art_list[current_arti + 2].style.display = "none";
        
    }

    art_list[current_arti].style.display = "block";
    art_list[current_arti].style.width = "50em";
    art_list[current_arti].style.height = "50em";

    if (current_arti != art_list.length - 1) {
        art_list[current_arti + 1].style.display = "block";
        art_list[current_arti + 1].style.width = "25em";
        art_list[current_arti + 1].style.height = "25em";
        art_list[current_arti + 2].style.display = "none";

    }
}



function goUp() {
    if (current_arti != 0) {
        //art_list[current_arti].style.display = "none";
        current_arti--;
        displayCur();
    }
    else {
        alert("Start of page!");
    }
}

//alert(art_list.length);
//make it display one article element at a time
function goDown() {

    if (current_arti != art_list.length - 1) {
        //art_list[current_arti].style.display = "none";
        current_arti++;
        displayCur();
    }
    else {
        alert("End of page!");
    }
 
}

//display current list
var current_arti = 0;
displayCur();