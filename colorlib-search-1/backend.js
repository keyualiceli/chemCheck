var searchResult = new String;

function getInputValue(){
    searchResult = document.getElementById("searchBox").value;

    changeTop();
}

function changeTop() {
    document.getElementById("chem_name").innerHTML = searchResult;
}

function database_stuff() {

    // Set the configuration for your app
    // TODO: Replace with your project's config object
    var config = {
        apiKey: "AIzaSyDhNVT6xwJpCMf2kMtgPkxiXOdVKT6jV7w",
        authDomain: "chemboi-cd24f.firebaseio.com",
        databaseURL: "https://chemboi-cd24f.firebaseio.com/",
        storageBucket: "chemboi-cd24f.firebaseio.com/.appspot.com"
    };
    firebase.initializeApp(config);

    input = "TestChem";


    

    // Get a reference to the database service
    var database = firebase.database();


    // Get elements
    const preObject_name = document.getElementById("chem_name");
    const preObject_env = document.getElementById("env_eff");
    const preObject_health = document.getElementById("health_eff");


    // Create Reference
    const name_REF = firebase.database().ref().child(input).child("Name")
    const envEff_REF = firebase.database().ref().child(input).child("EnvEff")
    const healthEff_REF = firebase.database().ref().child(input).child("HealthEff")


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





    var i;
    for (i = 0; i < chemicals.length; i++){
        if (chemicals[i][0]  == input){
           // dbRefObject.on('value', snap => {
                //preObject.innerText = JSON.stringify(snap.val(), null, 3);
            //});
            document.getElementById("demo").innerHTML = chemicals[i][1];

        }
    }
    
};