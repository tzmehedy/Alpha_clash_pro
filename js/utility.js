function addHiddenById(id){
    const hiddenContainer = document.getElementById(id);
    hiddenContainer.classList.add('hidden');
}

function removeHiddenById(id){
    const removeHiddenContainer = document.getElementById(id);
    removeHiddenContainer.classList.remove('hidden');
}

function setBackGroundInKeyBoard(id){
    const getAlphabetSection = document.getElementById(id);
    getAlphabetSection.classList.add("bg-[#FFA500]");

}

function getAlphabet(){
    const alphabetInString = 'abcdefghijklmnopqrstuvwxyz';
    const splitAlphabetInString = alphabetInString.split("");
    
    const randomNumber = Math.random() * 25;
    
    const index = Math.round(randomNumber);
    const alphabet = splitAlphabetInString[index];

    return alphabet;
}