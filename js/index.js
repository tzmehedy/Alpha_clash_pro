function continueGaming(){
    const alphabet = getAlphabet();
    const currentAlphabet = document.getElementById("alphabetShow");
    currentAlphabet.innerText = alphabet;
    setBackGroundInKeyBoard(alphabet);  
}



function play(){
    addHiddenById("home_container");
    removeHiddenById("paly_ground_container");
    continueGaming();
}