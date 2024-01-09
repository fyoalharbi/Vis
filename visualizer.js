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
    x = document.getElementById('input').value;
    
    ls = x.split(',');// string -> list //
    values = ls.map(n => {  return parseInt(n);} ); //convert to INT 
    validity = values.every(n => {return ValidateInput(n)});

    if (!validity){
        ErMes.innerText = "Enter a number";
    }
    else{
        //string to number
        
        ErMes.innerText = "";
        switch(algo.value){
            case "bubble sort":
                bubblefun(values);
            break;
            case "quick sort":
                quickfun(values);
            break;
            case "linear sort":
                linearfun(values);
            break;

            default:
            break;
                        
        }

        }
    }
);
function ValidateInput(n){
   
    if(n == n == true){
        return true;
    }
    else{
        return false;
    }
}
/*
function setup() {
    canvas = createCanvas(500, 1000);
}

function draw(){
    background(60);

    for(let i = 0 ; i < values.length ; i++){
        stroke(255);
        linear(i, values[i], i)
    }
}
function CreateNodes(){

}
function linearfun(n){

}
function quickfun(n){
    alert(n);
}
function bubblefun(n){

}
*/
 }, false);



