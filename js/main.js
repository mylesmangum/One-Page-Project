


function showModal(){
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("submission_form").style.display = "none";
    document.body.style.backgroundColor = "#222";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("submission_form").style.display = "inline";
    document.body.style.backgroundColor = "white";
}

let currSlide = 0
let images = ["./img/2-nature.jpg",
                "./img/istockphoto-1093110112-612x612.jpg",
                "./img/tree-276014__340.jpg",
                "./img/tree-736885__480.jpg"
            ]

function nextSlide() {
    currSlide+=1;
    if(currSlide == images.length){
        currSlide = 0;
    }
    document.getElementById("theImage").src = images[currSlide];
    document.getElementById("numbertext").innerHTML = (currSlide + 1) + " / 4";
}

function prevSlide() {
    currSlide-=1;
    if(currSlide == -1) {
        currSlide = images.length - 1;
    }
    document.getElementById("theImage").src = images[currSlide];
    document.getElementById("numbertext").innerHTML = (currSlide + 1) + " / 4";
}

function imageClick(index) {
    currSlide = index;
    document.getElementById("theImage").src = images[currSlide];
    document.getElementById("numbertext").innerHTML = (currSlide + 1) + " / 4";
}