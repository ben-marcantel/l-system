const canvas = document.getElementById("canvas");
const c =canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 const alphabet = "A, B";
 const axiom = "A";
 const rules = {
    "A" : "AB",
    "B": "A"
}

let currentString ="A";
let nextString ="";


function generate(){

    for (let i =0; i<currentString.length; i++){
        let c = currentString.charAt(i);
        if (c == "A"){
            nextString +="AB";
        } else if (c == "B"){
            nextString += "A";
        }
    }
    
    currentString = nextString;
    
};

function draw(){
    c.beginPath();    
    c.font = "30px Futura";
    c.strokeText(currentString,canvas.width/25,canvas.height/2,)
    c.strokeStyle= "red";
    c.stroke();
    c.fillStyle = 'rgb(0,0,0)';

};


function magic(){
    for (let i=0; i<6;i++){
        generate();
        draw();
        console.log(currentString);
    };
   
}
magic();
