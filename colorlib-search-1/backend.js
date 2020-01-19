
/*

Firebase communication and frontend manipulation through JavaScript.

*/

// var searchResult = new String;

// function getInputValue(){
//     searchResult = document.getElementById("search").value;
// }



// function fb_ref_name(search_input) {
//     firebase.database().ref().child(search_input).child("Name");
// }


var searchResult = new String;

// var name_ref = firebase.database().ref().child(searchResult).child("Name");

// function getInputValue(){
//     searchResult = document.getElementById("search").value;
//     changeTop();
// }

// function changeTop() {
//     document.getElementById("chem_name").innerHTML = name_;
// }





var config = {
    apiKey: "AIzaSyDhNVT6xwJpCMf2kMtgPkxiXOdVKT6jV7w",
    authDomain: "chemboi-cd24f.firebaseio.com",
    databaseURL: "https://chemboi-cd24f.firebaseio.com/",
    storageBucket: "chemboi-cd24f.firebaseio.com/.appspot.com"
};
firebase.initializeApp(config);


// Get a reference to the database service
var database = firebase.database();


// Get elements
const preObject_name = document.getElementById("chem_name");
const preObject_env = document.getElementById("env_eff");
const preObject_health = document.getElementById("health_eff");


// Create Reference
const name_REF = firebase.database().ref().child(searchResult).child("Name")
const envEff_REF = firebase.database().ref().child(searchResult).child("EnvEff")
const healthEff_REF = firebase.database().ref().child(searchResult).child("HealthEff")


// Sync Object Changes
name_REF.on('value', snap => {
    preObject_name.innerText = JSON.stringify(snap.val(), null, 3);
});
envEff_REF.on('value', snap => {
    preObject_env.innerText = JSON.stringify(snap.val(), null, 3);
});
healthEff_REF.on('value', snap => {
    preObject_health.innerText = JSON.stringify(snap.val(), null, 3);
});


var input = new String;

var chemicals = [[Alcohol, ["Kills trees", "Can kill animals if hadles unresponsibly"], ["Bad for health", "Impairs driving"], ["Water"] ]]

function getInputValue(){
    searchResult = document.getElementById("search").value;
    changePage();
}


function changePage() {
    document.getElementById("chem_name").innerHTML = display_name(chemicals);
    document.getElementById("environmental-hazard").innerHTML = display_Env(chemicals);
    document.getElementById("damage-to-health").innerHTML = display_Health(chemicals);
    document.getElementById("alternatives").innerHTML = display_Alt(chemicals);


}


function display_name(chemicals) {
    var i;
    for (i = 0; i < chemicals.length; i++){
        if (chemicals[i][0]  == input){
            // dbRefObject.on('value', snap => {
                //preObject.innerText = JSON.stringify(snap.val(), null, 3);
            //});
            document.getElementById("demo").innerHTML = chemicals[i][0];

        }
    }
}

function display_Env(chemicals) {
    var i;
    for (i = 0; i < chemicals.length; i++){
        if (chemicals[i][0]  == input){
            // dbRefObject.on('value', snap => {
                //preObject.innerText = JSON.stringify(snap.val(), null, 3);
            //});
            document.getElementById("demo").innerHTML = chemicals[i][1];

        }
    }
}

function display_Health(chemicals) {
    var i;
    for (i = 0; i < chemicals.length; i++){
        if (chemicals[i][0]  == input){
            // dbRefObject.on('value', snap => {
                //preObject.innerText = JSON.stringify(snap.val(), null, 3);
            //});
            document.getElementById("demo").innerHTML = chemicals[i][2];

        }
    }
}

function display_Alt(chemicals) {
    var i;
    for (i = 0; i < chemicals.length; i++){
        if (chemicals[i][0]  == input){
            // dbRefObject.on('value', snap => {
                //preObject.innerText = JSON.stringify(snap.val(), null, 3);
            //});
            document.getElementById("demo").innerHTML = chemicals[i][3];

        }
    }
}

