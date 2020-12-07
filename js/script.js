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
 *
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

document.getElementById("valid").addEventListener("click",function(){

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
});

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