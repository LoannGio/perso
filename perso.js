// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

function linkDOI() {
    let dois = document.getElementsByClassName("doi");
    let titles = document.getElementsByClassName("title");
    for(let i = 0; i < dois.length; i++){
        titles[i].innerHTML = "<a href=\"https://doi.org/"+dois[i].text+"\">"+titles[i].textContent+"</a>";
    }
}