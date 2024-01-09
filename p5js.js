function setup() {
    canvas = createCanvas(1500, 500);
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