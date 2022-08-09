

const selectedbutton = document.querySelectorAll(".timeline");
const bDown = document.querySelector("#downButton");
const bUp = document.querySelector("#upButton");
const bDown_con = document.querySelector("#downButton_con");
const bUp_con = document.querySelector("#upButton_con");
//const bUp_con = document.querySelector("#upButton_content");
//const bDown_con = document.querySelector("#downButton_content");

bDown.addEventListener("click", goDown);
bUp.addEventListener("click", goUp);
bDown_con.addEventListener("click", goDown);
bUp_con.addEventListener("click", goUp);


//bUp_con.addEventListener("click", goUp);
//bDown_con.addEventListener("click", goDown);





//for (var j = 0; j < selectedbutton.length; j++)
//{
    
//    selectedbutton[j].addEventListener("click", arrayselected);
//};

//display current list



//selectedbutton.addEventListener("click", arrayselected);
//bDown.addEventListener("click", goDown);


//select all the articles with class art-cls
const art_list = document.querySelectorAll(".art-cls");
//display none of the articles
art_list.forEach(ele => {
    ele.style.display = "none";
    
});


//for (var j = 0; j < selectedbutton.length; j++) {
//    selectedbutton[j].addEventListener("click"), (e) => {
//        e.currentTarget.nextElementSibiling.classList.toggle(arrayselected)
//    };
//}

function displayCur() {
    //if (current_arti != 0) {
    //    art_list[current_arti - 2].style.display = "none";
    //    art_list[current_arti - 1].style.display = "block";
    //    art_list[current_arti - 1].style.width = "25em";
    //    art_list[current_arti - 1].style.height = "25em";
    //    //art_list[current_arti].style.display = "none"; 
    //}
    //else {
    //    art_list[current_arti + 2].style.display = "none";
    //}
    //art_list[current_arti].style.display = "block";
    //art_list[current_arti].style.width = "50em";
    //art_list[current_arti].style.height = "50em";
    //if (current_arti != art_list.length - 1) {
    //    art_list[current_arti + 1].style.display = "block";
    //    art_list[current_arti + 1].style.width = "25em";
    //    art_list[current_arti + 1].style.height = "25em";
    //    art_list[current_arti + 2].style.display = "none";
    //}


    //art_list[current_arti].style.display = "block";

    for (var j = 0; j < art_list.length; j++) {

        if (j == current_arti) {
            art_list[j].style.display = "block";
            selectedbutton[j].style.backgroundColor = "cornflowerblue";
        }
        else {
            art_list[j].style.display = "none";
            selectedbutton[j].style.backgroundColor = "darkturquoise";

        }
    }



    //}
    //else {
    //    art_list[current_arti].style.display = "none";

    //}
    
    
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


function goDown() {

    if (current_arti != art_list.length - 1) {
        current_arti++;
        displayCur();
    }
    else {
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




hambutton.addEventListener("click", () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
);


