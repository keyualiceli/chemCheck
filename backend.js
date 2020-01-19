var searchResult = new String;


function getInputValue(){
    searchResult = document.getElementById("searchBox").value;
}

function changeTop() {
    document.getElementById("headerTxt").innerHTML = searchResult;

}