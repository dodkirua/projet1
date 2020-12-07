let value = valueRandom();
let error = 0;
let answer = document.getElementById("answer");
let restart = document.getElementById("restart");
let input = document.getElementById("value");
input.value="";

function valueRandom(){
    return Math.trunc(Math.random()*100);
}

/**
 * Test les valeurs de val en la comparant a value retourne true si c'est identique
 * et small pour plus petit et big pour plus grand
 * @param val
 * @returns {string|boolean}
 */
function testValue (val){
    if (val === value){
        return true;
    }
    else if(val < value){
        return "small";
    }
    else {
        return "big";
    }
}

/**
 * fonction de réaction au event
 */
function reaction (){
    let valTest = input.value;

    if (input.valueAsNumber === "NaN"){
        answer.innerHTML = "Ceci n'est pas un chiffre ou un nombre";
    }
    else {
        valTest = Math.trunc(valTest);
        let test = testValue(valTest);
        if (test === true){
            answer.innerHTML = "Félicitation la réponse : "+valTest+" est le bonne réponse";
            restart.style.display = "block";
        }
        else {
            error +=1;
            if (error === 10){
                answer.innerHTML = "Dommage vous avez perdu!"
                restart.style.display = "block";
            }
            else if(test === "small"){
                answer.innerHTML = "La valeur est plus grande"
                document.getElementById("reminder"+error).innerHTML="Plus grand que "+valTest;
            }
            else{
                answer.innerHTML = "La valeur est plus petite"
                document.getElementById("reminder"+error).innerHTML="Plus petit que "+valTest;
            }
        }
    }
}

/**
 * reaction au clic
 */
document.getElementById("valid").addEventListener("click",reaction);

/**
 * reaction a la touche entrée
 */
document.addEventListener("keydown", function (e){

    if (e.key === "Enter"){
        reaction();
    }
})


/**
 * Bouton restart
 */
document.getElementById("restart").addEventListener('click', function (){

    for (let i=1 ; i <= error ; i++){
        document.getElementById("reminder"+i).innerHTML="";
    }
    error = 0;
    value = valueRandom();
    restart.style.display = "none";
    answer.innerHTML = "";
    input.value="";
})