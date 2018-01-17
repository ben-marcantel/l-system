const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
const button = document.getElementById('button');
let currentString = "X";
let nextString = "";


let generate = ()=>{
    for (let i = 0; i<currentString.length; i++){
        let chAt = currentString.charAt(i);
        if (chAt == "X"){
            nextString += "F[-X][X]F[-X]+FX";
        } else if (chAt == "F"){
            nextString += "FF";
        }
    } 
    currentString += nextString;
};


let draw = ()=>{
    c.beginPath();    
    c.font = "1em Futura";
    c.strokeText(currentString,0,100);
    c.strokeStyle = "red";
    c.stroke();
    c.fillStyle = 'rgb(0,0,0)';
};


let interpret = ()=>{
    for (let i =0; i<currentString.length; i++){
        let decode = currentString.charAt(i);
        if (decode == "F"){

        } else if (decode == "X"){

        } else if (decode == "+"){

        } else if (decode == "-"){

        } else if (decode == "["){

        } else (decode == "]")

    }
};


let magic = ()=>{
    for (let i=0; i<3;i++){
        generate(); 
        draw();
    };
};


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
button.addEventListener("click",magic);
 
