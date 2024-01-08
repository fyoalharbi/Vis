//linear sort

//take input 

//create canvas, add input

let x = [];
x = document.getElementById('input');
x = x.split(',');
let quick = document.getElementById('quick');
let bubble = document.getElementById('bubble');
let linear = document.getElementById('linear');
let sort = document.getElementById('confirm');
let ErMes = document.getElementById('mes');
let algo = document.querySelector('al');


sort.addEventListener('click', () => {
    if (x.length <= 0){
        ErMes = "Enter Valid Numbers!";
        alert("AA");
    }
    else{
        ErMes ="";
        switch(algo.value){
            case "bubble sort":
                alert("buble sort");
            break;
            case "quick sort":
                alert("buble sort");
            break;
            case "linear sort":
                alert("buble sort");
                break;

                default:
                    break;
                        
        }

        }
    }
);

