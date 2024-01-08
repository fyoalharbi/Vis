//linear sort

//take input 

//create canvas, add input
document.addEventListener('DOMContentLoaded', function() {

let quick = document.getElementById('quick');
let bubble = document.getElementById('bubble');
let linear = document.getElementById('linear');
let sort = document.getElementById('confirm');
let ErMes = document.getElementById('mes');
let algo = document.getElementById('al');
//string -> list of integers

sort.addEventListener('click', () => {
    let x = document.getElementById('input').value;
    
    x = x.split(','); // string -> list // 
    let validity = x.every(n => {return ValidateInput(n)});
    alert(validity);
    if (validity === false){
        alert("not a number");
        ErMes.innerText = "Enter a number";
    }
    else{

        alert("a number");
        ErMes.innerText = "";
        switch(algo.value){
            case "bubble sort":
                
            break;
            case "quick sort":
                
            break;
            case "linear sort":
            break;

            default:
            break;
                        
        }

        }
    }
);
 }, false);


function ValidateInput(n){
    if(isNaN(n)){
        alert("FALSE");
        return false;
    }
    else{
        alert("TRUE");
        return true;
    }
}

function setup() {
    canvas = createCanvas(1000, 1000);
}

function draw(){

}
function CreateNodes(){

}
function linear(){

}
function quick(){

}
function bubble(){

}
